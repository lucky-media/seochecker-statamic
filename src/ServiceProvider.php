<?php

namespace LuckyMedia\SeopulseStatamic;

use Statamic\Facades\CP\Nav;
use Statamic\Facades\Permission;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'cp' => __DIR__.'/../routes/cp.php',
        'actions' => __DIR__.'/../routes/actions.php',
    ];

    protected $vite = [
        'input' => [
            'resources/css/sp-pulse.css',
            'resources/js/sp-pulse.js',
        ],
        'publicDirectory' => 'resources/dist',
    ];

    public function bootAddon(): void
    {
        $this->bootAddonViews()
            ->bootAddonNav()
            ->bootAddonPermisions();
    }

    protected function bootAddonViews()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'seopulse');

        return $this;
    }

    protected function bootAddonNav()
    {
        Nav::extend(function ($nav) {
            $nav->content('SEO Pulse')
                ->section('Tools')
                ->route('seopulse.index')
                ->can('view seopulse tool')
                ->icon('seo-search-graph');
        });

        return $this;
    }

    protected function bootAddonPermisions()
    {
        Permission::group('seopulse', 'SEO Pulse', function () {
            Permission::register('view seopulse tool')
                ->label('View SEOPulse');

            Permission::register('can delete seopulse report')
                ->label('Delete SEOPulse report');
        });
    }

    protected function registerAddonConfig()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/seopulse.php', 'statamic.seopulse');

        $this->publishes([
            __DIR__.'/../config/seopulse.php' => config_path('statamic/seopulse.php'),
        ], 'statamic-seopulse-config');

        return $this;
    }

}
