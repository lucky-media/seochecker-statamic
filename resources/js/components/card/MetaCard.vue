<template>
    <div>
     <h1 class="mb-2">{{title || 'No title'}}</h1>
            <a :href="url" target="_blanket" class="inline-block">
            <div class="sp-w-[500px] sp-relative sp-bg-white sp-font-sm">
                <div v-if="image" :style="{ backgroundImage: `url(${image})` }" class="sp-w-full sp-h-[260px]" ></div> 
                <img v-if="!image" src="@/assets/no-image.png" class="sp-h-[200px] sp-bg-gray-50 sp-w-full sp-object-contain" />
                <div class="p-3">
                    <h4 class="pb-1 text-lg">{{ site_name || 'No Title' }}</h4>
                    <p class="text-sm text-gray-800">{{ description || 'No Description' }}</p>
                    <p class="pt-2 text-xs text-gray-800">{{ url }}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>

export default {
    props: {
        title:String,
        url: String,
        image:  String,
        site_name:  String,
        description:  String,
    },
}

</script>