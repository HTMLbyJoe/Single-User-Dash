<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/blog/{blogName}/posts', 'PostsController@index');

Route::any('{blogName?}', function()
{
    return View::make('default');
})->where('blogName', '([A-z\d-\/_.]+)?');
