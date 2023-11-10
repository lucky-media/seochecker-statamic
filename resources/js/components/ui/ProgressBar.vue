<template>
  <div v-if="indicator() < maxValue * 100">
    <div class="relative overflow-hidden rounded">
      <div class="flex h-2 sp-bg-red-500">
        <div
          class="sp-bg-green-500"
          :style="{ width: `${width(passedValue)}%` }"
        />
        <div
          class="sp-bg-orange-400"
          :style="{ width: `${width(warningValue)}%` }"
        />
      </div>
    </div>

    <div :style="{ width: `${indicator()}%` }" class="flex sp-justify-end">
      <div
        class="flex flex-col sp-items-center sp-justify-center sp-mt-1 sp-text-xs sp-min-w-max sp-transform sp-translate-x-1/2"
      >
        <!-- Triangle -->
        <div class="sp-inline-block sp-w-1.5 sp-overflow-hidden">
          <div
            class="sp-bg-gray-700 sp-rotate-45 sp-transform sp-origin-bottom-left sp-h-1 sp-w-1"
          />
        </div>

        <span class="sp-text-xs sp-min-w-max sp-text-gray-500">
          {{ resultValue }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    indicator: function () {
      // Split value from 's'
      let value = this.resultValue.split(' ')[0];
      return (Number(value) / Number(this.maxValue)) * 10;
    },
    width: function (value) {
      return Math.floor((Number(value) / Number(this.maxValue)) * 100);
    },
  },

  props: ['resultValue', 'passedValue', 'warningValue', 'maxValue'],
};
</script>
