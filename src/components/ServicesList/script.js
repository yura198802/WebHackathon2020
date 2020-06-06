export default {
  name: "ServicesList",
  data() {
    return {
      listItems: [1, 2, 3, 4]
    };
  },
  mounted() {
    this.getList();
  }, //выполняется перед монтированием компонента в браузер
  methods: {
    getList() {
      console.log(this.listItems);
    },
    goToService() {}
  }
};
