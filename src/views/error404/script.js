export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ServicesList: () => import("@components/ServicesList/ServicesList")
  }
};
