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
                        :style="optionStyle(option)"
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
      optionStyle(option) {
          return {
            'background': this.field.value && this.field.value.includes(option) ? 'rgba(var(--colors-green-500),var(--tw-text-opacity))' : 'rgba(var(--colors-red-500),var(--tw-text-opacity))',
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
