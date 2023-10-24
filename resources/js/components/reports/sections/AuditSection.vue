<template>
    <div class="sp-grid sp-grid-cols-2 sp-gap-4 sp-mb-4">
        <audit-card v-for="(item, key, index) in audit" :key="key" :title="key"
                    :score="item.score"
                    :value="item.value"
                    :description="item.description"
        />
    </div>
</template>

<script>
import Card from "../../card/Card.vue";
import CardBody from "../../card/CardBody.vue";
import AuditCard from "../../AuditCard.vue";

export default {
    props: ['audit'],
    components: {
        AuditCard,
        CardBody,
        Card,
    }
}
</script>
