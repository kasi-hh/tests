<template>
  <div>
    {{modelValue}}
    <q-input ref="input" :rules="[]" v-model="modelValue" @update:model-value="onChange" v-bind="$attrs"></q-input>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "TextField",
  emits:['update:model-value'],
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const input = ref(null)
    const onChange = (value) => {
      emit('update:model-value', value)
    }
    return {
      onChange,
      input
    }
  }
}
</script>

<style scoped>

</style>
