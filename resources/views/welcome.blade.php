<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Vyzor - Inertia + Vue & Laravel Admin & Dashboard Template</title>

    @vite('resources/js/app.js')
    @inertiaHead

    <meta name="description" content="Vyzor Admin Dashboard Template built with Vue.js and Laravel. Easily manage your admin panel with our custom template." />
    <meta name="keywords" content="admin dashboard laravel,admin panel laravel,admin panel template,admin template for laravel,dashboard admin template,dashboard ui design,inertia js vue,laravel dashboard,laravel inertia js,laravel template admin,laravel user interface,vue dashboard template,vue laravel admin template,vue ui framework,vuejs admin panel" />

</head>

<body>
    @inertia
</body>

</html>