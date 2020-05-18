<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">Логин</h5>
      </div>
      <div class="row">
        <q-card class="q-pa-lg shadow-4 radius">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                v-model="baseurl"
                :color="darkMode ? 'white' : 'primary'"
                type="url"
                label="🕸 Базовый путь (без / в конце)"
              />
              <q-input
                square
                v-model="email"
                :color="darkMode ? 'white' : 'primary'"
                type="email"
                label="📬 Почта"
              />
              <q-input
                square
                :color="darkMode ? 'white' : 'primary'"
                v-model="password"
                type="password"
                label="🔐 Пароль"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              @click="login"
              :color="loginColor"
              class="full-width"
              label="Войти"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              {{ notice }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Dark } from "quasar";
export default {
  name: "PageLogin",
  data() {
    return {
      loginColor: "primary",
      notice:
        "🔐 Пароль не передается третим лицам🚶‍♀️, все взаимодействия проводятся напрямую с серверами оптимы 🤝.",
      email: "",
      password: "",
      baseurl: localStorage.baseurl
        ? localStorage.baseurl
        : "https://b.optima-osvita.org"
    };
  },
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
  watch: {
    baseurl(value) {
      localStorage.baseurl = value;
    }
  },
  beforeMount() {
    localStorage.baseurl = localStorage.baseurl
      ? localStorage.baseurl
      : "https://b.optima-osvita.org";
  },
  methods: {
    async login() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("username", this.email);
      urlencoded.append("password", this.password);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
      };

      const req = await fetch(
        localStorage.baseurl + "/login/token.php?service=moodle_mobile_app",
        requestOptions
      );

      const resp = await req.json();
      if (resp.error) {
        this.loginColor = "red";
        this.notice = resp.error;
      } else {
        localStorage.token = resp.token;
        localStorage.privatetoken = resp.privatetoken;
        this.loginColor = "green";
        this.notice = "Авторизация прошла успешно 🥳";
        await new Promise(res => setTimeout(res, 750));
        this.$router.replace("/");
      }
    }
  }
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
