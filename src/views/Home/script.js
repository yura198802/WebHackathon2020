export default {
  name: "Home",
  components: {
    Slider: () => import("@/components/Slider/Slider.vue"),
    About: () => import("@/components/About/About.vue"),
    Services: () => import("@/components/Services/Services.vue"),
    Partners: () => import("@/components/Partners/Partners.vue"),
    Products: () => import("@/components/Products/Products.vue"),
    Why: () => import("@/components/Why/Why.vue"),
    Tags: () => import("@/components/Tags/Tags.vue"),
    Tsennosti: () => import("@/components/Tsennosti/Tsennosti.vue")
  }
};
