<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Apps routes (demo)
Route::get('apps/calender', function () {
    return Inertia::render('demo/apps/calender');
});
Route::get('apps/chat', function () {
    return Inertia::render('demo/apps/chat');
});
Route::get('apps/contacts', function () {
    return Inertia::render('demo/apps/contacts');
});
Route::get('apps/email', function () {
    return Inertia::render('demo/apps/email');
});
Route::get('apps/kanban', function () {
    return Inertia::render('demo/apps/kanban');
});
Route::get('apps/notes', function () {
    return Inertia::render('demo/apps/notes');
});
Route::get('apps/todo', function () {
    return Inertia::render('demo/apps/todo');
});

// E-Commerce routes (demo)
Route::get('ecommerce/add-product', function () {
    return Inertia::render('demo/ecommerce/add-product');
});
Route::get('ecommerce/products', function () {
    return Inertia::render('demo/ecommerce/products');
});
Route::get('ecommerce/products-overview', function () {
    return Inertia::render('demo/ecommerce/products-overview');
});
Route::get('ecommerce/customers', function () {
    return Inertia::render('demo/ecommerce/customers');
});
Route::get('ecommerce/customer-details', function () {
    return Inertia::render('demo/ecommerce/customer-details');
});
Route::get('ecommerce/order-list', function () {
    return Inertia::render('demo/ecommerce/order-list');
});
Route::get('ecommerce/order-details', function () {
    return Inertia::render('demo/ecommerce/order-details');
});
Route::get('ecommerce/reviews', function () {
    return Inertia::render('demo/ecommerce/reviews');
});
Route::get('ecommerce/wishlist', function () {
    return Inertia::render('demo/ecommerce/wishlist');
});

// User Profile routes (demo)
Route::get('user-profile/profile', function () {
    return Inertia::render('demo/user-profile/profile');
});
Route::get('user-profile/teams', function () {
    return Inertia::render('demo/user-profile/teams');
});
Route::get('user-profile/projects', function () {
    return Inertia::render('demo/user-profile/projects');
});

// Account pages (demo)
Route::get('account/account-settings', function () {
    return Inertia::render('demo/account/account-settings');
});
Route::get('account/security', function () {
    return Inertia::render('demo/account/security');
});
Route::get('account/notifications', function () {
    return Inertia::render('demo/account/notifications');
});
Route::get('account/connection', function () {
    return Inertia::render('demo/account/connection');
});
Route::get('account/privacy-policy', function () {
    return Inertia::render('demo/account/privacy-policy');
});

