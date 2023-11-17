<template>
  <card class="max-w-xs">
    <card-header>Status Legend</card-header>
    <card-body class="flex sp-items-center sp-justify-center">
      <!-- Chart Pie -->
      <div
        class="grid sp-w-32 sp-h-32 sp-rounded-full sp-overflow-hidden sp-grid-cols-2 sp-relative"
      >
        <div
          class="bg-white sp-w-24 sp-h-24 sp-absolute sp-rounded-full sp-left-1/2 sp-top-1/2 -sp-translate-x-1/2 -sp-translate-y-1/2"
        ></div>
        <div class="sp-bg-green-500"></div>
        <div class="sp-bg-yellow-500"></div>
        <div class="sp-bg-red-500"></div>
        <div class="sp-bg-black"></div>
      </div>

      <!-- List of legends -->
      <div class="text-sm sp-space-y-2 sp-ml-5">
        <div class="flex sp-items-center">
          <div class="w-4 h-4 mr-2 sp-rounded-full sp-bg-green-500" />
          Passed
        </div>
        <div class="flex sp-items-center">
          <div class="w-4 h-4 mr-2 sp-rounded-full sp-bg-yellow-500" />
          Warning
        </div>
        <div class="flex sp-items-center">
          <div class="w-4 h-4 mr-2 sp-rounded-full sp-bg-red-500" />
          Failed
        </div>
        <div class="flex sp-items-center">
          <div class="w-4 h-4 mr-2 sp-rounded-full sp-bg-black" />
          Info
        </div>
      </div>
    </card-body>
  </card>
</template>

<script>
import Card from '../card/Card.vue';
import CardHeader from '../card/CardHeader.vue';
import CardBody from '../card/CardBody.vue';

export default {
  components: {
    Card,
    CardHeader,
    CardBody,
  },
};
</script>
