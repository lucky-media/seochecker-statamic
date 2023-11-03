<template>
  <card>
    <card-header> SEO Content </card-header>

    <info-item title="Heading Count" score="info">
      <div class="flex flex-col items-start">
        <div class="sp-w-full sp-divide-gray-200 sp-divide-y">
          <h1 class="py-2 leading-none">h1: {{ content.headingCount.h1 }}</h1>
          <h2 class="py-2 leading-none">h2: {{ content.headingCount.h2 }}</h2>
          <h3 class="py-2 leading-none">h3: {{ content.headingCount.h3 }}</h3>
          <h4 class="py-2 leading-none">h4: {{ content.headingCount.h4 }}</h4>
          <h5 class="py-2 leading-none">h5: {{ content.headingCount.h5 }}</h5>
          <h5 class="py-2 leading-none">h6: {{ content.headingCount.h6 }}</h5>
        </div>
      </div>
    </info-item>
  </card>
</template>

<script>
import CardHeader from '@/components/card/CardHeader.vue';
import Card from '@/components/card/Card.vue';
import InfoItem from '@/components/infolist/InfoItem.vue';
import unslugify from '@/services/unslugify';

export default {
  components: {
    InfoItem,
    Card,
    CardHeader,
  },
  mounted() {
    console.log(this.content);
  },
  methods: {
    unslugify,
  },
  props: ['content'],
};
</script>
