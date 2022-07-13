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

<style scoped>
.grid {
  margin: 0;
}
.cover {
  background: #eee; /*#081229;*/
}
.loginDiv {
  min-height: 100vh;
}
.centerColumn {
  margin-top: 15vh;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.87);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 15px;
}
</style>
