<template>
    <div class="sp-space-y-4 sp-pt-4">
        
        <!-- Facebook -->
        <meta-card 
            title="Facebook Preview"
            :image="og_graph.image"
            :description="og_graph.description"
            :site_name="og_graph.site_name"
            :url="og_graph.url"
        />
         <!-- Twitter -->
        <meta-card 
            title="Twitter Preview"
            :image="twitter.image"
            :description="twitter.description"
            :site_name="twitter.site_name"
            :url="twitter.url"
        />

    </div>

</template>

<script>
import MetaCard from '../../card/MetaCard.vue';

export default {
    components: {
        MetaCard
    },
    props: ['og_graph', 'twitter'],
    components: { MetaCard }
}
</script>