<template>
  <img
    class="avatar-container avatar-img"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150
    },
  },
};
</script>

<style>
.avatar-img {
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>