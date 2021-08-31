const URLBACKEND = "https://3001-aqua-rook-p24gybma.ws-us16.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				expires: "",
				token: "",
				nombre: "",
				email: "",
				userId: ""
			},

			message: "",
			userList: [],

			//Deprecated
			routineDetail: {
				// cargar los detalles de la receta/rutina
				nombre: "Rutina de prueba",
				video: "https://www.youtube-nocookie.com/embed/V0x4pf1J9eM",
				detalle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex a elit rhoncus, et maximus felis euismod. Nulla vitae risus a dolor aliquam convallis ac ut augue. Vivamus tristique tellus eu eros venenatis, eu feugiat erat efficitur. Ut eleifend fermentum sapien quis placerat. Donec volutpat quam eros, facilisis porta elit molestie non. Pellentesque quis imperdiet odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sagittis tincidunt pulvinar. Sed feugiat sapien a condimentum commodo. Curabitur egestas sapien nec tellus elementum, eu pulvinar nibh aliquam. Cras pretium volutpat nibh, posuere congue lectus venenatis nec. Vestibulum vitae tortor nulla.",
				img: [
					"https://www.cnet.com/a/img/goKFafzZsLAsQ2ff-rGuPN1rNGI=/940x0/2020/10/23/92eb33b0-0b3b-4de6-b95e-890201421ad8/gettyimages-1224889619.jpg",
					"https://i.blogs.es/8bd348/2560_3000/450_1000.jpeg",
					"https://cdn.shopify.com/s/files/1/1093/4724/articles/Stretching_Para_Mejorar_La_Movilidad_y_El_Rendimiento_En_Crossfit_800x.jpg",
					"https://mejorconsalud.as.com/fitness/wp-content/uploads/2018/12/jumping-jacks-saltos-tijera-al-aire-libre.jpg"
				]
			},
			//Deprecated
			recipeDetail: {
				nombre: "Receta de prueba",
				video: "https://www.youtube-nocookie.com/embed/PvJ2l2yEftM",
				detalle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex a elit rhoncus, et maximus felis euismod. Nulla vitae risus a dolor aliquam convallis ac ut augue. Vivamus tristique tellus eu eros venenatis, eu feugiat erat efficitur. Ut eleifend fermentum sapien quis placerat. Donec volutpat quam eros, facilisis porta elit molestie non. Pellentesque quis imperdiet odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sagittis tincidunt pulvinar. Sed feugiat sapien a condimentum commodo. Curabitur egestas sapien nec tellus elementum, eu pulvinar nibh aliquam. Cras pretium volutpat nibh, posuere congue lectus venenatis nec. Vestibulum vitae tortor nulla.",
				img: [
					"https://i.blogs.es/aa8690/aguacate_huevos/1366_2000.jpg",
					"https://i.dietdoctor.com/es/wp-content/uploads/2021/04/Italian-turkey-meatballs-with-zoodles-h-scaled-1.jpeg",
					"https://i.dietdoctor.com/es/wp-content/uploads/2021/03/Keto-sheet-pan-chicken-h.jpg"
				]
			},
			// Deprecated
			desafioDetail: [
				{
					descripcion: "Descripcion larga del desafio 2",
					"dias del desafio": [],
					feat1: "feature 1",
					feat2: "feature 2",
					feat3: "feature 3",
					id: 2,
					nombreDesafio: "Desafio 2",
					photoURL:
						"http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/12/knowledge-10520101920.jpg"
				}
			],

			setName: {},

			activeDesafio: {},

			desafiosList: [],

			isLogged: false,
			messageLogged: "",

			showOnboard: true
		},
		actions: {
			// setDias: () => {
			// 	console.log("se ha activado actions.setDias()");
			// },

			activeDesafio: detalleDesafio => {
				let duracion = detalleDesafio["dias del desafio"].length;
				detalleDesafio.duracion = duracion;
				setStore({ activeDesafio: detalleDesafio });
			},

			listaDesafios: () => {
				fetch(URLBACKEND + "/desafios", {
					method: "GET"
				})
					.then(res => res.json())
					.then(json => {
						console.log("response from backend", json.desafios);
						setStore({ desafiosList: json.desafios });
					});
			},

			setChallenge: history => {
				const store = getStore();
				let toDo = [];
				let extras = [];
				let userID = JSON.parse(localStorage.getItem("user")).id;
				let duracion = store.activeDesafio.duracion;
				let desafio = store.activeDesafio.nombreDesafio;
				let dias = store.activeDesafio["dias del desafio"];

				dias.map((item, index) => {
					let dailyTodo = item["to-dos del dia"];
					let dailyExtras = item["receta/rutina"];

					dailyTodo.map((item, index) => {
						item.userID = userID;
						item.done = false;
						toDo.push(item);
					});

					dailyExtras.map((item, index) => {
						item.userID = userID;
						extras.push(item);
					});
				});

				let objeto = {
					userID: userID,
					desafio: desafio,
					duracion: duracion,
					"to-do del usuario": toDo,
					"extras del usuario": extras
				};

				let localUser = {
					desafio: desafio,
					duracion: duracion,
					"to-do del usuario": toDo,
					"extras del usuario": extras
				};

				fetch(URLBACKEND + "/setchallenge", {
					method: "PUT",
					body: JSON.stringify(objeto),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--Data setChallenge--", data);

						// localStorage.setItem("token", data.token);
						localStorage.setItem("user", JSON.stringify(data.user));
						localStorage.setItem("isLogged", true);

						history.push("/dashboard");
					});
				// .then(data => {
				// 	if (typeof Storage !== "undefined") {
				// 		localStorage.setItem("user", JSON.stringify(data.user));
				// 		localStorage.setItem("isLogged", true);

				// 		history.push("/dashboard");
				// 	} else {
				// 		// LocalStorage no soportado en este navegador
				// 	}
				// })

				// history.push("/dashboard");
			},

			// Use getActions to call a function within a fuction
			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				// busca traer el contenido de token del backend
				const userLocal = JSON.parse(localStorage.getItem("user"));
				const isLoggedLocal = JSON.parse(localStorage.getItem("isLogged"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					},
					isLogged: isLoggedLocal
				});
				console.log("-->", tokenLocal);
				console.log("-->", JSON.stringify(userLocal));
			},

			setLogin: (user, history) => {
				// el user recibido tiene email y pass
				fetch(URLBACKEND + "/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					// backend devuelve user serializado (datos de la tabla de user)
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						if (data.hasOwnProperty("token")) {
							const dataUser = {
								expires: data.expires,
								token: data.token,
								nombre: data.nombre,
								email: data.user.email,
								userId: data.userId
							};
							setStore({ user: { ...dataUser }, isLogged: true });

							console.log("--USER--", dataUser);

							if (typeof Storage !== "undefined") {
								localStorage.setItem("token", data.token);
								localStorage.setItem("user", JSON.stringify(data.user));
								localStorage.setItem("isLogged", true);

								history.push("/dashboard");
							} else {
								// LocalStorage no soportado en este navegador
							}
						} else {
							setStore({ message: data.msg });
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			setRegister: (user, history) => {
				fetch(URLBACKEND + "/register", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ messageLogged: data.msg });

						const userLogin = {
							email: user.email,
							password: user.password
						};

						getActions().setLogin(userLogin, history);
					});
			},

			setLogout: history => {
				localStorage.clear();
				setStore({
					user: {
						expires: "",
						token: "",
						nombre: "",
						email: "",
						userId: ""
					},
					isLogged: false
				});
				history.push("/");
			},

			setRecuperarPassword: user => {
				fetch(URLBACKEND + "/solicitudrecuperacion", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
					//AQUI RECIBO MI URL EN MI .THEN
					//GUARDAR EN EL STORE EN UNA VARIABLE EXCLUSIVA PARA ELLO, PARA PODER SACARLO COMO DATO Y ENVIARLO EN EL MAIL
				});
			},
			setNuevaPassword: user => {
				fetch(URLBACKEND + "/nueva_password", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				});
			},

			setShowOnboard: status => {
				const store = getStore();
				console.log("triggered action: setShowOnboard ", status);
				setStore({ showOnboard: status });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getRoutineDetail: () => {
				//usar esta función para traer los detalles de la receta/rutina
				const store = getStore();
				const URL = "URL";
				const OBJCONFIG = {
					method: "GET/POST/PUT/DELETE",
					headers: {
						"Content-type": "application/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //de texto plano a Json
					.then(data => setStore({ routineDetail: data })); //guardo el detalle de la receta/rutina en el store
			}
		}
	};
};

export default getState;
