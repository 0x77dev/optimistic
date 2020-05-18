<template>
  <div id="q-app">
    <transition name="fade">
      <router-view />
    </transition>
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
<style>
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
