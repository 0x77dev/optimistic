<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-primary text-white radius">
        <b
          >Рад тебя видеть здесь 🙂,<br />
          я в режиме превью,<br
        /></b>
        пока что не чего не умею кроме того что ты видишь...
        <br />
        <b>Но я научусь и смогу даже проходить уроки за тебя!</b>
      </q-banner>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-primary text-white radius">
        Это приложение не является разработкой
        <a style="color: white" target="_blank" href="https://optima.school"
          >Optima School</a
        >, <br />
        по вопросам обучения обращайтесь к
        <a style="color: white" target="_blank" href="https://optima.school"
          >Optima School</a
        >
      </q-banner>
    </div>
    <div v-if="courses !== null" class="q-pa-md">
      <q-banner
        v-if="courses.error !== null"
        class="bg-primary text-white radius"
      >
        <h5>Доступные курсы</h5>
        <br />
        <router-link
          v-for="course in courses"
          :key="course.id"
          style="text-decoration: none;"
          :to="'/course/' + course.id"
        >
          <q-chip icon="bookmark">
            {{ course.displayname }}
          </q-chip>
        </router-link>
      </q-banner>
    </div>
    <!-- <img alt="Логотип" src="~assets/logo-full.svg" /> -->
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      courses: null
    };
  },
  async beforeMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("wstoken", localStorage.token);
    urlencoded.append("userid", localStorage.userid);
    urlencoded.append("wsfunction", "core_enrol_get_users_courses");

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

    this.courses = await req.json();
  }
};
</script>
