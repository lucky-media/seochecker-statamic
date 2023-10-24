<template>
<div>
    <performance-section :scores="report.lighthouse" class="mb-4" />
    <audit-section :audit="report.lighthouse.audit" />
    <seo-section :seo="report.seo" />
</div>
</template>

<script>
import SeoSection from "./sections/SeoSection.vue";
import PerformanceSection from "./sections/PerformanceSection.vue";
import AuditSection from "./sections/AuditSection.vue";

export default {
    components: {
        AuditSection,
        PerformanceSection,
        SeoSection,
    },
    props: ['report'],
}
</script>
