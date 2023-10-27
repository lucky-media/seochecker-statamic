<template>
  <div>
    <h3 class="mb-2">Twitter</h3>
    <a
      :href="url"
      target="_blank"
      class="inline-block sp-relative sp-overflow-hidden sp-rounded-md"
    >
      <div class="sp-w-[438px] sp-h-[260px] sp-bg-gray-300">
        <img
          v-if="card === 'summary_large_image'"
          :src="image"
          class="sp-w-full sp-object-obtain sp-h-full"
        />
        <img
          v-if="card !== 'summary_large_image'"
          src="@/assets/no-image.png"
          class="sp-w-full sp-object-obtain sp-h-full"
        />
        <p
          v-if="url"
          class="px-3 py-1 text-xs text-gray-800 sp-rounded-md sp-shadow sp-absolute sp-left-2 sp-bottom-2 sp-bg-white/95"
        >
          {{ url }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    image: String,
    card: String,
  },
};
</script>
