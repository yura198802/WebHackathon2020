export default {
  name: "App",
  data() {
    return {
      scrollY: null,
      menu: ""
    };
  },
  methods: {
    calculateScrollY() {
      // console.log(window.scrollY)
      this.scrollY = window.scrollY;
    }
  },
  mounted() {
    this.calculateScrollY;
    window.addEventListener("scroll", this.calculateScrollY);
    this.menu = this.$router.options.routes;
  }
};
