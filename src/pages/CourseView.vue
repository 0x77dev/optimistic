<template>
  <q-page class="flex flex-center">
    <q-card
      v-for="detail in course"
      :key="detail.id"
      style="margin: 15px;"
      class="bg-primary text-white"
    >
      <q-card-section>
        <div class="text-h6">{{ detail.name }}</div>
        <div class="text-subtitle2">ID: <code v-html="detail.id"></code></div>
      </q-card-section>

      <q-card-section>
        <div class="q-pa-md">
          <q-list>
            <q-item
              v-for="module in detail.modules"
              :key="module.id"
              clickable
              v-ripple
              @click="open(module.url, '_blank')"
            >
              <q-item-section side top>
                <q-checkbox disable :value="module.completion > 0" />
              </q-item-section>
              <q-item-section>
                {{ module.name }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <!-- <q-separator dark /> -->

      <!-- <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions> -->
    </q-card>
  </q-page>
</template>

<script>
export default {
  props: ["courseid"],
  name: "PageCourseView",
  data() {
    return {
      course: null
    };
  },
  async beforeMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("wstoken", localStorage.token);
    urlencoded.append("courseid", this.courseid);
    urlencoded.append("wsfunction", "core_course_get_contents");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    const req = await fetch(
      "https://b.optima-osvita.org/webservice/rest/server.php?moodlewsrestformat=json",
      requestOptions
    );

    this.course = await req.json();
  },
  methods: {
    open(...args) {
      window.open(...args);
    }
  }
};
</script>
