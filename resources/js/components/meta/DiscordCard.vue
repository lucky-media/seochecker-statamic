<template>
  <div>
    <h3 class="mb-2">Discord</h3>
    <a
      :href="url"
      target="_blank"
      class="inline-block sp-w-[432px] sp-bg-gray-800 p-4 sp-rounded"
    >
      <p class="sp-text-xs sp-uppercase sp-leading-[11px] sp-text-gray-400">
        {{ url }}
      </p>
      <h3 v-if="site_name" class="py-2 sp-text-white sp-font-semibold">
        {{ site_name }}
      </h3>
      <p
        v-if="desc"
        class="text-sm sp-text-gray-200 sp-font-light sp-line-clamp-2"
      >
        {{ desc }}
      </p>
      <div
        v-if="image"
        class="sp-h-[200px] mt-4 sp-relative sp-bg-white sp-font-sm sp-rounded sp-overflow-hidden"
      >
        <div
          :style="{ backgroundImage: `url(${image})` }"
          class="sp-w-full sp-h-full"
        ></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    site_name: String,
    image: String,
    desc: String,
    url: String,
  },
};
</script>
