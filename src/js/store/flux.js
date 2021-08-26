const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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

			desafiosList: [],

			isLogged: false,

			showOnboard: true
		},
		actions: {
			listaDesafios: () => {
				fetch("https://3001-white-leopard-omsrf9vd.ws-us16.gitpod.io/desafios", {
					method: "GET"
				})
					.then(res => res.json())
					.then(json => {
						console.log("response from backend", json.desafios);
						setStore({ desafiosList: json.desafios });
					});
			},

			setChallenge: id => {
				return console.log("se inscribira el desafio con id ", id);
			},

			// Use getActions to call a function within a fuction
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
