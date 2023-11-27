<?php

namespace LuckyMedia\SeopulseStatamic\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use LuckyMedia\SeopulseStatamic\Rules\ValidDomain;

class StoreReportRequest extends FormRequest
{
    public function rules()
    {
        return [
            'domain' => ['required', 'url', new ValidDomain]
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'data' => $validator->errors()
        ]));
    }
}
