@extends('statamic::layout')
@section('title', 'SEOPulse Create Report')

@section('content')
    <div class="flex items-center mb-3">
        <h1 class="flex-1">Create Report</h1>
    </div>
    <div>
        <sp-create-report
            app_url="{{ config('app.url') }}"
            app_env="production"
            create_report_url="{{ route('statamic.seopulse.store') }}"
        />
    </div>
@stop
