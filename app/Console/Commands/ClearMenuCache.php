<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\MenuService;

class ClearMenuCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'menu:clear-cache';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear all menu cache';

    /**
     * Execute the console command.
     */
    public function handle(MenuService $menuService)
    {
        $this->info('Clearing menu cache...');
        
        $menuService->clearMenuCache();
        
        $this->info('Menu cache cleared successfully!');
        
        return 0;
    }
}
