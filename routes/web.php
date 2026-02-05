<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('home');

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->name('contacts.index');

Route::get('/contacts/{contact}', function () {
    return Inertia::render('ContactDetail');
})->name('contacts.show');

Route::get('/pipeline', function () {
    return Inertia::render('Pipeline');
})->name('pipeline.index');

Route::get('/deals/{deal}', function () {
    return Inertia::render('DealDetail');
})->name('deals.show');

Route::get('/tasks', function () {
    return Inertia::render('Tasks');
})->name('tasks.index');
