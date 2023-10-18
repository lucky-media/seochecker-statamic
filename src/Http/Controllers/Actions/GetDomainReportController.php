<?php

namespace LuckyMedia\SeopulseStatamic\Http\Controllers\Actions;

use Http;
use Illuminate\Http\Exceptions\HttpResponseException;
use LuckyMedia\SeopulseStatamic\Data\Report;
use LuckyMedia\SeopulseStatamic\Http\Requests\DomainReportRequest;
use Statamic\Http\Controllers\Controller;

class GetDomainReportController extends Controller
{
    public function __invoke(DomainReportRequest $request)
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

        $data = $response->json()['data'];

        $data = $this->pollReport($data['id']);

        $report = Report::create()
            ->id($data['id'])
            ->domain($data['domain'])
            ->report($data['report'] ?? [])
            ->status($data['status'])
            ->created_at($data['created_at']);

        $report->save();

        return response()->json([
            'success' => true,
            'message' => 'Report created',
            'data' => $report->toArray(),
        ]);
    }

    protected function pollReport($id)
    {
        sleep(3);
        $response = Http::get("https://seopulse.app/api/{$id}");

        if ($response->failed()) {
            throw new HttpResponseException(response()->json([
                'success' => false,
                'message' => 'Failed to get report',
                'data' => $response->json(),
            ]));
        }

        $data = $response->json()['data'];

        if ($data['status'] !== 'completed') {
            return $this->pollReport($id);
        }

        return $data;
    }
}
