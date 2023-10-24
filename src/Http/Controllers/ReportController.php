<?php

namespace LuckyMedia\SeopulseStatamic\Http\Controllers;

use Illuminate\Http\Request;
use LuckyMedia\SeopulseStatamic\Data\Report;
use Statamic\Http\Controllers\CP\CpController;

class ReportController extends CpController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        $reports = Report::all()->toArray();

        $reports = collect($reports)
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

        return view('seopulse::cp.index', [
            'reports' => $reports,
        ]);
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
        ]);
    }

    public function create()
    {
        return view('seopulse::cp.create');
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
