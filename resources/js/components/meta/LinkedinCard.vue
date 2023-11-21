<template>
  <div>
    <h3 class="mb-2">Linkedin</h3>
    <a
      :href="url"
      target="_blank"
      class="inline-block sp-w-[500px] sp-shadow-md"
    >
      <div class="sp-w-auto sp-h-[270px] sp-relative sp-border">
        <img v-if="image" :src="image" class="sp-object-contain" />
        <img
          v-if="!image"
          src="@/assets/no-image.png"
          class="sp-h-full sp-w-full sp-object-contain"
        />
      </div>
      <div class="p-3 bg-white">
        <h4 v-if="title" class="mb-2 sp-text-base">{{ title }}</h4>
        <p
          class="sp-truncate sp-whitespace-nowrap sp-text-xs sp-uppercase sp-text-gray-600"
        >
          {{ domain }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    domain: String,
  },
};
</script>
