<template>
  <div>
    <div style="text-align: center">
      <img src="../assets/skiptheline_text_dark.png" alt="" />
    </div>
    <div>
      <div style="margin-bottom: 10px">
        <label for="username">Email Address</label>
        <InputText
          id="username"
          class="p-inputtext-sm"
          type="username"
          aria-describedby="username-help"
          style="width: 100%"
        />
        <!--        <small id="username-help">Enter your username </small>-->
      </div>
      <div>
        <label for="password">Password</label>
        <InputText
          id="password"
          class="p-inputtext-sm"
          type="password"
          aria-describedby="password-help"
          style="width: 100%"
        />
        <!--        <small id="password-help">Enter your password.</small>-->
      </div>
      <br />
      <div style="text-align: right">
        <Button
          style="margin-right: 10px; color: #333; font-weight: 600"
          label="I don't have an account"
          class="p-button-sm p-button-outline p-button-text"
        />
        <Button label="Login" class="p-button-raised p-button-sm" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    const value1 = ref<unknown>();
    return { value1 };
  },
};
</script>

<style scoped>
img {
  max-height: 300px;
  max-width: 300px;
  width: auto;
  height: auto;
}
.p-inputtext {
  display: block;
  margin-bottom: 0.5rem;
}
label {
  font-size: small;
}
.p-inputtext-sm {
  margin-bottom: -3px;
}
</style>
