<template>
    <card>
        <card-header>
            Common SEO Issues
        </card-header>

        <info-item title="Meta Title Test" :score="seo.title.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.title.description }}</p>
                <p>Text: <b>{{ seo.title.value }}</b></p>
                <p>Characters: <b>{{ seo.title.value.length }}</b></p>
            </div>
        </info-item>

        <info-item title="Meta Description Test" :score="seo.description.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.description.description }}</p>
                <p>Text: <b>{{ seo.description.value }}</b></p>
                <p>Characters: <b>{{ seo.description.value.length }}</b></p>
            </div>
        </info-item>

        <info-item title="Canonical Test" :score="seo.canonical.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.canonical.description }}</p>
            </div>
        </info-item>

        <info-item title="Keywords Test" :score="seo.keywords.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.keywords.description }}</p>
            </div>
        </info-item>

        <info-item title="Index Tag Test" :score="seo.index.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.index.description }}</p>
            </div>
        </info-item>

        <info-item title="Lang Tag Test" :score="seo.lang.score">
            <div class="flex flex-col items-start space-y-2">
                <p>{{ seo.lang.description }}</p>
            </div>
        </info-item>

        <info-item title="Heading Count" score="info">
            <div class="flex flex-col items-start ">
                <div class="sp-w-full sp-divide-gray-200 sp-divide-y">
                    <h1 class="py-2 leading-none">h1: {{ seo.headingCount.h1 }}</h1>
                    <h2 class="py-2 leading-none">h2: {{ seo.headingCount.h2 }}</h2>
                    <h3 class="py-2 leading-none">h3: {{ seo.headingCount.h3 }}</h3>
                    <h4 class="py-2 leading-none">h4: {{ seo.headingCount.h4 }}</h4>
                    <h5 class="py-2 leading-none">h5: {{ seo.headingCount.h5 }}</h5>
                    <h5 class="py-2 leading-none">h6: {{ seo.headingCount.h6 }}</h5>
                </div>
            </div>
        </info-item>

        <info-item title="Images without alt" :score="seo.image_scores[0].score">
            <div class="flex flex-col items-start ">
                <p>{{ seo.image_scores[0].description }}</p>
                <p>Count: <b>{{ seo.image_scores[0].value }}</b></p>
            </div>
        </info-item>

        <info-item title="Images without src" :score="seo.image_scores[1].score">
            <div class="flex flex-col items-start ">
                <p>{{ seo.image_scores[1].description }}</p>
                <p>Count: <b>{{ seo.image_scores[1].value }}</b></p>
            </div>
        </info-item>
    </card>
</template>

<script>
import CardHeader from "../../card/CardHeader.vue";
import Card from "../../card/Card.vue";
import InfoItem from "../../infolist/InfoItem.vue";

export default {
    components: {
        InfoItem,
        Card,
        CardHeader
    },
    props: ['seo'],
}
</script>
