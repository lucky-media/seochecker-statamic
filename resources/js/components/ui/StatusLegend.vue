<template>
    <div class="flex space-x-4 sp-justify-end">
        <div v-for="item in legend" :key="item.value" class="flex sp-items-center">
            <status :value="item.value"/>
            <span class="text-sm sp-pl-1">
          {{ item.label }}
      </span>
        </div>
    </div>
</template>

<script>
import Status from './Status.vue';

export default {
    components: {
        Status,
    },
    data() {
        return {
            legend: [
                {
                    value: 'passed',
                    label: 'Passed',
                },
                {
                    value: 'warning',
                    label: 'Warning',
                },
                {
                    value: 'failed',
                    label: 'Failed',
                },
                {
                    value: 'info',
                    label: 'Info',
                },
            ]
        }
    }
};
</script>
