<template>
  <q-layout view="lHh Lpr lFf">
    <q-header color="black" elevated>
      <q-toolbar>
        <q-btn
          @click="$router.go(-1)"
          flat
          round
          dense
          icon="keyboard_arrow_left"
        />
        <q-toolbar-title style="text-align: center;margin-left: 5%;">
          ✍️ 📚 🎓
        </q-toolbar-title>
        <q-toggle
          :icon="!darkMode ? '🌒' : '☀️'"
          color="black"
          dark
          v-model="darkMode"
        ></q-toggle>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-chip color="red">Beta</q-chip>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>
<script>
import { Dark } from "quasar";
export default {
  name: "MainLayout",
  computed: {
    darkMode: {
      get() {
        return Dark.isActive;
      },
      set(value) {
        Dark.set(value);
      }
    }
  },
  data() {
    return {
      info: null
    };
  },
  async beforeMount() {
    this.$q.loading.show();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("wstoken", localStorage.token);
    urlencoded.append("wsfunction", "core_webservice_get_site_info");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    const req = await fetch(
      localStorage.baseurl +
        "/webservice/rest/server.php?moodlewsrestformat=json",
      requestOptions
    );

    this.info = await req.json();
    localStorage.userid = this.info.userid;
    this.$q.loading.hide();
  }
};
</script>
<style>
#q-app
  > div
  > header
  > div.q-toolbar.row.no-wrap.items-center
  > div
  > div
  > div.q-toggle__thumb.absolute.flex.flex-center.no-wrap
  > i {
  opacity: 1;
}
</style>
