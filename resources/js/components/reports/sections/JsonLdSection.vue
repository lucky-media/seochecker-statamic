<template>
  <card class="mt-4">
    <card-header> JSON-LD </card-header>
    <card-body>
      <div class="sp-grid sp-grid-cols-2">
        <div v-for="(object, objectKey) in json_ld" :key="objectKey">
          <div v-for="(itemValue, itemKey) in object" :key="itemKey">
            <p>
              <b>{{ itemKey }}:</b>
            </p>
            <p>
              <code>{{ itemValue }}</code>
            </p>
          </div>
        </div>
      </div>
    </card-body>
  </card>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardHeader from '@/components/card/CardHeader.vue';
import CardBody from '@/components/card/CardBody.vue';
import unslugify from '@/services/unslugify';

export default {
  props: ['json_ld'],
  components: {
    Card,
    CardHeader,
    CardBody,
  },
  mounted() {
    console.log(this.json_ld);
  },
  methods: {
    unslugify,
  },
};
</script>
