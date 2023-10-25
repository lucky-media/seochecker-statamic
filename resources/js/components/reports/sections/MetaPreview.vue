<template>
    <div class="sp-space-y-4 sp-pt-4">
        
        <!-- Facebook -->
        <facebook-card 
            :image="og_graph.image"
            :description="og_graph.description"
            :site_name="og_graph.site_name"
            :url="og_graph.url"
        />

         <!-- Twitter -->
        <twitter-card 
            :image="twitter.image"
            :url="twitter.url"
        />

    </div>

</template>

<script>
import FacebookCard from '../../meta/FacebookCard.vue';
import TwitterCard from '../../meta/TwitterCard.vue';

export default {
    components: {
        FacebookCard,
        TwitterCard
    },
    props: ['og_graph', 'twitter'],
    mounted() {
      console.log(this.og_graph)  
    },
    components: {  FacebookCard, TwitterCard }
}
</script>