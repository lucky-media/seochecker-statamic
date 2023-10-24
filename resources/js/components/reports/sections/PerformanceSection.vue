<template>
    <div class="sp-grid sp-grid-cols-4 sp-gap-4">
        <gauge title="Performance" :score="scores.performance" />
        <gauge title="Accessibility" :score="scores.accessibility" />
        <gauge title="Best Practices" :score="scores.best_practices" />
        <gauge title="SEO" :score="scores.seo" />
    </div>
</template>

<script>
import Gauge from "../../Gauge.vue";
export default {
    components: {Gauge},
    props: ['scores']
}
</script>
