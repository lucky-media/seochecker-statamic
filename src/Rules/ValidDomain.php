<?php

namespace LuckyMedia\SeopulseStatamic\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class ValidDomain implements ValidationRule
{

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $response = Http::withOptions([
            'timeout' => 30,
            'return_transfer' => true,
            'follow_location' => true,
            'no_body' => true,
            'header' => true,
        ])->get($value);

        $broken = $this->getRemoteStatus($response);

        if ($broken) {
            $fail('The ' . $attribute . ' is a broken link. Please check if the link is online');
        }
    }

    protected function getRemoteStatus($response): bool
    {
        if ($response->failed() || $response->serverError() || $response->forbidden()) {
            return true;
        }

        $status = (string) $response->status();

        if (str_starts_with($status, '4') || str_starts_with($status, '5') || $status == '0') {
            return true;
        }

        return false;
    }
}
