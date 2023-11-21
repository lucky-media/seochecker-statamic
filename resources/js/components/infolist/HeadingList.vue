<template>
  <div>
    <div class="flex sp-justify-between">
      <component :is="tag" class="py-2 leading-none">
        {{ title }}: {{ length }}
      </component>
      <button
        @click="showHide()"
        class="sp-text-xs sp-font-medium"
        v-text="isHidden ? 'Hide' : 'Show'"
      />
    </div>
    <ul v-if="isHidden" class="pb-2">
      <li v-for="value in list" :key="value">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'list', 'length', 'tag'],
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    showHide() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>
