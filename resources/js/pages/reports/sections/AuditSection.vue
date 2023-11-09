<template>
  <div class="sp-grid sp-grid-cols-2 sp-gap-4 sp-mb-4">
    <audit-card
      v-for="(item, key) in audit"
      :key="key"
      :title="key"
      :score="item.score"
      :value="item.value"
      :description="item.description"
    />
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardBody from '@/components/card/CardBody.vue';
import AuditCard from '@/components/AuditCard.vue';

export default {
  props: ['audit'],
  components: {
    AuditCard,
    CardBody,
    Card,
  },
};
</script>
