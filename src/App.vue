<template>
  <div id="q-app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Notify } from "quasar";
import RPC from "discord-rpc";
export default {
  name: "App",
  mounted() {
    const clientId = "712033097323118592";
    const scopes = ["rpc", "rpc.api", "messages.read"];

    const client = new RPC.Client({ transport: "websocket" });

    client.on("ready", () => {
      console.log("Logged in as", client.application.name);
      console.log("Authed for user", client.user.username);
    });

    // Log in to RPC with client id
    client.login({ clientId, scopes });
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
