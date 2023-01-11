<template>
  <div class="error">
    <span class="text">{{ error }}</span>
    <img src="@/assets/error.gif" alt="error" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String
    }
  }
}
</script>

<style scoped>
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
</style>