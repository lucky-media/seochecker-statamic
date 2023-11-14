<!--
  If the result is greater than 100%, the indicator goes to the end of the progress bar;
  otherwise, 100% of the progress bar is in the orange part at the end.
-->

<template>
  <div>
    <div class="flex" :class="[indicator > 100 && 'relative']">
      <div class="flex w-2/3 h-2" :class="[indicator <= 100 && 'relative']">
        <div class="flex-1 sp-bg-green-500 sp-rounded-l" />
        <div class="flex-1 sp-bg-yellow-500" />
        <!-- Indicator Position -->
        <div :style="{ left: `${indicator}%` }" class="absolute top-2">
          <div
            class="flex flex-col sp-items-center sp-justify-center sp-mt-1 sp-text-xs sp-transform -sp-translate-x-1/2"
          >
            <!-- Triangle -->
            <div class="sp-inline-block sp-w-3 sp-overflow-hidden">
              <div
                class="sp-bg-gray-700 sp-rotate-45 sp-transform sp-origin-bottom-left sp-h-2 sp-w-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-2 sp-bg-red-500 sp-rounded-r"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'maxValue'],
  computed: {
    indicator: function () {
      let numberValue = this.value.split(' ')[0];
      // Over max value
      if (numberValue > this.maxValue) {
        return 101;
      }
      return (numberValue / this.maxValue) * 100;
    },
  },
};
</script>
