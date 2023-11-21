<template>
  <div class="sp-space-y-4">
    <performance-section :scores="report.lighthouse" />
    <audit-section
      :audit="report.lighthouse.audit"
      :full_report="report.lighthouse.report"
    />
    <status-legend />
    <seo-section :seo="report.seo" />
    <seo-content-section :content="report.content" />
    <meta-section :audit="report.og_graph.audit" />
    <meta-preview
      :og_graph="report.og_graph"
      :twitter="report.twitter"
      :json_ld="report.json_ld"
      :seo="report.seo"
      :domain="this.domain"
    />
    <template v-if="report.json_ld.length !== 0">
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
import SeoContentSection from './sections/SeoContentSection.vue';
import StatusLegend from '@/components/ui/StatusLegend.vue';

export default {
  components: {
    AuditSection,
    PerformanceSection,
    SeoSection,
    MetaPreview,
    MetaSection,
    JsonLdSchema,
    SeoContentSection,
    SeoSection,
    StatusLegend,
  },
  props: ['report', 'domain'],
};
</script>
