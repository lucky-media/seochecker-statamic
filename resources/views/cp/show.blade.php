@extends('statamic::layout')
@section('title', 'SEOPulse View Report')

@section('content')
    <div class="flex items-center mb-5">
        <h1 class="flex-1">Report for: {{ $data['domain'] }}</h1>
    </div>

    <sp-show-report :report="{{ Illuminate\Support\Js::from($data['report']) }}" />
@endsection
