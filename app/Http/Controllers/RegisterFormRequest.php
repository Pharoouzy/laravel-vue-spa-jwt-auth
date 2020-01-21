<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterFormRequest extends FormRequest {
    //
    public function authorize() {
         return true;
    }
    public function rules() {
        return [
            'name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:10',
        ];
    }
}
