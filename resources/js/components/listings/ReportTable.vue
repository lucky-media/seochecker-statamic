<template>
  <div>
    <div
      v-if="reports.length === 0"
      class="flex flex-col p-8 mt-10 sp-space-y-6 sp-max-w-xl sp-mx-auto card sp-items-center"
    >
      <h1>Reports</h1>
      <div class="p-6 text-gray-800 sp-bg-gray-50 sp-rounded-full">
        <svg-icon name="telescope" class="w-12 h-12 text-gray-700" />
      </div>
      <p class="text-center text-gray-800 sp-font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <a class="btn-primary" :href="cp_url('/seopulse/create')">
          Create Report
        </a>
      </div>
    </div>

    <template v-if="reports.length !== 0">
      <div
        v-if="reports.length !== 0"
        class="flex flex-col items-start justify-between p-4 md:flex-row md:items-center"
      >
        <h2 class="flex items-end justify-end mb-2 md:m-0">
          <span class="w-6 h-6 mr-2 text-gray-800">
            <svg-icon name="telescope" class="w-5 h-5 text-gray-700" />
          </span>
          <span>Reports</span>
        </h2>

        <div class="flex items-center mb-6">
          <h1 class="flex-1">{{ title }}</h1>
          <a class="btn-primary" :href="cp_url('/seopulse/create')">
            Create Report
          </a>
        </div>
      </div>

      <div class="p-0 overflow-hidden card">
        <table class="data-table">
          <tbody>
            <tr v-for="(report, index) in reports" :key="index">
              <td class="text-xs whitespace-no-wrap">
                <div class="flex items-center">
                  <a :href="report.view_url">
                    {{ report.domain }}
                  </a>
                </div>
              </td>
              <td>
                <span class="bg-green-600 badge-sm">
                  {{ report.status }}
                </span>
              </td>
              <td>
                <relative-date :date="report.created_at"></relative-date>
              </td>
              <td class="float-right">
                <dropdown-list>
                  <dropdown-item text="View" :redirect="report.view_url" />
                  <dropdown-item text="Delete" @click="destroy(report.id)" />
                </dropdown-list>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import RelativeDate from '../RelativeDate.vue';

export default {
  props: ['reports'],
  components: {
    RelativeDate,
  },
  methods: {
    destroy(id) {
      Statamic.$request.delete(cp_url(`/seopulse/${id}`)).then((response) => {
        if (response.data.success) {
          window.location.reload();
        }
      });
    },
  },
};
</script>
