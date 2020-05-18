const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/course/:courseid",
        component: () => import("pages/CourseView.vue"),
        props: true
      }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "/login", component: () => import("pages/Login.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
