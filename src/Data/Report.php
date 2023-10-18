<?php

namespace LuckyMedia\SeopulseStatamic\Data;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Statamic\Facades\File;
use Statamic\Facades\Folder;
use Statamic\Facades\YAML;
use Statamic\Support\Traits\FluentlyGetsAndSets;

class Report implements Arrayable, Jsonable
{
    protected string $id;
    protected string $domain;
    protected array $report;
    protected string $status;
    protected string $created_at;

    public static function create($id = null): self
    {
        if ($id) {
            $instance = new self();
            $instance->id($id);

            return $instance;
        }

        return new self();
    }

    public function id($id = null): static
    {
        $this->id = $id;

        return $this;
    }

    public function domain($domain = null): static
    {
        $this->domain = $domain;

        return $this;
    }

    public function report($report = []): static
    {
        $this->report = $report;

        return $this;
    }

    public function status($status = null): static
    {
        $this->status = $status;

        return $this;
    }

    public function created_at($created_at = null): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function path(): string
    {
        return storage_path('statamic/seopulse/reports/'.$this->id.'.yaml');
    }

    public static function find($id)
    {
        $instance = static::create($id);

        if (! $instance->exists()) {
            return;
        }

        return $instance->load();
    }

    public static function all()
    {
        $folders = collect(Folder::getFiles(static::preparePath()));

        if ($folders->isEmpty()) {
            return $folders;
        }

        return $folders
            ->map(function ($path) {
                $file = pathinfo($path);

                if ($file['extension'] !== 'yaml') {
                    return null;
                }

                return pathinfo($path)['filename'];
            })
            ->filter()
            ->map(function ($id) {
                return static::find($id);
            })
            ->values();
    }

    public function load(): static
    {
        $raw = YAML::parse(File::get($this->path()));

        $this->id = $raw['id'];
        $this->domain = $raw['domain'];
        $this->report = $raw['report'];
        $this->status = $raw['status'];
        $this->created_at = $raw['created_at'];

        return $this;
    }


    public function exists()
    {
        return File::exists($this->path());
    }

    public function save(): static
    {
        File::put($this->path(), YAML::dump($this->toArray()));

        return $this;
    }
    public function delete(): bool
    {
        File::delete($this->path());

        return true;
    }

    public static function preparePath(): string
    {
        $path = storage_path('statamic/seopulse/reports');

        if (! File::exists($path)) {
            File::makeDirectory($path, 0755, true);
        }

        return $path;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'domain' => $this->domain,
            'report' => $this->report,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }

    public function toJson($options = 0): bool|string
    {
        return json_encode($this->toArray());
    }
}
