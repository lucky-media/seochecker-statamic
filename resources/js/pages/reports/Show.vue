<template>
  <div>
    <performance-section :scores="report.lighthouse" class="mb-4" />
    <audit-section :audit="report.lighthouse.audit" />
    <seo-section :seo="report.seo" />
    <meta-section :audit="report.og_graph.audit" />
    <meta-preview
      :og_graph="report.og_graph"
      :twitter="report.twitter"
      :json_ld="report.json_ld"
      :domain="this.domain"
    />
    <template v-if="report.json_ld.length != 0">
      <json-ld-schema :json_ld="report.json_ld" />
    </template>
  </div>
</template>

<script>
import SeoSection from './sections/SeoSection.vue';
import PerformanceSection from './sections/PerformanceSection.vue';
import AuditSection from './sections/AuditSection.vue';
import MetaPreview from './sections/MetaPreview.vue';
import MetaSection from './sections/MetaSection.vue';
import JsonLdSchema from './sections/JsonLdSchema.vue';

export default {
  components: {
    AuditSection,
    PerformanceSection,
    SeoSection,
    MetaPreview,
    MetaSection,
    JsonLdSchema,
  },
  props: ['report', 'domain'],
};
</script>
