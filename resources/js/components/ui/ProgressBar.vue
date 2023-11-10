<template>
  <div>
    <div class="flex sp-rounded-r" :class="[indicator === 100 && 'relative']">
      <div
        class="flex w-2/3 h-2 sp-rounded-l"
        :class="[indicator < 100 && 'relative']"
      >
        <div class="flex-1 sp-bg-green-500" />
        <div class="flex-1 sp-bg-yellow-500" />
        <!-- Indicator Position -->
        <div :style="{ left: `${indicator}%` }" class="absolute top-2">
          <div
            class="flex flex-col sp-items-center sp-justify-center sp-mt-1 sp-text-xs sp-transform -sp-translate-x-1/2"
          >
            <div class="sp-inline-block sp-w-1.5 sp-overflow-hidden">
              <div
                class="sp-bg-gray-700 sp-rotate-45 sp-transform sp-origin-bottom-left sp-h-1 sp-w-1"
              />
            </div>
            <span class="text-center sp-text-xs sp-text-gray-500">
              {{ value }}
            </span>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-2 sp-bg-red-500"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'maxValue'],
  computed: {
    indicator: function () {
      let numberValue = this.value.split(' ')[0];
      if (numberValue > this.maxValue) {
        return 100;
      }
      return (numberValue / this.maxValue) * 100;
    },
  },
};
</script>
