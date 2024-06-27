@extends('layout')
@section('title', 'Contact')

@section('content')

    <h2 class="center">
        <a
        href="mailto:{{env('Author_Mail')}}?subject="Public-Laravel_Page" "> Contact: {{env('Author_Mail')}} </a>
    </h2>
@endsection

