<template>
  <div class="" style="">
    <div class="grid cover">
      <div class="col-12 md:col-4 lg:col-4"></div>
      <div class="col-12 md:col-4 lg:col-4 loginDiv">
        <div class="col centerColumn">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestLayout",
};
</script>

<style scoped></style>
