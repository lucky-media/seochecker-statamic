<template>
  <card class="mt-4">
    <card-header> Open Graph Tags </card-header>

    <div v-for="(value, key) in audit" :key="key">
      <info-item :title="unslugify(key)" :score="value.score">
        <div class="flex flex-col items-start space-y-2">
          <p v-if="key.score === 'failed'">{{ value.description }}</p>
          <p>
            <b>{{ value.value }}</b>
          </p>
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
