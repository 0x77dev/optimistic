<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          ✍️ Оптимист / Авторизация
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
  }
};
</script>
