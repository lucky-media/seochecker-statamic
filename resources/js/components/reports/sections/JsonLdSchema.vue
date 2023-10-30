<template>
  <card class="mt-4">
    <card-header> JSON-LD Schema </card-header>
    <card-body>
      <div class="sp-grid sp-grid-cols-2">
        <div v-for="(value, key) in this.json_ld" :key="key">
          <div v-for="(value, key) in value" :key="key">
            <p class="font-medium">{{ key }}:</p>
            <p v-if="isString(value)" class="pl-4">{{ value }}</p>
            <template v-if="isObject(value)">
              <div v-for="(value, key) in value" :key="key" class="pl-4">
                <!-- Need to check also key, because some keys are numbers -->
                <p v-if="isString(key)" class="font-medium">{{ key }}:</p>
                <p v-if="isString(value)">{{ value }}</p>
                <template v-if="isObject(value)">
                  <div v-for="(value, key) in value" :key="key" class="pl-4">
                    <p v-if="isString(key)" class="font-medium">{{ key }}:</p>
                    <p v-if="isString(value)">{{ value }}</p>
                    <template v-if="isObject(value)">
                      <div
                        v-for="(value, key) in value"
                        :key="key"
                        class="pl-4"
                      >
                        <p v-if="isString(key)" class="font-medium">
                          {{ key }}:
                        </p>
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
