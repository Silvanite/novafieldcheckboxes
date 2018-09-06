<template>
    <span class="w-full">
        <span
            v-for="(value, option) in availableOptions"
            :key="option"
            :class="optionClass(option)"
            :title="value"
            class="inline-block rounded-full w-2 h-2 mr-1"
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
        optionClass(option) {
            return {
                'bg-success': this.field.value ? this.field.value.includes(option) : false,
                'bg-danger': this.field.value ? !this.field.value.includes(option) : true,
            }
        },
    },

}
</script>
