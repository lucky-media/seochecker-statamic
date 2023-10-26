<template>
<div>
    <performance-section :scores="report.lighthouse" class="mb-4" />
    <audit-section :audit="report.lighthouse.audit" />
    <seo-section :seo="report.seo" />
    <meta-preview :og_graph="report.og_graph" :twitter="report.twitter" />
</div>
</template>

<script>
import SeoSection from "./sections/SeoSection.vue";
import PerformanceSection from "./sections/PerformanceSection.vue";
import AuditSection from "./sections/AuditSection.vue";
import MetaPreview from "./sections/MetaPreview.vue";

export default {
    components: {
        AuditSection,
        PerformanceSection,
        SeoSection,
        MetaPreview,
    },
    props: ['report'],

} 
</script>