// UI Elements routes (demo)
Route::get('ui-elements/accordions', function () {
    return Inertia::render('demo/ui-elements/accordions');
});
Route::get('ui-elements/alerts', function () {
    return Inertia::render('demo/ui-elements/alerts');
});
Route::get('ui-elements/avatar', function () {
    return Inertia::render('demo/ui-elements/avatar');
});
Route::get('ui-elements/badge', function () {
    return Inertia::render('demo/ui-elements/badge');
});
Route::get('ui-elements/breadcrumbs', function () {
    return Inertia::render('demo/ui-elements/breadcrumbs');
});
Route::get('ui-elements/buttons', function () {
    return Inertia::render('demo/ui-elements/buttons');
});
Route::get('ui-elements/colors', function () {
    return Inertia::render('demo/ui-elements/colors');
});
Route::get('ui-elements/cards', function () {
    return Inertia::render('demo/ui-elements/cards');
});
Route::get('ui-elements/carousel', function () {
    return Inertia::render('demo/ui-elements/carousel');
});
Route::get('ui-elements/dropdowns', function () {
    return Inertia::render('demo/ui-elements/dropdowns');
});
Route::get('ui-elements/grid', function () {
    return Inertia::render('demo/ui-elements/grid');
});
Route::get('ui-elements/images', function () {
    return Inertia::render('demo/ui-elements/images');
});
Route::get('ui-elements/list', function () {
    return Inertia::render('demo/ui-elements/list');
});
Route::get('ui-elements/modals', function () {
    return Inertia::render('demo/ui-elements/modals');
});
Route::get('ui-elements/navs', function () {
    return Inertia::render('demo/ui-elements/navs');
});
Route::get('ui-elements/navbar', function () {
    return Inertia::render('demo/ui-elements/navbar');
});
Route::get('ui-elements/offcanvas', function () {
    return Inertia::render('demo/ui-elements/offcanvas');
});
Route::get('ui-elements/pagination', function () {
    return Inertia::render('demo/ui-elements/pagination');
});
Route::get('ui-elements/popovers', function () {
    return Inertia::render('demo/ui-elements/popovers');
});
Route::get('ui-elements/progress', function () {
    return Inertia::render('demo/ui-elements/progress');
});
Route::get('ui-elements/placeholders', function () {
    return Inertia::render('demo/ui-elements/placeholders');
});
Route::get('ui-elements/spinners', function () {
    return Inertia::render('demo/ui-elements/spinners');
});
Route::get('ui-elements/tabs', function () {
    return Inertia::render('demo/ui-elements/tabs');
});
Route::get('ui-elements/tooltips', function () {
    return Inertia::render('demo/ui-elements/tooltips');
});
Route::get('ui-elements/typography', function () {
    return Inertia::render('demo/ui-elements/typography');
});
Route::get('ui-elements/video', function () {
    return Inertia::render('demo/ui-elements/video');
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

// Advanced UI routes (demo)
Route::get('advance-ui/sweet-alert', function () {
    return Inertia::render('demo/advance-ui/sweet-alert');
});
Route::get('advance-ui/rating', function () {
    return Inertia::render('demo/advance-ui/rating');
});
Route::get('advance-ui/draggable', function () {
    return Inertia::render('demo/advance-ui/draggable');
});
Route::get('advance-ui/tour', function () {
    return Inertia::render('demo/advance-ui/tour');
});
Route::get('advance-ui/swiper', function () {
    return Inertia::render('demo/advance-ui/swiper');
});
Route::get('advance-ui/aos', function () {
    return Inertia::render('demo/advance-ui/aos');
});
Route::get('advance-ui/clipboard', function () {
    return Inertia::render('demo/advance-ui/clipboard');
});
Route::get('advance-ui/advanced-select', function () {
    return Inertia::render('demo/advance-ui/advanced-select');
});
Route::get('advance-ui/drag-drop-uploader', function () {
    return Inertia::render('demo/advance-ui/drag-drop-uploader');
});
Route::get('advance-ui/range-slider', function () {
    return Inertia::render('demo/advance-ui/range-slider');
});
Route::get('advance-ui/counters', function () {
    return Inertia::render('demo/advance-ui/counters');
});
Route::get('advance-ui/scrollspy', function () {
    return Inertia::render('demo/advance-ui/scrollspy');
});
Route::get('advance-ui/toasts', function () {
    return Inertia::render('demo/advance-ui/toasts');
});
Route::get('advance-ui/timeline', function () {
    return Inertia::render('demo/advance-ui/timeline');
});

// Widgets routes (demo)
Route::get('widgets/widgets', function () {
    return Inertia::render('demo/widgets/widgets');
});

// Forms routes (demo)
Route::get('forms/basic-elements', function () {
    return Inertia::render('demo/forms/basic-elements');
});
Route::get('forms/input-group', function () {
    return Inertia::render('demo/forms/input-group');
});
Route::get('forms/checkboxes-radios', function () {
    return Inertia::render('demo/forms/checkboxes-radios');
});
Route::get('forms/pickers', function () {
    return Inertia::render('demo/forms/pickers');
});
Route::get('forms/input-mask', function () {
    return Inertia::render('demo/forms/input-mask');
});
Route::get('forms/range', function () {
    return Inertia::render('demo/forms/range');
});
Route::get('forms/editor', function () {
    return Inertia::render('demo/forms/editor');
});
Route::get('forms/file-upload', function () {
    return Inertia::render('demo/forms/file-upload');
});
Route::get('forms/form-layouts', function () {
    return Inertia::render('demo/forms/form-layouts');
});
Route::get('forms/validation', function () {
    return Inertia::render('demo/forms/validation');
});

// Icons routes (demo)
Route::get('icons/boxicons', function () {
    return Inertia::render('demo/icons/boxicons');
});
Route::get('icons/feather', function () {
    return Inertia::render('demo/icons/feather');
});
Route::get('icons/remix', function () {
    return Inertia::render('demo/icons/remix');
});
Route::get('icons/tabler', function () {
    return Inertia::render('demo/icons/tabler');
});
Route::get('icons/material-icons', function () {
    return Inertia::render('demo/icons/material-icons');
});
Route::get('icons/flag-icons', function () {
    return Inertia::render('demo/icons/flag-icons');
});

// Maps routes (demo)
Route::get('maps/maps', function () {
    return Inertia::render('demo/maps/maps');
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
