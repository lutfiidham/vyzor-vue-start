<script setup>
defineProps({
    Navigationclass: String,
    Customheaderclass: String,
    Navigate: [String, undefined],
    ActiveNavigate: [String, undefined],
    LinkNavigate: [String, URL]
})
</script>
<template>
    <div class="card custom-card text-center">
        <div :class="`card-header ${Customheaderclass}`">
            <ul :class="`nav nav-${Navigationclass} card-header-${Navigationclass} ms-1`">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="true" :href="ActiveNavigate">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href="Navigate">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h6 class="card-title fw-medium">Special title treatment</h6>
            <p class="card-text">With supporting text below as a natural lead-in to
                additional content.</p>
            <a :href="LinkNavigate" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
