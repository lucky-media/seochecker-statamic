<template>
  <card class="mt-4">
    <card-header> JSON-LD Schema </card-header>
    <card-body>
      <div class="sp-grid sp-grid-cols-2">
        <div v-for="(value, key) in this.json_ld" :key="key">
          <div v-for="(value, key) in value" :key="key">
            <div class="flex space-x-3">
              <b>{{ unslugify(key) }}:</b>
              <p v-if="isString(value)">{{ value }}</p>
            </div>
            <template v-if="isObject(value)">
              <div v-for="(value, key) in value" :key="key" class="pl-4">
                <!-- Need to check also key, because some keys are numbers -->
                <div class="flex space-x-3">
                  <b v-if="isString(key)">{{ unslugify(key) }}:</b>
                  <p v-if="isString(value)">{{ value }}</p>
                </div>
                <template v-if="isObject(value)">
                  <div v-for="(value, key) in value" :key="key" class="pl-4">
                    <div class="flex space-x-3">
                      <b v-if="isString(key)">{{ unslugify(key) }}:</b>
                      <p v-if="isString(value)">{{ value }}</p>
                    </div>
                    <template v-if="isObject(value)">
                      <div
                        v-for="(value, key) in value"
                        :key="key"
                        class="pl-4"
                      >
                        <b v-if="isString(key)"> {{ unslugify(key) }}: </b>
                        <p v-if="isString(value)">{{ value }}</p>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </template>
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
  methods: {
    unslugify,
    isObject(value) {
      return typeof value === 'object' && value !== null;
    },
    isString(value) {
      return typeof value === 'string' && value !== null;
    },
  },
};
</script>
