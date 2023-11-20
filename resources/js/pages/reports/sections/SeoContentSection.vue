<template>
  <card>
    <card-header> SEO Content</card-header>

    <info-item title="Heading Count" score="info">
      <div class="sp-w-full sp-divide-gray-200 sp-divide-y">
        <info-list
          title="h1"
          :list="content.headingCount.h1"
          :length="content.headingCount.h1.length"
        />

        <!-- <h2 class="py-2 leading-none">h2: {{ content.headingCount.h2 }}</h2>
        <h3 class="py-2 leading-none">h3: {{ content.headingCount.h3 }}</h3>
        <h4 class="py-2 leading-none">h4: {{ content.headingCount.h4 }}</h4>
        <h5 class="py-2 leading-none">h5: {{ content.headingCount.h5 }}</h5>
        <h5 class="py-2 leading-none">h6: {{ content.headingCount.h6 }}</h5> -->
      </div>
    </info-item>

    <info-item
      title="Multiple Headings"
      :score="content.multiple_headings.score"
    >
      <p>{{ content.multiple_headings.description }}</p>
    </info-item>

    <info-item title="Broken Images" :score="content.broken_images.score">
      <p>{{ content.broken_images.description }}</p>
    </info-item>

    <info-item title="Images without alt" :score="content.no_alt.score">
      <p v-if="content.no_alt.value === 0">{{ content.no_alt.description }}</p>
      <div
        v-if="content.no_alt.value > 0"
        class="sp-divide-gray-200 sp-divide-y"
      >
        <p v-if="item in content.no_alt.value">{{ item }}</p>
      </div>
    </info-item>

    <!-- <info-item
            title="Links without describing text"
            :score="this.content.link_scores[0].score"
        >
            <p>
                {{ this.content.link_scores[0].description }}
            </p>
        </info-item>

        <info-item
            title="Total Links found"
            :score="this.content.link_scores[1].score"
        >
            <p>
                {{ this.content.link_scores[1].description }}
            </p>
        </info-item> -->
  </card>
</template>

<script>
import CardHeader from '@/components/card/CardHeader.vue';
import Card from '@/components/card/Card.vue';
import InfoItem from '@/components/infolist/InfoItem.vue';
import InfoList from '@/components/infolist/InfoList.vue';
import unslugify from '@/services/unslugify';

export default {
  props: ['content'],
  components: {
    InfoItem,
    InfoList,
    Card,
    CardHeader,
  },
  methods: {
    unslugify,
  },
};
</script>
