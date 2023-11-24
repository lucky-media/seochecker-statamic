<template>
  <card>
    <card-body>
      <!-- Header Links -->
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

      <list-of-links
        title="Internal"
        :active="active == 'internal'"
        :data="data[active]"
      />
      <list-of-links
        title="External"
        :active="active == 'external'"
        :data="data[active]"
      />
    </card-body>
  </card>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardBody from '@/components/card/CardBody.vue';
import ListOfLinks from '@/components/infolist/ListOfLinks.vue';

export default {
  components: {
    Card,
    CardBody,
    ListOfLinks,
  },
  props: ['data'],
  data() {
    return {
      active: '',
    };
  },
  methods: {
    showList(param) {
      this.active = this.active === param ? '' : param;
    },
  },
};
</script>
