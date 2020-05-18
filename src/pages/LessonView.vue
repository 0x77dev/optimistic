<template>
  <q-page class="flex flex-center">
    <q-card
      v-for="content in pages"
      :key="content.id"
      style="margin: 15px;"
      class="bg-primary text-white"
    >
      <q-card-section v-for="pagecontent in content" :key="pagecontent.id">
        <div class="text-h6">{{ pagecontent.page.title }}</div>
        <div class="text-subtitle2">
          ID: <code v-html="pagecontent.page.id"></code>
        </div>
        <br />
        <div class="contents" v-html="pagecontent.page.contents"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { Loading } from "quasar";
export default {
  props: ["lessonid"],
  name: "PageCourseView",
  data() {
    return {
      pages: null
    };
  },
  async beforeMount() {
    Loading.show();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("wstoken", localStorage.token);
    urlencoded.append("lessonid", this.lessonid);
    urlencoded.append("wsfunction", "mod_lesson_get_pages");

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

    this.pages = await req.json();
    Loading.hide();
  },
  methods: {
    open(...args) {
      window.open(...args);
    }
  }
};
</script>
