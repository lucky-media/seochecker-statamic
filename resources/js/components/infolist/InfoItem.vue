<template>
    <div class="form-group publish-field publish-field__display field_display-fieldtype config-field">
        <div class="field-inner flex flex-row items-center">
            <status :value="score" />
            <div class="flex flex-col ml-2">
                <label for="field_display" class="publish-field-label">
                    <span class="mr-1 v-popper--has-tooltip">
                        {{ title }}
                    </span>
                </label>
                <div v-if="description" class="help-block mt-1">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import Status from "../Status.vue";

export default {
    components: {Status},
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        score: {
            type: String,
            default: 'default',
        }
    }
}
</script>
