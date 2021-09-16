import { element } from "prop-types";

const URLBACKEND = "https://3001-bronze-impala-vib65y6n.ws-us15.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBACKEND: "https://3001-bronze-impala-vib65y6n.ws-us15.gitpod.io",

			user: {
				expires: "",
				token: "",
				nombre: "",
				email: "",
				userId: ""
			},

			message: "",

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

			// Deprecated?
			setName: {},

			userList: [],

			activeDia: "",

			todoList: [],

			activeDesafio: {},

			desafiosList: [],

			isLogged: false,

			messageLogged: "",

			messageChallenge: "",

			showOnboard: true,

			loadingList: false,

			globalstatus: "",

			loadingDesafios: true,

			error: ""
		},
		actions: {
			borrarTarea: (idtask, iduser) => {
				const store = getStore();
				let elementID = store.todoList.find(item => item.id === idtask).id;
				console.log("el id de la tarea es", elementID);

				console.log("el id del user es ", iduser);

				let payload = {
					taskID: elementID,
					done: true
				};

				console.log("payload", payload);
				setStore({ todoList: [] });
				fetch(URLBACKEND + "/todousuario", {
					method: "PUT",
					body: JSON.stringify(payload),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--backresp--", data);
						getActions().obtenerTareas(iduser);
					});
			},

			obtenerTareas: id => {
				// llamar a la api
				setStore({ todoList: [], loadingList: true });
				fetch(URLBACKEND + "/todousuario/" + id, {
					method: "GET",
					// body: JSON.stringify(id),
					headers: { "content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						const store = getStore();
						data.forEach(element => {
							store.todoList.push(element);
							store.loadingList = false;
						});
						setStore(store);
					});
				// filtrar nuestras tareas?
			},

			nuevaTarea: (titulo, dia) => {
				const store = getStore();
				let userID = JSON.parse(localStorage.getItem("user")).id;
				// let userID = store.user.user.id;

				let payload = {
					actividad: titulo,
					dia: dia,
					uid: userID
				};

				setStore({ todoList: [] });
				fetch(URLBACKEND + "/todousuario", {
					method: "POST",
					body: JSON.stringify(payload),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data_bknd--", data);
						getActions().obtenerTareas(userID);
					});

				store.todoList.push({ title: titulo, done: false });
				setStore(store);

				// TODO: enviar nueva tarea a la api
			},

			activeDia: dia => {
				setStore({ activeDia: dia });
			},

			activeDesafio: detalleDesafio => {
				let duracion = detalleDesafio["dias del desafio"].length;
				detalleDesafio.duracion = duracion;
				setStore({ activeDesafio: detalleDesafio });
			},

			loadingDesafios: () => {
				setStore({ loadingDesafios: true });
			},

			listaDesafios: () => {
				// tomar el store y extraer el JWT
				// const store = getStore();
				// let jwt = store.user.token;

				fetch(URLBACKEND + "/desafios", {
					method: "GET"
					// enviar el JWT en el header con la estrucutra de abajo
					// headers: { Authorization: "Bearer " + jwt }
				})
					.then(res => res.json())
					.then(json => {
						console.log("response from backend", json.desafios);
						setStore({ desafiosList: json.desafios });
						setStore({ loadingDesafios: false });
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
					// aca tendria que decirle: let numDia = item.numeroDia
					let numDia = item["numeroDia"];
					console.log("el numero del dia es", numDia);

					let dailyTodo = item["to-dos del dia"];
					let dailyExtras = item["receta/rutina"];

					dailyTodo.map((item, index) => {
						item.userID = userID;
						item.done = false;
						item.idDia = numDia;
						// aca deberia setear el item.idDia = al let numDia que fije en la linea 189
						toDo.push(item);
					});

					dailyExtras.map((item, index) => {
						item.userID = userID;
						item.dia = numDia;
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

				// console.log("el objeto a enviar es", objeto);

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
			newChallenge: () => {
				fetch(URLBACKEND + "/newchallenge", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ messageChallenge: data.msg });
					});
			},
			setDesafio: (desafios, history) => {
				fetch(URLBACKEND + "/desafios", {
					method: "POST",
					body: JSON.stringify(desafios),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ messageChallenge: data.msg });
						history.push("/dashboard");
					});
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
							setStore({ user: { ...dataUser }, isLogged: true, error: "" });

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
							setStore({ error: "Email / contraseña incorrectos" });
						}
					});
				// .catch(
				// 	// error => setStore({ error: "Login Failed" }),
				// 	// console.log("fetech error catch: login failed"),
				// 	// history.push("/")
				// );
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
					isLogged: false,
					userList: [],
					activeDia: "",
					todoList: [],
					activeDesafio: {},
					desafiosList: []
				});
				history.push("/");
			},

			setRecuperarPassword: user => {
				fetch(URLBACKEND + "/solicitudrecuperacion", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
					//la accion deberia ser para hacer el llamado a la API y q ejecute el endpoint a traves del mail
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
					});
			},

			setNuevaPassword: (user, history) => {
				console.log("!", user);
				fetch(URLBACKEND + "/nueva_password", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("--data--", data);
						setStore({ messageLogged: data.msg });
						history.push("/");
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
			},

			setLoggingIn: status => {
				setStore({ globalstatus: status });
			},

			resetStatus: () => {
				setStore({ globalstatus: "" });
			},

			resetError: () => {
				setStore({ error: "" });
			}
		}
	};
};

export default getState;
