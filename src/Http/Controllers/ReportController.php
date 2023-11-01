<?php

namespace LuckyMedia\SeopulseStatamic\Http\Controllers;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use LuckyMedia\SeopulseStatamic\Data\Report;
use LuckyMedia\SeopulseStatamic\Http\Requests\StoreReportRequest;
use LuckyMedia\SeopulseStatamic\Jobs\GenerateDomainReportJob;
use Statamic\Http\Controllers\CP\CpController;

class ReportController extends CpController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        return view('seopulse::cp.index');
    }

    public function fetch()
    {
        $reports = collect(Report::all()->toArray())
            ->transform(function ($report) {
                return [
                    'id' => $report['id'],
                    'domain' => $report['domain'],
                    'created_at' => $report['created_at'],
                    'status' => $report['status'],
                    'view_url' => '/cp/seopulse/' . $report['id'],
                ];
            })
            ->toArray();

        return response()->json($reports);
    }

    public function show($id)
    {
        $report = Report::find($id);

        if (! $report) {
            return redirect()->route('seopulse::cp.index');
        }

        $report = $report->toArray();

        return view('seopulse::cp.show', [
            'data' => $report,
            'domain' => $report['domain']
        ]);
    }

    public function create()
    {
        return view('seopulse::cp.create');
    }

    public function store(StoreReportRequest $request)
    {
        $response = Http::post('https://seopulse.app/api/', [
            'domain' => $request->domain,
        ]);

        if ($response->failed()) {
            throw new HttpResponseException(response()->json([
                'success' => false,
                'message' => 'Failed to get report',
                'data' => $response->json(),
            ]));
        }

        $payload = $response->json()['data'];

        $report = Report::create()
            ->id($payload['id'])
            ->domain($payload['domain'])
            ->status($payload['status'] ?? 'pending')
            ->created_at($payload['created_at']);

        $report->save();

        GenerateDomainReportJob::dispatch($report)
            ->onQueue(config('statamic.seopulse.queue'));

        return response()->json([
            'success' => true,
            'message' => 'Report created',
        ]);
    }

    public function destroy($id)
    {
        $report = Report::find($id);

        if (! $report) {
            return redirect()->route('seopulse::cp.index');
        }

        $report->delete();

        return response()->json([
            'success' => true,
            'message' => 'Report Deleted',
        ]);
    }
}
