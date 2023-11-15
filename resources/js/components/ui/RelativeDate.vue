<template>
    <span>{{ text }}</span>
</template>


<script>
export default {
    props: ['date'],


    data() {
        return {
            text: null
        }
    },

    mounted() {
        this.update();
    },

    methods: {

        update() {
            this.text = moment(this.date).fromNow();

            setTimeout(() => this.update(), 60000); // once a minute
        }

    }

}
</script>
