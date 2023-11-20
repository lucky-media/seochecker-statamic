<template>
  <div class="max-w-[600px]">
    <h3 class="mb-2">Google</h3>
    <a
      :href="domain"
      target="_blank"
      rel="noreferrer"
      class="!sp-text-blue-800 sp-text-lg hover:sp-underline"
    >
      {{ title }}
    </a>
    <div class="-sp-mt-0.5 sp-flex sp-items-center">
      <span class="sp-text-sm sp-text-green-800"> {{ domain }}</span>
      <!-- Triangle -->
      <div class="sp-inline-block sp-w-2 sp-overflow-hidden sp-mt-1 sp-ml-0.5">
        <div
          class="sp-bg-green-700 -sp-rotate-45 sp-transform sp-origin-top-left sp-h-1.5 sp-w-1.5"
        />
      </div>
    </div>
    <p class="sp-text-gray-700 sp-text-[13px]">{{ desc }}</p>
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
