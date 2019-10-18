<template>
    <panel-item :field="field">
        <p slot="value" class="text-90 flex">
            <span
                :style="{columnCount: this.field.columns}"
                class="w-full max-col-2"
            >
                <div
                    v-for="(label, option) in field.options"
                    :key="option"
                    class="flex-auto"
                >
                    <span
                        class="inline-block rounded-full w-2 h-2 mr-1"
                        :class="optionClass(option)"
                    />
                    <span>{{ label }}</span>
                </div>
            </span>
        </p>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],

    methods: {
        optionClass(option) {
            return {
                'bg-success': this.field.value ? this.field.value.includes(option) : false,
                'bg-danger': this.field.value ? !this.field.value.includes(option) : true,
            }
        },
    },
}
</script>

<style>
    .max-col-2 {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        white-space: nowrap;
    }
</style>
