<template>
  <q-page class="flex flex-center">
    <h1>KASI</h1>
    <text-field ref="textfield" v-model="data" label="test" @update:model-value="update"></text-field>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TextField from "components/TextField";

export default defineComponent({
  name: 'PageIndex',
  components: {TextField},
  setup() {
    const textfield = ref(null)
    const update = (value) => {
      console.log('VALUE', value, textfield.value.input.modelValue, textfield.value.input.validate())
    }
    return {
      textfield,
      update,
      data: ref('')
    }
  }
})
</script>
