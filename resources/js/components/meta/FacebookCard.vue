<template>
    <div>
        <h3 class="mb-2">Facebook</h3>
        <a
            :href="url"
            target="_blank"
            class="inline-block sp-w-[500px]"
        >
            <div class="w-auto sp-h-full sp-relative">
                <img v-if="image" class="sp-object-contain" :src="image"/>
                <img
                    v-if="!image"
                    src="@/assets/no-image.png"
                    class="sp-h-full sp-w-full sp-object-contain"
                />
            </div>
            <div
                class="sp-break-words sp-border-[1px] sp-border-[#dadde1] sp-bg-[#f2f3f5] sp-px-[12px] sp-py-[10px] sp-antialiased">
                <p
                    class="sp-overflow-hidden sp-truncate sp-whitespace-nowrap sp-text-[12px] sp-uppercase sp-leading-[11px] sp-text-[#606770]"
                >
                    {{ domain }}
                </p>
                <h4 v-if="title"
                    class="sp-mt-[3px] sp-truncate sp-pt-[2px] sp-text-base sp-font-semibold sp-leading-[20px] sp-text-[#1d2129]">
                    {{ title }}</h4>
                <p
                    v-if="desc"
                    class="sp-mt-[3px] sp-block sp-h-[18px] sp-max-h-[80px] sp-border-separate sp-select-none sp-overflow-hidden sp-truncate sp-whitespace-nowrap sp-break-words sp-text-left sp-text-[14px] sp-leading-[20px] sp-text-[#606770]"
                >
                    {{ desc }}
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
        title: String,
        desc: String,
    },
    computed: {
        domain() {
            return new URL(this.url).hostname;
        },
    }
};
</script>
