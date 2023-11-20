<template>
  <div>
    <div class="flex sp-justify-between">
      <h1 class="py-2 leading-none">{{ title }}: {{ length }}</h1>
      <button @click="showHide()">Show Headings</button>
    </div>
    <ul v-if="!isHidden">
      <li v-for="value in list" :key="value">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'list', 'length'],
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
