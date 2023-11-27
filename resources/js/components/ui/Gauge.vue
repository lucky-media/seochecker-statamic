<template>
    <card>
        <card-header>
            {{ title }}
        </card-header>
        <card-body class="flex justify-center relative">
            <svg :height="radius * 2" :width="radius * 2">
                <defs>
                    <linearGradient :id="`grad-${getItemId}`" x1="0" y1="0" x2="1" y2="1">
                        <!-- 300/500 -->
                        <stop offset="15%" :stop-color="gradientStopColor" stop-opacity="1" />
                        <stop offset="85%" :stop-color="gradientStartColor" stop-opacity="1" />
                    </linearGradient>
                </defs>
                <circle
                    class="gauge_base"
                    :cx="radius"
                    :cy="radius"
                    fill="transparent"
                    :r="innerRadius"
                    stroke="#e2e8f0"
                    :stroke-dasharray="dashArray"
                    stroke-linecap="round"
                    :stroke-width="strokeWidth"
                    :transform="transform"
                />
                <circle
                    class="gauge_percent"
                    :cx="radius"
                    :cy="radius"
                    fill="transparent"
                    :r="innerRadius"
                    :stroke="`url(#grad-${getItemId})`"
                    :stroke-dasharray="dashArray"
                    :stroke-dashoffset="offset"
                    stroke-linecap="round"
                    :stroke-width="strokeWidth"
                    :style="{ 'transition': 'stroke-dashoffset 0.3s' }"
                    :transform="transform"
                />
            </svg>
            <p v-text="score" :class="{
                'sp-text-green-500': color === 'high',
                'sp-text-yellow-500': color === 'medium',
                'sp-text-red-500': color === 'low',
            }" class="sp-absolute sp-inset-0 sp-mx-auto sp-flex sp-items-center sp-justify-center sp-font-display sp-font-bold sp-text-3xl">
            </p>
        </card-body>
    </card>
</template>

<script>
import Card from "../card/Card.vue";
import CardHeader from "../card/CardHeader.vue";
import CardBody from "../card/CardBody.vue";

export default {
    components: {CardBody, CardHeader, Card},
    props: {
        title: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            color: '',
            radius: 60,
        }
    },
    mounted() {
        this.getScoreColor(this.score);
    },
    methods: {
        getScoreColor(score) {
            if (score >= 90) {
                this.color = 'high';
            } else if (score > 50 && score < 89) {
                this.color = 'medium';
            } else {
                this.color = 'low';
            }
        },
    },
    computed: {
        getItemId() {
          return this.title.toLocaleLowerCase().split(' ').join('-');
        },
        strokeWidth() {
            return this.radius * 0.2;
        },
        innerRadius() {
            return this.radius - this.strokeWidth;
        },
        circumference() {
            return this.innerRadius * 2 * Math.PI;
        },
        arc() {
            return this.circumference * 0.75;
        },
        dashArray() {
            return `${this.arc} ${this.circumference}`;
        },
        transform() {
            return `rotate(135, ${this.radius}, ${this.radius})`;
        },
        offset() {
            return this.arc - ((this.score / 100) * this.arc);
        },
        gradientStartColor() {
            const colors = {
                high: '#86efac',
                medium: '#fde047',
                low: '#fca5a5',
            }

            return colors[this.color];
        },
        gradientStopColor() {
            const colors = {
                high: '#22c55e',
                medium: '#eab308',
                low: '#ef4444',
            }

            return colors[this.color];
        }
    },
};
</script>
