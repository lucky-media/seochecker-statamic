<template>
  <div>
    <div :style="{ width: `${calWidth()}%` }" class="flex sp-justify-end">
      <div
        class="flex flex-col sp-items-center sp-justify-center sp-mb-1 sp-text-xs sp-min-w-max sp-transform sp-translate-x-1/2"
      >
        <span class="sp-text-xs sp-min-w-max sp-text-gray-500">
          {{ currentValue }}
        </span>
        <!-- Triangle -->
        <div class="sp-inline-block sp-w-1.5 sp-overflow-hidden">
          <div
            class="-sp-rotate-45 sp-bg-gray-600 sp-transform sp-origin-top-left sp-h-1 sp-w-1"
          />
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="flex h-2 overflow-hidden rounded sp-bg-gray-200">
        <div class="flex-1 sp-bg-green-500"></div>
        <div class="flex-1 sp-bg-orange-400"></div>
        <div class="flex-1 sp-bg-red-500"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    calWidth: function () {
      // Split value because ose values has 's' letter
      let value = this.currentValue.split('s')[0];
      return (Number(value) / Number(this.maxValue)) * 100;
    },
  },
  props: ['currentValue', 'maxValue'],
};
</script>
