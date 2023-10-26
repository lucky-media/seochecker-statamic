<template>
  <div>
    <a
      :href="url"
      target="_blanket"
      class="inline-block sp-relative sp-overflow-hidden sp-rounded-md"
    >
      <div class="sp-w-[438px] sp-h-[260px] sp-relative sp-bg-white sp-font-sm">
        <div
          v-if="card === 'summary_large_image'"
          :style="{ backgroundImage: `url(${image})` }"
          class="sp-w-full sp-h-full"
        ></div>
        <img
          v-if="card !== 'summary_large_image'"
          src="@/assets/no-image.png"
          class="sp-bg-gray-300 sp-w-full sp-object-contain sp-h-full"
        />
        <p
          class="px-3 py-1 text-xs text-gray-800 sp-rounded-md sp-shadow-sm sp-absolute sp-left-2 sp-bottom-2 sp-bg-white/80"
        >
          {{ url || 'www.google.com' }}
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
