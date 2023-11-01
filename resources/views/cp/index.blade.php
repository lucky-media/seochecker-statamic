@extends('statamic::layout')
@section('title', 'SEOPulse Reports')

@section('content')
    <div class="flex items-center mb-3">
        <h1 class="flex-1">SEOPulse</h1>
    </div>
    <div>
        <sp-index />
    </div>
@stop
