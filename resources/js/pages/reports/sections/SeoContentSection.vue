<template>
  <card>
    <card-header> SEO Content</card-header>

    <info-item title="Heading Count" score="info">
      <div class="sp-w-full sp-divide-gray-200 sp-divide-y">
        <div v-for="value in headings" :key="value">
          <heading-list
            :tag="value"
            :title="value"
            :list="content.headingCount[value]"
            :length="content.headingCount[value].length"
          />
        </div>
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
      <div class="sp-divide-gray-200 sp-divide-y">
        <p>{{ content.no_alt.description }}</p>
        <ul class="pt-1 mt-1">
          <li v-for="value in content.no_alt.value" :key="value">
            {{ value }}
          </li>
        </ul>
      </div>
    </info-item>

    <template v-if="content.link_scores">
      <info-item
        title="Links without describing text"
        :score="content.link_scores[0].score"
      >
        <p>
          {{ content.link_scores[0].description }}
        </p>
      </info-item>

      <info-item
        title="Total Links found"
        :score="content.link_scores[1].score"
      >
        <p>
          {{ content.link_scores[1].description }}
        </p>
      </info-item>
    </template>
  </card>
</template>

<script>
import CardHeader from '@/components/card/CardHeader.vue';
import Card from '@/components/card/Card.vue';
import InfoItem from '@/components/infolist/InfoItem.vue';
import HeadingList from '@/components/infolist/HeadingList.vue';
import unslugify from '@/services/unslugify';

export default {
  data() {
    return {
      headings: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    };
  },
  mounted() {
    console.log(this.content);
  },
  props: ['content'],
  components: {
    InfoItem,
    HeadingList,
    Card,
    CardHeader,
  },
  methods: {
    unslugify,
  },
};
</script>
