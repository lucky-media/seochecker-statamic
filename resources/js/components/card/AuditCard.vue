<template>
  <card>
    <card-header>{{ title }}</card-header>
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
          v-text="resultValue"
          :class="{
            'sp-text-green-500': score === 'passed',
            'sp-text-yellow-500': score === 'warning',
            'sp-text-red-500': score === 'failed',
          }"
        />
      </div>

      <template v-if="this.maxValue">
        <progress-bar
          :resultValue="resultValue"
          :maxValue="maxValue"
          :passedValue="passedValue"
          :warningValue="warningValue"
        />
      </template>

      <p v-text="description" class="sp-text-sm" />
    </card-body>
  </card>
</template>

<script>
import Card from './Card.vue';
import CardBody from './CardBody.vue';
import CardHeader from './CardHeader.vue';
import ProgressBar from '../ui/ProgressBar.vue';

export default {
  components: {
    CardHeader,
    CardBody,
    Card,
    ProgressBar,
  },
  props: [
    'title',
    'score',
    'description',
    'resultValue',
    'passedValue',
    'maxValue',
    'warningValue',
  ],
};
</script>
