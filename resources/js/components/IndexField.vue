<template>
    <span class="w-full" style="max-width: 400px; display: flex; flex-wrap: wrap; gap: .25rem;">
        <span
            v-for="(value, option) in availableOptions"
            :key="option"
            :title="value"
            class="inline-block rounded-full w-2 h-2"
            :style="optionStyle(option)"
        />
    </span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],

    computed: {
        availableOptions() {
            return this.field.options
        },
    },

    methods: {
        optionStyle(option) {
            const color  = this.field.value && this.field.value.includes(option) ? 'green' : 'red'
            return {
                'background': `rgba(var(--colors-${color}-500),var(--tw-text-opacity))`
            }
        },
    },

}
</script>
