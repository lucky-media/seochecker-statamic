<template>
    <div>
        <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center p-4"
        >
            <h2 class="flex items-end justify-end mb-2 md:m-0">
                <span class="h-6 w-6 mr-2 text-gray-800">
                    <svg-icon name="telescope" class="text-gray-700 h-5 w-5" />
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

        <div>
            <div class="card p-0 overflow-hidden" v-if="reports">
                <table class="data-table">
                    <tbody>
                    <tr v-for="report in reports">
                        <td class="text-xs whitespace-no-wrap">
                            <div class="flex items-center">
                                <a :href="report.view_url">
                                    {{ report.domain }}
                                </a>
                            </div>
                        </td>
                        <td>
                            <span class="badge-sm bg-green-600">
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
        </div>
    </div>
</template>

<script>
import RelativeDate from "../RelativeDate.vue";

export default {
    props: [
        'reports',
    ],
    components: {
        RelativeDate
    },
    methods: {
        destroy(id) {
            Statamic.$request.delete(cp_url(`/seopulse/${id}`))
                .then(response => {
                    if (response.data.success) {
                        window.location.reload();
                    }
                });
        }
    }
}
</script>
