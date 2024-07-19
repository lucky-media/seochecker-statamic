<template>
  <div class="max-w-xl">
    <div class="card">
      <div class="flex flex-row space-x-4">
        <text-input class="w-full" placeholder="Domain" v-model="domain" />
        <button class="btn-primary" :disabled="disabled" @click="createReport">
          <div v-if="loading" class="flex items-center w-5 h-5 mr-2">
            <loading-graphic inline text="" />
          </div>
          Create Report
        </button>
      </div>
      <p v-if="errors.length > 0" v-for="error in errors" v-text="error" class="my-2 text-sm text-red-500"></p>
    </div>
    <div
      v-if="loading"
      class="flex flex-col items-center justify-center w-full mt-4"
    >
      <loading-graphic inline text="Please wait while we diagnose your site." />
      <p class="mt-1 text-sm text-gray">This may take a few minutes.</p>
    </div>

    <div
      v-if="success"
      class="flex flex-col items-center justify-center w-full mt-4"
    >
      <p class="mt-1 text-lg text-green-600">
        Report created successfully! Redirecting...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['app_url', 'app_env', 'create_report_url'],
  data() {
    return {
      domain: this.app_url,
      errors: [],
      disabled: false,
      loading: false,
      success: false,
      report: null,
    };
  },
  mounted() {
    if (this.app_env !== 'production') {
      this.errors.push(['SEOPulse works only on a production environment']);
      this.disabled = true;
    }
  },
  methods: {
    createReport() {
      if (this.domain.startsWith('http://')) {
        this.errors = [];
        this.errors = ['Please enter a domain with SSL'];
        return;
      }

      if (!this.domain.startsWith(this.app_url)) {
        this.errors = [];
        this.errors = [`Domain must start with ${this.app_url}`];
        return;
      }

      this.loading = true;
      this.disabled = true;
      this.errors = [];

      this.fetchReport();
    },
    fetchReport() {
      Statamic.$request
        .post(this.create_report_url, { domain: this.domain })
        .then(({ data }) => {
          if (!data.success) {
              this.errors = data.data.data.domain;
              this.loading = false;
              this.disabled = false;
            return;
          }

          this.loading = false;
          this.disabled = false;
          this.success = true;

          setTimeout(() => {
            window.location.href = cp_url(`seopulse`);
          }, 1000);
        });
    },
  },
};
</script>
