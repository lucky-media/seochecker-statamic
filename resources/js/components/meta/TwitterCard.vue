<template>
    <div>
        <h3 class="mb-2">Twitter</h3>
        <a
            :href="url"
            target="_blank"
            class="inline-block sp-relative sp-overflow-hidden sp-rounded-md"
        >
            <div class="sp-w-[512px] sp-h-[268px] sp-bg-gray-300">
                <img
                    v-if="card === 'summary_large_image'"
                    :src="image"
                    class="h-full sp-object-cover sp-object-center sp-w-full"
                />
                <img
                    v-if="card !== 'summary_large_image'"
                    src="@/assets/no-image.png"
                    class="sp-w-full sp-object-contain sp-h-full"
                />
                <p
                    v-if="url"
                    class="px-3 py-1 text-white sp-text-xs sp-rounded-md sp-shadow sp-absolute sp-left-2 sp-bottom-2 sp-bg-black/30"
                >
                    {{ domain }}
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        url: String,
        image: String,
        card: String,
    },
    computed: {
        domain() {
            return new URL(this.url).hostname;
        },
    }
};
</script>
