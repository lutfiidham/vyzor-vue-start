<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Inertia\Inertia;

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});

// Demo routes - all pages moved under /demo/* prefix
Route::prefix('demo')->group(function () {

    // Authentication pages (demo)
    Route::get('pages/authentication/reset-password/basic', function () {
        return Inertia::render('demo/pages/authentication/reset-password/basic');
    });
    Route::get('pages/authentication/sign-up/basic', function () {
        return Inertia::render('demo/pages/authentication/sign-up/basic');
    });
    Route::get('pages/authentication/sign-in/basic', function () {
        return Inertia::render('demo/pages/authentication/sign-in/basic');
    });
    Route::get('pages/authentication/coming-soon', function () {
        return Inertia::render('demo/pages/authentication/coming-soon');
    });
    Route::get('pages/authentication/create-password/basic', function () {
        return Inertia::render('demo/pages/authentication/create-password/basic');
    });
    Route::get('pages/authentication/create-password/cover', function () {
        return Inertia::render('demo/pages/authentication/create-password/cover');
    });
    Route::get('pages/authentication/lock-screen/basic', function () {
        return Inertia::render('demo/pages/authentication/lock-screen/basic');
    });
    Route::get('pages/authentication/lock-screen/cover', function () {
        return Inertia::render('demo/pages/authentication/lock-screen/cover');
    });
    Route::get('pages/authentication/reset-password/cover', function () {
        return Inertia::render('demo/pages/authentication/reset-password/cover');
    });
    Route::get('pages/authentication/sign-up/cover', function () {
        return Inertia::render('demo/pages/authentication/sign-up/cover');
    });
    Route::get('pages/authentication/sign-in/cover', function () {
        return Inertia::render('demo/pages/authentication/sign-in/cover');
    });
    Route::get('pages/authentication/two-step-verification/basic', function () {
        return Inertia::render('demo/pages/authentication/two-step-verification/basic');
    });
    Route::get('pages/authentication/two-step-verification/cover', function () {
        return Inertia::render('demo/pages/authentication/two-step-verification/cover');
    });
    Route::get('pages/authentication/under-maintenance', function () {
        return Inertia::render('demo/pages/authentication/under-maintenance');
    });

    // Error pages (demo)
    Route::get('pages/error/401-error', function () {
        return Inertia::render('demo/pages/error/401-error');
    });
    Route::get('pages/error/404-error', function () {
        return Inertia::render('demo/pages/error/404-error');
    });
    Route::get('pages/error/500-error', function () {
        return Inertia::render('demo/pages/error/500-error');
    });

    // Landing and other public pages (demo)
    Route::get('pages/landing', function () {
        return Inertia::render('demo/pages/landing');
    });
    Route::get('pages/pricing', function () {
        return Inertia::render('demo/pages/pricing');
    });
    Route::get('pages/blog/blog', function () {
        return Inertia::render('demo/pages/blog/blog');
    });
    Route::get('pages/blog/blog-details', function () {
        return Inertia::render('demo/pages/blog/blog-details');
    });
    Route::get('pages/blog/create-blog', function () {
        return Inertia::render('demo/pages/blog/create-blog');
    });
    Route::get('pages/faqs', function () {
        return Inertia::render('demo/pages/faqs');
    });
    Route::get('pages/search', function () {
        return Inertia::render('demo/pages/search');
    });
    Route::get('pages/team', function () {
        return Inertia::render('demo/pages/team');
    });
    Route::get('pages/terms-conditions', function () {
        return Inertia::render('demo/pages/terms-conditions');
    });
    Route::get('pages/testimonials', function () {
        return Inertia::render('demo/pages/testimonials');
    });

  // Dashboard routes (demo)
    Route::get('dashboards/sales', function () {
        return Inertia::render('demo/dashboards/sales');
    });
    Route::get('dashboards/analytics', function () {
        return Inertia::render('demo/dashboards/analytics');
    });
    Route::get('dashboards/ecommerce/dashboard', function () {
        return Inertia::render('demo/dashboards/ecommerce/dashboard');
    });
    Route::get('dashboards/ecommerce/products', function () {
        return Inertia::render('demo/dashboards/ecommerce/products');
    });
    Route::get('dashboards/ecommerce/product-details', function () {
        return Inertia::render('demo/dashboards/ecommerce/product-details');
    });
    Route::get('dashboards/ecommerce/cart', function () {
        return Inertia::render('demo/dashboards/ecommerce/cart');
    });
    Route::get('dashboards/ecommerce/checkout', function () {
        return Inertia::render('demo/dashboards/ecommerce/checkout');
    });
    Route::get('dashboards/ecommerce/customers', function () {
        return Inertia::render('demo/dashboards/ecommerce/customers');
    });
    Route::get('dashboards/ecommerce/orders', function () {
        return Inertia::render('demo/dashboards/ecommerce/orders');
    });
    Route::get('dashboards/ecommerce/order-details', function () {
        return Inertia::render('demo/dashboards/ecommerce/order-details');
    });
    Route::get('dashboards/ecommerce/add-product', function () {
        return Inertia::render('demo/dashboards/ecommerce/add-product');
    });
    Route::get('dashboards/crypto/dashboard', function () {
        return Inertia::render('demo/dashboards/crypto/dashboard');
    });
    Route::get('dashboards/crypto/transactions', function () {
        return Inertia::render('demo/dashboards/crypto/transactions');
    });
    Route::get('dashboards/crypto/currency-exchange', function () {
        return Inertia::render('demo/dashboards/crypto/currency-exchange');
    });
    Route::get('dashboards/crypto/buy-sell', function () {
        return Inertia::render('demo/dashboards/crypto/buy-sell');
    });
    Route::get('dashboards/crypto/market-cap', function () {
        return Inertia::render('demo/dashboards/crypto/market-cap');
    });
    Route::get('dashboards/crypto/wallet', function () {
        return Inertia::render('demo/dashboards/crypto/wallet');
    });
    Route::get('dashboards/crm/dashboard', function () {
        return Inertia::render('demo/dashboards/crm/dashboard');
    });
    Route::get('dashboards/crm/contacts', function () {
        return Inertia::render('demo/dashboards/crm/contacts');
    });
    Route::get('dashboards/crm/companies', function () {
        return Inertia::render('demo/dashboards/crm/companies');
    });
    Route::get('dashboards/crm/deals', function () {
        return Inertia::render('demo/dashboards/crm/deals');
    });
    Route::get('dashboards/crm/leads', function () {
        return Inertia::render('demo/dashboards/crm/leads');
    });
    Route::get('dashboards/projects/dashboard', function () {
        return Inertia::render('demo/dashboards/projects/dashboard');
    });
    Route::get('dashboards/projects/projects-list', function () {
        return Inertia::render('demo/dashboards/projects/projects-list');
    });
    Route::get('dashboards/projects/project-overview', function () {
        return Inertia::render('demo/dashboards/projects/project-overview');
    });
    Route::get('dashboards/projects/create-project', function () {
        return Inertia::render('demo/dashboards/projects/create-project');
    });
    Route::get('dashboards/hrm', function () {
        return Inertia::render('demo/dashboards/hrm');
    });
    Route::get('dashboards/courses', function () {
        return Inertia::render('demo/dashboards/courses');
    });
    Route::get('dashboards/stocks', function () {
        return Inertia::render('demo/dashboards/stocks');
    });
    Route::get('dashboards/nft/dashboard', function () {
        return Inertia::render('demo/dashboards/nft/dashboard');
    });
    Route::get('dashboards/nft/market-place', function () {
        return Inertia::render('demo/dashboards/nft/market-place');
    });
    Route::get('dashboards/nft/nft-details', function () {
        return Inertia::render('demo/dashboards/nft/nft-details');
    });
    Route::get('dashboards/nft/create-nft', function () {
        return Inertia::render('demo/dashboards/nft/create-nft');
    });
    Route::get('dashboards/nft/wallet-integration', function () {
        return Inertia::render('demo/dashboards/nft/wallet-integration');
    });
    Route::get('dashboards/nft/live-auction', function () {
        return Inertia::render('demo/dashboards/nft/live-auction');
    });
    Route::get('dashboards/jobs/dashboard', function () {
        return Inertia::render('demo/dashboards/jobs/dashboard');
    });
    Route::get('dashboards/jobs/job-details', function () {
        return Inertia::render('demo/dashboards/jobs/job-details');
    });
    Route::get('dashboards/jobs/search-company', function () {
        return Inertia::render('demo/dashboards/jobs/search-company');
    });
    Route::get('dashboards/jobs/search-jobs', function () {
        return Inertia::render('demo/dashboards/jobs/search-jobs');
    });
    Route::get('dashboards/jobs/job-post', function () {
        return Inertia::render('demo/dashboards/jobs/job-post');
    });
    Route::get('dashboards/jobs/jobs-list', function () {
        return Inertia::render('demo/dashboards/jobs/jobs-list');
    });
    Route::get('dashboards/jobs/search-candidate', function () {
        return Inertia::render('demo/dashboards/jobs/search-candidate');
    });
    Route::get('dashboards/jobs/candidate-details', function () {
        return Inertia::render('demo/dashboards/jobs/candidate-details');
    });
    Route::get('dashboards/podcast', function () {
        return Inertia::render('demo/dashboards/podcast');
    });
    Route::get('dashboards/social-media', function () {
        return Inertia::render('demo/dashboards/social-media');
    });
    Route::get('dashboards/school', function () {
        return Inertia::render('demo/dashboards/school');
    });
    Route::get('dashboards/medical', function () {
        return Inertia::render('demo/dashboards/medical');
    });
    Route::get('dashboards/pos-system', function () {
        return Inertia::render('demo/dashboards/pos-system');
    });

    // Application routes (demo)
    Route::get('applications/chat', function () {
        return Inertia::render('demo/applications/chat');
    });
    Route::get('applications/email/mail-app', function () {
        return Inertia::render('demo/applications/email/mail-app');
    });
    Route::get('applications/email/mail-settings', function () {
        return Inertia::render('demo/applications/email/mail-settings');
    });
    Route::get('applications/file-manager', function () {
        return Inertia::render('demo/applications/file-manager');
    });
    Route::get('applications/full-calendar', function () {
        return Inertia::render('demo/applications/full-calendar');
    });
    Route::get('applications/gallery', function () {
        return Inertia::render('demo/applications/gallery');
    });
    Route::get('applications/sweet-alerts', function () {
        return Inertia::render('demo/applications/sweet-alerts');
    });
    Route::get('applications/task/kanban-board', function () {
        return Inertia::render('demo/applications/task/kanban-board');
    });
    Route::get('applications/task/list-view', function () {
        return Inertia::render('demo/applications/task/list-view');
    });
    Route::get('applications/to-do-list', function () {
        return Inertia::render('demo/applications/to-do-list');
    });

    // Page routes (demo)
    Route::get('pages/empty', function () {
        return Inertia::render('demo/pages/empty');
    });
    Route::get('pages/forms/form-advanced', function () {
        return Inertia::render('demo/pages/forms/form-advanced');
    });
    Route::get('pages/forms/form-elements/inputs', function () {
        return Inertia::render('demo/pages/forms/form-elements/inputs');
    });
    Route::get('pages/forms/form-elements/checks-radios', function () {
        return Inertia::render('demo/pages/forms/form-elements/checks-radios');
    });
    Route::get('pages/forms/form-elements/input-group', function () {
        return Inertia::render('demo/pages/forms/form-elements/input-group');
    });
    Route::get('pages/forms/form-elements/form-select', function () {
        return Inertia::render('demo/pages/forms/form-elements/form-select');
    });
    Route::get('pages/forms/form-elements/range-slider', function () {
        return Inertia::render('demo/pages/forms/form-elements/range-slider');
    });
    Route::get('pages/forms/form-elements/input-masks', function () {
        return Inertia::render('demo/pages/forms/form-elements/input-masks');
    });
    Route::get('pages/forms/form-elements/file-uploads', function () {
        return Inertia::render('demo/pages/forms/form-elements/file-uploads');
    });
    Route::get('pages/forms/form-elements/date-time-picker', function () {
        return Inertia::render('demo/pages/forms/form-elements/date-time-picker');
    });
    Route::get('pages/forms/form-elements/color-picker', function () {
        return Inertia::render('demo/pages/forms/form-elements/color-picker');
    });
    Route::get('pages/forms/floating-labels', function () {
        return Inertia::render('demo/pages/forms/floating-labels');
    });
    Route::get('pages/forms/form-layouts', function () {
        return Inertia::render('demo/pages/forms/form-layouts');
    });
    Route::get('pages/forms/form-wizards', function () {
        return Inertia::render('demo/pages/forms/form-wizards');
    });
    Route::get('pages/forms/vue-editor', function () {
        return Inertia::render('demo/pages/forms/vue-editor');
    });
    Route::get('pages/forms/validation', function () {
        return Inertia::render('demo/pages/forms/validation');
    });
    Route::get('pages/invoice/create-invoice', function () {
        return Inertia::render('demo/pages/invoice/create-invoice');
    });
    Route::get('pages/invoice/invoice-details', function () {
        return Inertia::render('demo/pages/invoice/invoice-details');
    });
    Route::get('pages/invoice/invoice-list', function () {
        return Inertia::render('demo/pages/invoice/invoice-list');
    });
    Route::get('pages/profile', function () {
        return Inertia::render('demo/pages/profile');
    });
    Route::get('pages/profile-settings', function () {
        return Inertia::render('demo/pages/profile-settings');
    });
    Route::get('pages/timeline', function () {
        return Inertia::render('demo/pages/timeline');
    });

    // UI Elements routes (demo)
    Route::get('general/ui-elements/alerts', function () {
        return Inertia::render('demo/general/ui-elements/alerts');
    });
    Route::get('general/ui-elements/badge', function () {
        return Inertia::render('demo/general/ui-elements/badge');
    });
    Route::get('general/ui-elements/breadcrumb', function () {
        return Inertia::render('demo/general/ui-elements/breadcrumb');
    });
    Route::get('general/ui-elements/buttons', function () {
        return Inertia::render('demo/general/ui-elements/buttons');
    });
    Route::get('general/ui-elements/button-group', function () {
        return Inertia::render('demo/general/ui-elements/button-group');
    });
    Route::get('general/ui-elements/cards', function () {
        return Inertia::render('demo/general/ui-elements/cards');
    });
    Route::get('general/ui-elements/dropdowns', function () {
        return Inertia::render('demo/general/ui-elements/dropdowns');
    });
    Route::get('general/ui-elements/images-figures', function () {
        return Inertia::render('demo/general/ui-elements/images-figures');
    });
    Route::get('general/ui-elements/links-interactions', function () {
        return Inertia::render('demo/general/ui-elements/links-interactions');
    });
    Route::get('general/ui-elements/list-group', function () {
        return Inertia::render('demo/general/ui-elements/list-group');
    });
    Route::get('general/ui-elements/navs-tabs', function () {
        return Inertia::render('demo/general/ui-elements/navs-tabs');
    });
    Route::get('general/ui-elements/object-fit', function () {
        return Inertia::render('demo/general/ui-elements/object-fit');
    });
    Route::get('general/ui-elements/pagination', function () {
        return Inertia::render('demo/general/ui-elements/pagination');
    });
    Route::get('general/ui-elements/popovers', function () {
        return Inertia::render('demo/general/ui-elements/popovers');
    });
    Route::get('general/ui-elements/progress', function () {
        return Inertia::render('demo/general/ui-elements/progress');
    });
    Route::get('general/ui-elements/spinners', function () {
        return Inertia::render('demo/general/ui-elements/spinners');
    });
    Route::get('general/ui-elements/toasts', function () {
        return Inertia::render('demo/general/ui-elements/toasts');
    });
    Route::get('general/ui-elements/tooltips', function () {
        return Inertia::render('demo/general/ui-elements/tooltips');
    });
    Route::get('general/ui-elements/typography', function () {
        return Inertia::render('demo/general/ui-elements/typography');
    });

    // Utilities routes (demo)
    Route::get('general/utilities/avatars', function () {
        return Inertia::render('demo/general/utilities/avatars');
    });
    Route::get('general/utilities/borders', function () {
        return Inertia::render('demo/general/utilities/borders');
    });
    Route::get('general/utilities/breakpoints', function () {
        return Inertia::render('demo/general/utilities/breakpoints');
    });
    Route::get('general/utilities/colors', function () {
        return Inertia::render('demo/general/utilities/colors');
    });
    Route::get('general/utilities/columns', function () {
        return Inertia::render('demo/general/utilities/columns');
    });
    Route::get('general/utilities/css-grid', function () {
        return Inertia::render('demo/general/utilities/css-grid');
    });
    Route::get('general/utilities/flex', function () {
        return Inertia::render('demo/general/utilities/flex');
    });
    Route::get('general/utilities/gutters', function () {
        return Inertia::render('demo/general/utilities/gutters');
    });
    Route::get('general/utilities/helpers', function () {
        return Inertia::render('demo/general/utilities/helpers');
    });
    Route::get('general/utilities/position', function () {
        return Inertia::render('demo/general/utilities/position');
    });
    Route::get('general/utilities/additional-content', function () {
        return Inertia::render('demo/general/utilities/additional-content');
    });

    // Advanced UI routes (demo)
    Route::get('general/advanced-ui/accordions-collapse', function () {
        return Inertia::render('demo/general/advanced-ui/accordions-collapse');
    });
    Route::get('general/advanced-ui/carousel', function () {
        return Inertia::render('demo/general/advanced-ui/carousel');
    });
    Route::get('general/advanced-ui/draggable-cards', function () {
        return Inertia::render('demo/general/advanced-ui/draggable-cards');
    });
    Route::get('general/advanced-ui/media-player', function () {
        return Inertia::render('demo/general/advanced-ui/media-player');
    });
    Route::get('general/advanced-ui/modals-closes', function () {
        return Inertia::render('demo/general/advanced-ui/modals-closes');
    });
    Route::get('general/advanced-ui/navbar', function () {
        return Inertia::render('demo/general/advanced-ui/navbar');
    });
    Route::get('general/advanced-ui/offcanvas', function () {
        return Inertia::render('demo/general/advanced-ui/offcanvas');
    });
    Route::get('general/advanced-ui/placeholders', function () {
        return Inertia::render('demo/general/advanced-ui/placeholders');
    });
    Route::get('general/advanced-ui/ratings', function () {
        return Inertia::render('demo/general/advanced-ui/ratings');
    });
    Route::get('general/advanced-ui/ribbons', function () {
        return Inertia::render('demo/general/advanced-ui/ribbons');
    });
    Route::get('general/advanced-ui/sortable-js', function () {
        return Inertia::render('demo/general/advanced-ui/sortable-js');
    });
    Route::get('general/advanced-ui/swiper-js', function () {
        return Inertia::render('demo/general/advanced-ui/swiper-js');
    });
    Route::get('general/advanced-ui/tour', function () {
        return Inertia::render('demo/general/advanced-ui/tour');
    });

    // Other routes (demo)
    Route::get('widgets', function () {
        return Inertia::render('demo/widgets');
    });
    Route::get('maps/jsvector', function () {
        return Inertia::render('demo/maps/jsvector');
    });
    Route::get('maps/leaflet', function () {
        return Inertia::render('demo/maps/leaflet');
    });
    Route::get('maps/google', function () {
        return Inertia::render('demo/maps/google');
    });
    Route::get('icons', function () {
        return Inertia::render('demo/icons');
    });

    // Charts routes (demo)
    Route::get('charts/apex-charts/area-chart', function () {
        return Inertia::render('demo/charts/apex-charts/area-chart');
    });
    Route::get('charts/apex-charts/bar-chart', function () {
        return Inertia::render('demo/charts/apex-charts/bar-chart');
    });
    Route::get('charts/apex-charts/boxplot-chart', function () {
        return Inertia::render('demo/charts/apex-charts/boxplot-chart');
    });
    Route::get('charts/apex-charts/bubble-chart', function () {
        return Inertia::render('demo/charts/apex-charts/bubble-chart');
    });
    Route::get('charts/apex-charts/candlestick-chart', function () {
        return Inertia::render('demo/charts/apex-charts/candlestick-chart');
    });
    Route::get('charts/apex-charts/column-chart', function () {
        return Inertia::render('demo/charts/apex-charts/column-chart');
    });
    Route::get('charts/apex-charts/funnel-chart', function () {
        return Inertia::render('demo/charts/apex-charts/funnel-chart');
    });
    Route::get('charts/apex-charts/heatmap-chart', function () {
        return Inertia::render('demo/charts/apex-charts/heatmap-chart');
    });
    Route::get('charts/apex-charts/line-chart', function () {
        return Inertia::render('demo/charts/apex-charts/line-chart');
    });
    Route::get('charts/apex-charts/mixed-chart', function () {
        return Inertia::render('demo/charts/apex-charts/mixed-chart');
    });
    Route::get('charts/apex-charts/pie-chart', function () {
        return Inertia::render('demo/charts/apex-charts/pie-chart');
    });
    Route::get('charts/apex-charts/polararea-chart', function () {
        return Inertia::render('demo/charts/apex-charts/polararea-chart');
    });
    Route::get('charts/apex-charts/radar-chart', function () {
        return Inertia::render('demo/charts/apex-charts/radar-chart');
    });
    Route::get('charts/apex-charts/radialbar-chart', function () {
        return Inertia::render('demo/charts/apex-charts/radialbar-chart');
    });
    Route::get('charts/apex-charts/scatter-chart', function () {
        return Inertia::render('demo/charts/apex-charts/scatter-chart');
    });
    Route::get('charts/apex-charts/treemap-chart', function () {
        return Inertia::render('demo/charts/apex-charts/treemap-chart');
    });
    Route::get('charts/chartjs-charts', function () {
        return Inertia::render('demo/charts/chartjs-charts');
    });
    Route::get('charts/echart-charts', function () {
        return Inertia::render('demo/charts/echart-charts');
    });

    // Tables routes (demo)
    Route::get('tables/tables', function () {
        return Inertia::render('demo/tables/tables');
    });
    Route::get('tables/girdjs', function () {
        return Inertia::render('demo/tables/girdjs');
    });
    Route::get('tables/data-tables', function () {
        return Inertia::render('demo/tables/data-tables');
    });
});

// Protected routes (require authentication) - only logout route
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
