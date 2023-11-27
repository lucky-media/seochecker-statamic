<template>
  <card class="mt-4">
    <card-header> Open Graph Tags </card-header>

    <div v-for="(item, key) in audit" :key="key">
      <info-item :title="unslugify(key)" :score="item.score">
        <div class="flex flex-col items-start space-y-2 sp-break-words overflow-x-auto">
          <p v-if="item.score === 'failed'">{{ item.description }}</p>
          <p v-text="item.value"></p>
        </div>
      </info-item>
    </div>
  </card>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import InfoItem from '@/components/infolist/InfoItem.vue';
import unslugify from '@/services/unslugify';

export default {
  components: { Card, CardHeader, InfoItem },
  props: ['audit'],
  methods: {
    unslugify,
  },
};
</script>
