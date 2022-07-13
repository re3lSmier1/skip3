<template>
  <div>
    <div style="text-align: center">
      <img class="logo" src="../assets/skiptheline_text_dark.png" alt="" />
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
        <Button
          label="Login"
          class="p-button-raised p-button-sm"
          style="background-color: #081229; border: none"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const value1 = ref<unknown>();
    return { value1 };
  },
});
</script>

<style scoped></style>
