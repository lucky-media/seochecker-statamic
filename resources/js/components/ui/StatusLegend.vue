<template>
  <div class="flex space-x-4 sp-justify-end">
    <div class="flex sp-items-center">
      <status value="passed" />
      <span class="text-sm sp-pl-1">Passed</span>
    </div>
    <div class="flex sp-items-center">
      <status value="warning" />
      <span class="text-sm sp-pl-1">Warning</span>
    </div>
    <div class="flex sp-items-center">
      <status value="failed" />
      <span class="text-sm sp-pl-1">Failed</span>
    </div>
    <div class="flex sp-items-center">
      <status value="info" />
      <span class="text-sm sp-pl-1">Info</span>
    </div>
  </div>
</template>

<script>
import Status from './Status.vue';

export default {
  components: {
    Status,
  },
};
</script>
