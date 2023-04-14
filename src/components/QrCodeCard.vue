<template>

</template>

<script lang="ts" setup>
import qrcode from 'qrcode-generator';


const props = defineProps({
  errorConectionLevel: {
    type: String,
    default: 'L',
    validator: (value: string) => ['L', 'M', 'Q', 'H'].indexOf(value) !== -1
  },
  data: { type: String, required: true }
})

const createQrCode = (text: string, typeNumber: TypeNumber, errorConectionLevel: ErrorCorrectionLevel, mode, mb) => {

  qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];

  const qr = qrcode(typeNumber || 4, errorConectionLevel || 'M');
  qr.addData(text, mode);
  qr.make();

  return qr.createImgTag();
}
</script>