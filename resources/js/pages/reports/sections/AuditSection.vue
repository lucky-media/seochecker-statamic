<template>
    <div class="sp-grid md:sp-grid-cols-2 sp-gap-4 sp-mb-4">
        <audit-card
            title="Cumulative Layout Shift"
            :score="audit.cumulative_layout_shift.score"
            :description="audit.cumulative_layout_shift.description"
            :value="audit.cumulative_layout_shift.value"
            :maxValue="0.25"
        />
        <audit-card
            title="First Contentful Paint"
            :score="audit.first_contentful_paint.score"
            :description="audit.first_contentful_paint.description"
            :value="audit.first_contentful_paint.value"
            :maxValue="3"
        />
        <audit-card
            title="Largest Contentful Paint"
            :score="audit.largest_contentful_paint.score"
            :description="audit.largest_contentful_paint.description"
            :value="audit.largest_contentful_paint.value"
            :maxValue="4"
        />
        <audit-card
            title="Page Size"
            :score="audit.page_size.score"
            :description="audit.page_size.description"
            :value="audit.page_size.value"
            :maxValue="100"
        />

        <audit-card
            title="Speed Index"
            :score="audit.speed_index.score"
            :description="audit.speed_index.description"
            :value="audit.speed_index.value"
            :maxValue="5.8"
        />
        <audit-card
            title="Time To Interactive"
            :score="audit.time_to_interactive.score"
            :description="audit.time_to_interactive.description"
            :value="audit.time_to_interactive.value"
            :maxValue="60"
        />
        <audit-card
            title="Total Blocking Time"
            :score="audit.time_to_interactive.score"
            :description="audit.time_to_interactive.description"
            :value="audit.time_to_interactive.value"
            :maxValue="7.3"
        />

        <div class="flex items-center justify-center">
            <a :href="full_report" class="btn" target="_blank">
                View Full Report
            </a>
        </div>
    </div>
</template>

<script>
import Card from '@/components/card/Card.vue';
import CardBody from '@/components/card/CardBody.vue';
import AuditCard from '@/components/card/AuditCard.vue';
import ProgressBar from "@/components/ui/ProgressBar.vue";
import CardHeader from "@/components/card/CardHeader.vue";
import show from "@/pages/reports/Show.vue";

export default {
    props: ['audit', 'full_report'],
    data() {
        return {
            showFullReport: false,
        };
    },
    components: {
        CardHeader,
        ProgressBar,
        AuditCard,
        CardBody,
        Card,
    },
};
</script>
