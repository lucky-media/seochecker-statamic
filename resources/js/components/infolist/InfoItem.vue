<template>
  <div
    class="form-group publish-field publish-field__display field_display-fieldtype config-field"
  >
    <div class="flex flex-row field-inner">
      <status :value="score" />
      <div class="flex flex-col ml-2">
        <label for="field_display" class="publish-field-label">
          <span class="mr-1 font-semibold sp-text-base v-popper--has-tooltip">
            {{ title }}
          </span>
        </label>
        <div class="mt-1 help-block">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="text-sm sp-text-gray-500">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Status from '../Status.vue';

export default {
  components: { Status },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    score: {
      type: String,
      default: 'default',
    },
  },
};
</script>
