<?php

namespace LuckyMedia\SeopulseStatamic\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Log;
use LuckyMedia\SeopulseStatamic\Data\Report;

class GenerateDomainReportJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $uniqueFor = 300;

    public function __construct(
        public Report $report
    ) {}

    public function handle()
    {
        $payload = $this->poll();

        $report = Report::find($payload['id'])
            ->report($payload['report'])
            ->status($payload['status']);

        $report->save();
    }

    protected function poll()
    {
        sleep(3);
        $response = Http::get("https://seopulse.app/api/{$this->report->id()}");

        Log::info("https://seopulse.app/api/{$this->report->domain()}");

        if ($response->failed()) {
            Log::info($response->json());
        }

        $data = $response->json()['data'];

        if ($data['status'] !== 'completed') {
            return $this->poll();
        }

        return $data;
    }

    public function uniqueId(): string
    {
        return $this->report->id();
    }
}
