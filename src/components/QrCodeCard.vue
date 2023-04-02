<template>

</template>

<script lang="ts" setup>

const props = defineProps({
  errorConectionLevel: {
    type: String,
    default: 'L',
    validator: (value: string) => ['L', 'M', 'Q', 'H'].indexOf(value) !== -1
  },
  data: { type: String, required: true }
})
</script>