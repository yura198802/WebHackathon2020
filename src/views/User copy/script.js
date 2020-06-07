export default {
	name: "users",
	data() {
		return {
			data: [],
			fileData: {
				title: "",
				file: ""
			},
			aiData1: [],
			aiData2: []
		};
	},
	components: {},
	mounted() {
		this.getDocs();
	},
	methods: {
		getPredicats() {
			let vm = this;
			this.$http
				.post(`/User/GetUserDocument?userId=${vm.$route.params.id}`)
				.then(function(response) {
					vm.aiData1 = response.data;
				})
				.catch(function(error) {});
		},
		getPredicats() {
			let vm = this;
			this.$http
				.post(`/User/GetUserDocument?userId=${vm.$route.params.id}`)
				.then(function(response) {
					vm.aiData1 = response.data;
				})
				.catch(function(error) {});
		},
		getPredicatEntities(query) {
			let vm = this;
			this.$http
				.post(`/User/GetUserDocument?userId=${vm.$route.params.id}`)
				.then(function(response) {
					vm.aiData1 = response.data;
				})
				.catch(function(error) {});
		},
		getInfoNpa(query) {
			let vm = this;
			this.$http
				// .post(`/User/GetUserDocument?userId=${vm.$route.params.id}`)
				.post(`/User/GetUserDocument?userId=1`)
				.then(function(response) {
					vm.data = response.data;
				})
				.catch(function(error) {});
		},
		addDocForUser() {},
		changeDoc(event) {
			let file = event.target.files[0];
			this.fileData.title = file.name;
			this.fileData.file = file;

			console.log(event.target.files[0], this.fileData);
		},
		uploadDoc() {
			let data = new FormData();
			data.append("FileName", this.fileData.title);
			data.append("Files", this.fileData.file);
			let config = {
				header: {
					"Content-Type": "multipart/form-data"
				}
			};
			this.$http
				.post("/DocumentLoader/UploadFile", data, config)
				// .post("/DocumentLoader/UploadFielMoment", data, config)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {});
		}
	}
};
