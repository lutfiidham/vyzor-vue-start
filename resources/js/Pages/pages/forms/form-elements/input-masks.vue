<script setup>
import { ref } from 'vue';
import Pageheader from '@/components/pageheader/pageheader.vue';
import { Head } from '@inertiajs/vue3';

// Page meta info
const dataToPass = {
    title: 'Forms',
    subtitle: 'Form Elements',
    currentpage: 'Input Masks',
    activepage: 'Input Masks'
};

// Form input values
const value = ref('');
const delimiters = ref('');
const delimiters1 = ref('');
const formatting = ref('');
const formatting1 = ref('');
const formatting2 = ref('');
const formatting3 = ref('');
const formatting4 = ref('');
const formatting5 = ref('');

// Currency formatting options
const options = {
    preProcess: (val) => val.replace(/[$,]/g, ''),
    postProcess: (val) => {
        if (!val) return '';

        const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0);

        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
            .format(Number(val))
            .slice(0, sub ? -sub : undefined);
    }
};
</script>


<template>
    <Head title="Input-Masks | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Date Format-1
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control date-format" placeholder="DD-MM-YYYY" v-model="formatting" v-maska
                        data-maska="##-##-####" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Date Format-2
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control date-format-1" placeholder="MM-DD-YYYY" v-model="formatting1" v-maska
                        data-maska="##-##-####" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Date Format-3
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control date-format-2" placeholder="MM-YY" v-model="formatting2" v-maska
                        data-maska="##-##" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Number Formatting
                    </div>
                </div>
                <div class="card-body">
                    <input v-maska:[options] class="form-control number-format" data-maska="0.99" data-maska-number
                        data-maska-tokens="0:\d:multiple|9:\d:optional" placeholder="Number Here">
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Time Format-1
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control time-format-1" placeholder="hh:mm:ss" v-model="formatting3" v-maska
                        data-maska="##:##:##" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Time Format-2
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control time-format-2" placeholder="hh:mm" v-model="formatting4" v-maska
                        data-maska="##:##" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Formatting Into Blocks
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control formatting-blocks" placeholder="ABCD EFG HIJ KLMN" v-model="formatting5"
                        v-maska data-maska="@@@ @@@ @@@ @@@@" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Delimiter
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control delimiters" placeholder="ABC.DEF.GHi" v-model="delimiters" v-maska
                        data-maska="@@@.@@@.@@@" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Delimiters
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control delimiters" placeholder="ABC/DEF/GHi-JK" v-model="delimiters1" v-maska
                        data-maska="@@@/@@@/@@@-@@" />
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Prefix
                    </div>
                </div>
                <div class="card-body">
                    <input placeholder="With default prefix" class="form-control prefix-element" v-maska
                        data-maska="!Prefix-HHHHHH-HHHH-HHHH" data-maska-tokens="H:[0-9a-fA-F]">
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Phone Number Formatting
                    </div>
                </div>
                <div class="card-body">
                    <input class="form-control phone-number" placeholder="US(+1)" v-model="value" v-maska
                        data-maska="+1 ### ###-##-##" />
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
