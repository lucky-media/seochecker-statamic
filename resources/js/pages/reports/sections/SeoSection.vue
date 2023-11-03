<template>
  <card>
    <card-header> Common SEO Issues </card-header>

    <info-item title="Meta Title Test" :score="seo.title.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.title.description }}</p>
        <p>
          Text: <b>{{ seo.title.value }}</b>
        </p>
        <p>
          Characters: <b>{{ seo.title.value.length }}</b>
        </p>
      </div>
    </info-item>

    <info-item title="Meta Description Test" :score="seo.description.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.description.description }}</p>
        <p>
          Text: <b>{{ seo.description.value }}</b>
        </p>
        <p>
          Characters: <b>{{ seo.description.value.length }}</b>
        </p>
      </div>
    </info-item>

    <info-item title="Canonical Test" :score="seo.canonical.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.canonical.description }}</p>
      </div>
    </info-item>

    <info-item title="Keywords Test" :score="seo.keywords.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.keywords.description }}</p>
      </div>
    </info-item>

    <info-item title="Index Tag Test" :score="seo.index.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.index.description }}</p>
      </div>
    </info-item>

    <info-item title="Lang Tag Test" :score="seo.lang.score">
      <div class="flex flex-col items-start space-y-2">
        <p>{{ seo.lang.description }}</p>
      </div>
    </info-item>

    <info-item title="Images without alt" :score="seo.image_scores[0].score">
      <div class="flex flex-col items-start">
        <p>{{ seo.image_scores[0].description }}</p>
        <p>
          Count: <b>{{ seo.image_scores[0].value }}</b>
        </p>
      </div>
    </info-item>

    <info-item title="Images without src" :score="seo.image_scores[1].score">
      <div class="flex flex-col items-start">
        <p>{{ seo.image_scores[1].description }}</p>
        <p>
          Count: <b>{{ seo.image_scores[1].value }}</b>
        </p>
      </div>
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
