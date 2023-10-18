<?php

use LuckyMedia\SeopulseStatamic\Http\Controllers\Actions\GetDomainReportController;

Route::post('/domain-report', GetDomainReportController::class)->name('seopulse.domain-report');
