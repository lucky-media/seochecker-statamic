<template>
  <card class="mt-4">
    <card-header> JSON-LD Schema </card-header>
    <card-body class="sp-space-y-4">
      <table
        v-for="(value, key) in this.json_ld"
        :key="key"
        class="sp-overflow-hidden sp-rounded-lg sp-ring-1 sp-ring-gray-300 sp-divide-y sp-w-full"
      >
        <tr v-for="(value, key) in value" :key="key">
          <td class="w-1/4 px-4 py-2 sp-bg-gray-50">
            <b>
              {{ unslugify(key) }}
            </b>
          </td>
          <td class="w-3/4 px-4 py-1">
            <template v-if="isString(value)"> {{ value }}</template>
            <template v-if="isObject(value)">
              <div v-for="(value, key) in value" :key="key">
                <span class="sp-font-medium sp-pr-2" v-if="isString(key)"
                  >{{ key }}:</span
                >
                <template v-if="isString(value)">{{ value }}</template>
                <template v-if="isObject(value)">
                  <div v-for="(value, key) in value" :key="key">
                    <span class="sp-font-medium sp-pr-2" v-if="isString(key)"
                      >{{ key }}:
                    </span>
                    <template v-if="isString(value)">
                      {{ value }}
                    </template>
                    <template v-if="isObject(value)">
                      <span v-for="(value, key) in value" :key="key">
                        {{ value }}
                      </span>
                    </template>
                  </div>
                </template>
              </div>
            </template>
          </td>
        </tr>
      </table>
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
    isObject(value) {
      return typeof value === 'object' && value !== null;
    },
    isString(value) {
      return typeof value === 'string' && value !== null;
    },
  },
};
</script>
