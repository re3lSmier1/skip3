<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const default_layout = "default";
export default defineComponent({
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
});
</script>

<style></style>
