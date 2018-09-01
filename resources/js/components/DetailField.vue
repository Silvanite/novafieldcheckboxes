<template>
    <panel-item :field="field">
        <p slot="value" class="text-90">
            <span class="flex flex-wrap w-full">
                <div
                    v-for="(label, option) in field.options"
                    :key="option"
                    class="w-1/3"
                >
                    <span
                        class="inline-block rounded-full w-2 h-2 mr-1"
                        :class="{'bg-success': field.value.includes(option), 'bg-danger': !field.value.includes(option)}"
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
}
</script>
