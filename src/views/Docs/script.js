export default {
	name: "users",
	data() {
		return {
			docs: []
		};
	},
	components: {},
	mounted() {
		this.getDocs();
	},
	methods: {
		getDocs() {
			let vm = this;
			this.$http
				.post("/User/GetDocumentLoader")
				.then(function(response) {
					vm.docs = response.data;
				})
				.catch(function(error) {});
		},
		addUser() {
			let vm = this;
			this.$http
				.post("/User/AddUser", {
					account: vm.account,
					name: vm.name,
					surname: vm.surname,
					middlename: vm.middlename,
					isDeleted: false
				})
				.then(function(response) {
					vm.getUsers();
				})
				.catch(function(error) {});
		}
	}
};
