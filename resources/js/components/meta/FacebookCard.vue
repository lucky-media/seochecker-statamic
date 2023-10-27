<template>
  <div>
    <h3 class="mb-2">Facebook</h3>
    <a
      :href="url"
      target="_blank"
      class="inline-block sp-border-[1px] sp-w-[500px]"
    >
      <div class="w-auto sp-h-full sp-relative">
        <img v-if="image" class="sp-object-contain" :src="image" />
        <img
          v-if="!image"
          src="@/assets/no-image.png"
          class="sp-h-full sp-w-full sp-object-contain"
        />
      </div>
      <div class="p-3 bg-gray-300">
        <p
          class="sp-truncate sp-whitespace-nowrap sp-text-xs sp-uppercase sp-leading-[11px] sp-text-gray-600"
        >
          {{ url }}
        </p>
        <h4 v-if="site_name" class="pt-1 pb-2 text-base">{{ site_name }}</h4>
        <p
          v-if="desc"
          class="text-sm text-gray-100 sp-line-clamp-1 sp-text-gray-500"
        >
          {{ desc }}
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
    site_name: String,
    desc: String,
  },
};
</script>
