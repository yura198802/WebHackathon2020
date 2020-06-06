export default {
  name: "Main",
  components: {
    HeadOfLayout: () => import("@/layout/Header/Header"),
    FooterOfLayout: () => import("@/layout/Footer/Footer"),
    CopyrightOfLayout: () => import("@/layout/Copyright/Copyright")
  }
};
