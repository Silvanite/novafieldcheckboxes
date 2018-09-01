<template>
    <default-field :field="field">
        <template slot="field">
            <div class="flex flex-wrap w-full">
                <div
                    v-for="(label, option) in field.options"
                    :key="option"
                    class="flex w-1/2 lg:w-1/3 mb-2"
                >
                    <checkbox
                        :value="option"
                        :checked="isChecked(option)"
                        @input="toggleOption(option)"
                        class="pr-2"
                    />
                    <label
                        :for="field.name"
                        v-text="label"
                        @click="toggleOption(option)"
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
            return this.value.includes(option)
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
