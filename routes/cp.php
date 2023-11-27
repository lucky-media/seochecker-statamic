<?php

use LuckyMedia\SeopulseStatamic\Http\Controllers\ReportController;

Route::middleware('statamic.cp.authenticated')->group(function () {
    Route::get('/seopulse', [ReportController::class, 'index'])->name('seopulse.index');
    Route::get('/seopulse/create', [ReportController::class, 'create'])->name('seopulse.create');
    Route::get('/seopulse/fetch', [ReportController::class, 'fetch'])->name('seopulse.fetch');
    Route::get('/seopulse/{id}', [ReportController::class, 'show'])->name('seopulse.show');
    Route::delete('/seopulse/{id}', [ReportController::class, 'destroy'])->name('seopulse.destroy');
});
