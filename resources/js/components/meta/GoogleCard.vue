<template>
  <div class="max-w-[600px]">
    <h3 class="mb-2">Google</h3>
    <a
      :href="domain"
      target="_blank"
      rel="noreferrer"
      class="!sp-text-[#1a0dab] sp-text-lg hover:sp-underline"
    >
      {{ title ?? domain }}
    </a>
    <div class="-sp-mt-0.5 sp-flex sp-items-center">
      <span class="sp-text-sm sp-text-[#006621]"> {{ domain }}</span>
      <!-- Triangle -->
      <div class="sp-inline-block sp-w-2 sp-overflow-hidden sp-mt-1 sp-ml-0.5">
        <div
          class="sp-bg-[#006621] -sp-rotate-45 sp-transform sp-origin-top-left sp-h-1.5 sp-w-1.5"
        />
      </div>
    </div>
    <p v-if="desc" class="sp-text-[#545454] sp-text-[13px]">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    domain: String,
  },
};
</script>
