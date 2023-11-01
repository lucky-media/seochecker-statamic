<?php

// suse LuckyMedia\SeopulseStatamic\Http\Controllers\Actions\GetDomainReportController;
use LuckyMedia\SeopulseStatamic\Http\Controllers\ReportController;

//Route::post('/domain-report', GetDomainReportController::class)->name('seopulse.domain-report');
Route::post('/seopulse', [ReportController::class, 'store'])->name('seopulse.store');
