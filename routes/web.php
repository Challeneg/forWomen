<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('inst7', function () {
    return view('test'); //確認用 - ライブ配信
});

//OS切り替え
Route::get('os', 'AdController@os');

//確認
Route::get('cccheck', function () {
    // return view('test');
    return view('clexample'); //チャットレディーsample
});
