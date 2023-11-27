<template>
  <div v-if="active" class="sp-pt-5 sp-px-3">
    <h5 class="text-lg sp-font-semibold">{{ title }} Links</h5>
    <ul class="sp-divide-y">
      <li
        v-for="(value, key) in data"
        :key="key"
        class="py-2 sp-flex sp-flex-col"
      >
        <span class="text-sm sp-font-medium">
            <span class="sp-font-medium sp-text-xs sp-text-gray-600">Link:</span>
            {{ value.href }}
        </span>
        <span class="text-sm pt-0.5">
          <span class="sp-font-medium sp-text-xs sp-text-gray-600">Text:</span>
          {{ value.content }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['active', 'title', 'data'],
};
</script>
