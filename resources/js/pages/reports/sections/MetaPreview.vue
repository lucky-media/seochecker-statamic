<template>
  <div class="sp-space-y-4">
    <!-- Facebook -->
    <facebook-card
      :image="og_graph.image"
      :desc="og_graph.description"
      :title="og_graph.title"
      :url="og_graph.url"
    />

    <!-- Twitter -->
    <twitter-card
      :url="this.domain"
      :image="twitter.image"
      :card="twitter.card"
    />

    <!-- Linkedin -->
    <linkedin-card
      :title="og_graph.title"
      :image="og_graph.image"
      :url="og_graph.url"
    />

    <!-- Discord -->
    <discord-card
      :title="og_graph.title"
      :site_name="og_graph.site_name"
      :image="og_graph.image"
      :url="og_graph.url"
      :desc="og_graph.description"
    />
  </div>
</template>

<script>
import FacebookCard from '@/components/meta/FacebookCard.vue';
import TwitterCard from '@/components/meta/TwitterCard.vue';
import LinkedinCard from '@/components/meta/LinkedinCard.vue';
import DiscordCard from '@/components/meta/DiscordCard.vue';

export default {
  components: {
    FacebookCard,
    TwitterCard,
    LinkedinCard,
    DiscordCard,
  },
  props: ['og_graph', 'twitter', 'domain'],
};
</script>
