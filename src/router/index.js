import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView";
import OurCoffee from "../views/OurCoffee";
import ForYourPleasure from "../views/ForYourPleasure";
import ContactUs from "../views/ContactUs";
import ThankYou from "../views/ThankYou";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HeroView,
  },
  {
    path: "/our-coffee",
    component: OurCoffee,
  },
  {
    path: "/for-your-pleasure",
    component: ForYourPleasure,
  },
  {
    path: "/contact-us",
    component: ContactUs,
  },
  {
    path: "/thank-you",
    component: ThankYou,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
