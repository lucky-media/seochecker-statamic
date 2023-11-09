<template>
  <card>
    <card-header>{{ unslugify(this.title) }}</card-header>
    <card-body class="sp-space-y-3">
      <div class="flex items-center">
        <div
          class="sp-w-3 sp-h-3 sp-rounded-full sp-shrink-0 sp-bg-green-500 sp-mr-2"
          :class="{
            'sp-bg-green-500': score === 'passed',
            'sp-bg-yellow-500': score === 'warning',
            'sp-bg-red-500': score === 'failed',
          }"
        />

        <h1
          class="sp-font-semibold sp-text-3xl"
          v-text="value"
          :class="{
            'sp-text-green-500': score === 'passed',
            'sp-text-yellow-500': score === 'warning',
            'sp-text-red-500': score === 'failed',
          }"
        />
      </div>

      <template v-if="this.value">
        <progress-bar :currentValue="this.value" :maxValue="3.4" />
      </template>

      <p v-text="description" class="sp-text-sm" />
    </card-body>
  </card>
</template>

<script>
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import CardHeader from './CardHeader.vue';
import unslugify from '../../services/unslugify';
import ProgressBar from '../ui/ProgressBar.vue';

export default {
  components: {
    CardHeader,
    CardBody,
    Card,
    ProgressBar,
  },
  methods: {
    unslugify,
  },
  props: ['title', 'score', 'description', 'value'],
};
</script>
