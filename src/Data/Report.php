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
    use FluentlyGetsAndSets;

    protected string $id;
    protected string $domain;
    protected null|array $report = [];
    protected string $status;
    protected string $created_at;

    public static function create($id = null)
    {
        if ($id) {
            $instance = new self();
            $instance->id($id);

            return $instance;
        }

        return new self();
    }

    public function id($id = null)
    {
        return $this->fluentlyGetOrSet('id')->args(func_get_args());
    }

    public function domain($domain = null)
    {
        return $this->fluentlyGetOrSet('domain')->args(func_get_args());
    }

    public function report($report = [])
    {
        return $this->fluentlyGetOrSet('report')->args(func_get_args());
    }

    public function status($status = null)
    {
        return $this->fluentlyGetOrSet('status')->args(func_get_args());
    }

    public function created_at($created_at = null)
    {
        return $this->fluentlyGetOrSet('created_at')->args(func_get_args());
    }

    public function path()
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

    public function load()
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

    public function save()
    {
        File::put($this->path(), YAML::dump($this->toArray()));

        return $this;
    }
    public function delete()
    {
        File::delete($this->path());

        return true;
    }

    public static function preparePath()
    {
        $path = storage_path('statamic/seopulse/reports');

        if (! File::exists($path)) {
            File::makeDirectory($path, 0755, true);
        }

        return $path;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'domain' => $this->domain,
            'report' => $this->report,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }

    public function toJson($options = 0)
    {
        return json_encode($this->toArray());
    }
}
