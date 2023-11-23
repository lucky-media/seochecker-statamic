<template>
  <card>
    <card-body>
      <div class="text-center sp-grid sp-grid-cols-3">
        <div>
          <h5 class="text-lg">Total Links</h5>
          <h4 class="text-lg">
            {{ data.internal.length + data.external.length }}
          </h4>
        </div>
        <div>
          <h5 class="text-lg">Internal Links</h5>
          <h4 class="text-lg">
            {{ data.internal.length }}
          </h4>
          <button
            @click="showList('internal')"
            class="sp-text-xs sp-font-medium"
            v-text="active == 'internal' ? 'Hide' : 'Show'"
          />
        </div>
        <div>
          <h5 class="text-lg">External Links</h5>
          <h4 class="text-lg">
            {{ data.external.length }}
          </h4>
          <button
            @click="showList('external')"
            class="sp-text-xs sp-font-medium"
            v-text="active == 'external' ? 'Hide' : 'Show'"
          />
        </div>
      </div>

      <div v-show="active == 'internal'" class="sp-pt-5">
        <h5 class="text-lg sp-font-semibold">Internal Links</h5>
        <ul class="sp-divide-y">
          <li
            v-for="(value, key) in data[this.active]"
            :key="key"
            class="py-2 sp-flex sp-flex-col"
          >
            <span class="text-sm sp-font-medium">{{ value.href }}</span>
            <span class="text-sm pt-0.5">
              <span class="sp-font-medium">Anchor:</span>
              {{ value.content }}
            </span>
          </li>
        </ul>
      </div>

      <div v-show="active == 'external'" class="sp-pt-5">
        <h5 class="text-lg sp-font-semibold">External Links</h5>
        <ul class="sp-divide-y">
          <li
            v-for="(value, key) in data[this.active]"
            :key="key"
            class="py-2 sp-flex sp-flex-col"
          >
            <span class="text-sm sp-font-medium">{{ value.href }}</span>
            <span class="text-sm pt-0.5">
              <span class="sp-font-medium">Anchor:</span>
              {{ value.content }}
            </span>
          </li>
        </ul>
      </div>
    </card-body>
  </card>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardBody from '@/components/card/CardBody.vue';

export default {
  components: {
    Card,
    CardBody,
  },
  props: ['data'],
  data() {
    return {
      active: 'internal',
    };
  },
  methods: {
    showList(param) {
      this.active = this.active === param ? '' : param;
    },
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
