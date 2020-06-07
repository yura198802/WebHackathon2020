import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			name: "Главная",
			path: "/home",
			component: () => import("@/views/Home/Home")
		},
		{
			path: "/demo",
			redirect: "/demo/users"
		},
		{
			name: "Демо - пользователи",
			path: "/demo/users",
			component: () => import("@/views/Users/Users")
		},
		{
			name: "Демо - документы",
			path: "/demo/docs",
			component: () => import("@/views/Docs/Docs")
		},
		{
			path: "/demo/users/:id",
			component: () => import("@/views/User/User")
		}
		// {
		// 	name: "Главная",
		// 	path: "/home",
		// 	component: () => import("@/views/Home/Home")
		// },
		// {
		// 	name: "Главная",
		// 	path: "/home",
		// 	component: () => import("@/views/Home/Home")
		// },
		// {
		// 	name: "Главная",
		// 	path: "/home",
		// 	component: () => import("@/views/Home/Home")
		// },

		// {
		// 	path: "/demo",
		// 	redirect: "/demo/users",
		// 	component: () => import("@/views/Users/Users"),
		// 	name: "Демо",
		// 	children: [
		// 		{
		// 			name: "Выберите пользователя",
		// 			path: "users",
		// 			component: () => import("@/views/Users/Users")
		// 		},
		// 		{
		// 			name: "Пользователь",
		// 			path: "users/:user",
		// 			component: () => import("@/views/error404/error404")
		// 		},
		// 		{
		// 			name: "Сформированный документ",
		// 			path: "users/:user/docs",
		// 			component: () => import("@/views/error404/error404")
		// 		},
		// 		{
		// 			name: "Новый документ",
		// 			path: "users/:user/docs/add",
		// 			component: () => import("@/views/error404/error404")
		// 		},
		// 		{
		// 			name: "Добавить пользователя",
		// 			path: "users/add",
		// 			component: () => import("@/views/error404/error404")
		// 		}
		// 	]
		// }
	]
});
