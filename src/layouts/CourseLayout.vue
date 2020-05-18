<template>
  <q-layout view="lHh Lpr lFf">
    <q-header color="black" elevated>
      <q-toolbar>
        <q-toolbar-title>
          ✍️ Оптимист
        </q-toolbar-title>
        <div>
          <q-avatar size="md">
            <img :src="info.userpictureurl" />
          </q-avatar>
          {{ " " + info.fullname + " " }}
        </div>
        <q-toggle color="yellow" dark v-model="darkMode"></q-toggle>
        {{ !darkMode ? "☀️" : "🌒" }}
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
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
  }
};
</script>
