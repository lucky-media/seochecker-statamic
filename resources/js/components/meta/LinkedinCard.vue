<template>
  <div>
    <h3 class="mb-2">Linkedin</h3>
    <a :href="url" target="_blank" class="inline-block sp-w-[500px] shadow">
      <div class="sp-h-[274px] sp-relative sp-bg-white">
        <img
          v-if="image"
          :src="image"
          class="sp-h-full sp-bg-gray-50 sp-w-full sp-object-obtain"
        />
        <img
          v-if="!image"
          src="@/assets/no-image.png"
          class="sp-h-full sp-bg-gray-50 sp-w-full sp-object-obtain"
        />
      </div>
      <div class="p-3 bg-white">
        <h4 v-if="site_name" class="mb-2 text-base">{{ site_name }}</h4>
        <p
          class="sp-truncate sp-whitespace-nowrap sp-text-xs sp-uppercase sp-text-gray-600"
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
    site_name: String,
    image: String,
    url: String,
  },
};
</script>
