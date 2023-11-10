<template>
  <div class="sp-grid md:sp-grid-cols-2 sp-gap-4 sp-mb-4">
    <audit-card
      title="Cumulative Layout Shift"
      :score="audit.cumulative_layout_shift.score"
      :description="audit.cumulative_layout_shift.description"
      :resultValue="audit.cumulative_layout_shift.value"
      :maxValue="0.35"
      :passedValue="0.1"
      :warningValue="0.15"
    />
    <audit-card
      title="First Contentful Paint"
      :score="audit.first_contentful_paint.score"
      :description="audit.first_contentful_paint.description"
      :resultValue="audit.first_contentful_paint.value"
      :maxValue="0.48"
      :passedValue="0.18"
      :warningValue="0.12"
    />
    <audit-card
      title="Largest Contentful Paint"
      :score="audit.largest_contentful_paint.score"
      :resultValue="audit.largest_contentful_paint.value"
      :maxValue="0.65"
      :passedValue="0.25"
      :warningValue="0.15"
      :description="audit.largest_contentful_paint.description"
    />
    <audit-card
      title="Page Size"
      :score="audit.page_size.score"
      :resultValue="audit.page_size.value"
      :description="audit.page_size.description"
    />
    <audit-card
      title="Speed Index"
      :score="audit.speed_index.score"
      :resultValue="audit.speed_index.value"
      :maxValue="0.92"
      :passedValue="0.34"
      :warningValue="0.24"
      :description="audit.speed_index.description"
    />
    <audit-card
      title="Time To Interactive"
      :score="audit.time_to_interactive.score"
      :resultValue="audit.time_to_interactive.value"
      :passedValue="0.2"
      :warningValue="0.4"
      :maxValue="0.8"
      :description="audit.time_to_interactive.description"
    />
    <audit-card
      title="Total Blocking Time"
      :score="audit.time_to_interactive.score"
      :resultValue="audit.time_to_interactive.value"
      :passedValue="0.38"
      :warningValue="0.34"
      :maxValue="1.1"
      :description="audit.time_to_interactive.description"
    />
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardBody from '@/components/card/CardBody.vue';
import AuditCard from '@/components/card/AuditCard.vue';

export default {
  props: ['audit'],
  components: {
    AuditCard,
    CardBody,
    Card,
  },
};
</script>
