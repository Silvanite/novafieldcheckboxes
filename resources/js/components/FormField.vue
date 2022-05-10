<template>
    <default-field :field="field" full-width-content>
        <template #field>
            <div
                :style="{columnCount: this.field.columns}"
                class="w-full max-col-2"
            >
                <div
                    v-for="(label, option) in field.options"
                    :key="option"
                    class="flex mb-2"
                >
                    <checkbox
                        :value="option"
                        :checked="isChecked(option)"
                        @input="toggleOption(option)"
                        class="mr-2"
                    />
                    <label
                        :for="field.name"
                        v-text="label"
                        @click="toggleOption(option)"
                        class="w-full leading-tight"
                    ></label>
                </div>
            </div>
            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        isChecked(option) {
            return this.value ? this.value.includes(option) : false
        },

        toggleOption(option) {
            if (this.isChecked(option)) {
                this.$set(this, 'value', this.value.filter(item => item != option))

                return
            }

            this.value.push(option)
        },

        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = this.field.value || []
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, this.value || [])
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    }
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
