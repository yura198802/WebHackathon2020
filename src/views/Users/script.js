export default {
	name: "users",
	data() {
		return {
			users: [],
			newUser: {
				account: "",
				name: "",
				surname: "",
				middlename: ""
			}
		};
	},
	components: {},
	mounted() {
		this.getUsers();
	},
	methods: {
		getUsers() {
			let vm = this;
			this.$http
				.post("/User/GetUsers")
				.then(function(response) {
					vm.users = response.data;
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
