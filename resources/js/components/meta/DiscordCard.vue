<template>
  <div>
    <h3 class="mb-2">Discord</h3>
    <a
      :href="url"
      target="_blank"
      class="inline-block sp-w-[432px] sp-bg-gray-800 p-4 sp-rounded"
    >
      <p v-if="site_name" class="sp-text-xs sp-uppercase sp-leading-[11px] sp-text-gray-400">
        {{ site_name }}
      </p>
      <h3 v-if="title" class="py-2 sp-text-white sp-font-semibold">
        {{ title }}
      </h3>
      <p
        v-if="desc"
        class="sp-text-sm sp-text-gray-200 sp-font-light sp-line-clamp-2"
      >
        {{ desc }}
      </p>
      <img
        v-if="image"
        :src="image"
        class="sp-h-[200px] sp-w-full mt-4 sp-relative sp-font-sm sp-rounded sp-object-cover"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    desc: String,
    url: String,
    site_name: String,
  },
};
</script>
