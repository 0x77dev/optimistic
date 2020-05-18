<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          ✍️ Оптимист / Авторизация
        </q-toolbar-title>
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
  }
};
</script>
