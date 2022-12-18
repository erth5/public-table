@extends('layout')
@section('title', 'About')

@section('content')
    <h2 class="center">
        Website is written in Laravel by {{env('Author')}}
    </h2>

@endsection

