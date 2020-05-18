<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { Notify } from "quasar";
export default {
  name: "App",
  mounted() {
    // window["isUpdateAvailable"].then(isAvailable => {
    //   if (isAvailable) {
    //     Notify.create("Доступно обновление перезайди 😉");
    //   }
    // });
  }
};
</script>
