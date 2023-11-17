<template>
  <card class="max-w-xs">
    <card-header>Status Legend</card-header>
    <card-body>
      <div class="sp-space-y-3">
        <div class="flex sp-items-center">
          <div class="w-5 h-5 mr-2 sp-rounded-full sp-bg-green-500" />
          Passed
        </div>
        <div class="flex sp-items-center">
          <div class="w-5 h-5 mr-2 sp-rounded-full sp-bg-yellow-500" />
          Warning
        </div>
        <div class="flex sp-items-center">
          <div class="w-5 h-5 mr-2 sp-rounded-full sp-bg-red-500" />
          Failed
        </div>
        <div class="flex sp-items-center">
          <div class="w-5 h-5 mr-2 sp-rounded-full sp-bg-black" />
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
