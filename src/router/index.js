import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  /*自动进入某页*/
  {
    path: "*",
    redirect: "/index/home-page"
  },
  {
    path: "/index",
    component: () => import("../views/Layout/Layout.vue"),
    children: [
      {
        path: "home-page",
        component: () => import("../views/HomePage/HomePage.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "statistic",
        component: () => import("../views/Data/Data.vue"),
        meta: {
          title: "统计"
        }
      },
      {
        path: "mine",
        component: () => import("../views/Mine/Mine.vue"),
        meta: {
          title: "个人中心"
        }
      }
    ]
  },
  {
    path: "/air-condition",
    component: () => import("../views/Manipulation/AirCondition.vue"),
    meta: {
      title: "空调操控"
    }
  },
  {
    path: "/lighting-control",
    component: () => import("../views/LightingControl/LightingControl.vue"),
    meta: {
      title: "灯光控制"
    }
  },
  {
    path: "/sound-box",
    component: () => import("../views/SoundBox/SoundBox.vue"),
    meta: {
      title: "音响"
    }
  }
];

const router = new VueRouter({
  routes
  // routes // (缩写) 相当于 routes: routes
});

//根据路由元信息改变页面标题
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
