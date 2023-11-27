<template>
    <div class="p-2">
        <div class="text-center sp-grid sp-grid-cols-3">
            <div>
                <h5 class="sp-text-sm sp-text-gray-600">Total Links</h5>
                <h3 class="sp-text-3xl">
                    {{ totalLinks }}
                </h3>
            </div>
            <div>
                <h5 class="sp-text-sm sp-text-gray-600"">Internal Links</h5>
                <h3 class="sp-text-3xl">
                    {{ data.internal.length }}
                </h3>
                <button
                    @click="showList('internal')"
                    class="sp-text-xs sp-font-medium"
                    v-text="active === 'internal' ? 'Hide' : 'Show'"
                />
            </div>
            <div>
                <h5 class="sp-text-sm sp-text-gray-600">External Links</h5>
                <h3 class="sp-text-3xl">
                    {{ data.external.length }}
                </h3>
                <button
                    @click="showList('external')"
                    class="sp-text-xs sp-font-medium"
                    v-text="active === 'external' ? 'Hide' : 'Show'"
                />
            </div>
        </div>

        <list-of-links
            title="Internal"
            :active="active === 'internal'"
            :data="data[active]"
        />
        <list-of-links
            title="External"
            :active="active === 'external'"
            :data="data[active]"
        />
    </div>
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
    computed: {
        totalLinks() {
            return Number(this.data.internal.length + this.data.external.length);
        },
    }
};
</script>
