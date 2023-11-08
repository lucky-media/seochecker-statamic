<template>
  <card>
    <card-header> Common SEO Issues </card-header>

    <info-item title="Meta Title Test" :score="seo.title.score">
      <div class="flex flex-col items-start sp-space-y-1">
        <p>{{ seo.title.description }}</p>
        <p>
          <span class="sp-text-gray-600 sp-font-semibold">Text:</span>
          {{ seo.title.value }}
        </p>
        <p>
          <b class="sp-text-gray-600 sp-font-semibold"> Length:</b>
          {{ seo.title.value.length }} characters
        </p>
      </div>
    </info-item>

    <info-item title="Meta Description Test" :score="seo.description.score">
      <div class="flex flex-col items-start sp-space-y-1">
        <p>{{ seo.description.description }}</p>
        <p>
          <span class="sp-text-gray-600 sp-font-semibold">Text:</span>
          {{ seo.description.value }}
        </p>
        <p>
          <b class="sp-text-gray-600 sp-font-semibold"> Length:</b>
          {{ seo.description.value.length }} characters
        </p>
      </div>
    </info-item>

    <info-item title="Canonical Test" :score="seo.canonical.score">
      <p>{{ seo.canonical.description }}</p>
    </info-item>

    <info-item title="Keywords Test" :score="seo.keywords.score">
      <p>{{ seo.keywords.description }}</p>
    </info-item>

    <info-item title="Index Tag Test" :score="seo.index.score">
      <p>{{ seo.index.description }}</p>
    </info-item>

    <info-item title="Lang Tag Test" :score="seo.lang.score">
      <p>{{ seo.lang.description }}</p>
    </info-item>
  </card>
</template>

<script>
import CardHeader from '@/components/card/CardHeader.vue';
import Card from '@/components/card/Card.vue';
import InfoItem from '@/components/infolist/InfoItem.vue';

export default {
  components: {
    InfoItem,
    Card,
    CardHeader,
  },
  props: ['seo'],
};
</script>
