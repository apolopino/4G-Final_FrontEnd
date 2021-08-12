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

			setName: {},

			desafiosDisponibles: [
				{
					image: "https://garajedelrock.com/wp-content/uploads/2020/05/serj-tankian.jpg",
					titulo: "Desafio 1",
					content: "Desafio para ordenar tu dia y tener tiempo para la familia",
					buttonText: "Me animo!",
					url: "/detalle",
					detalleDesafio: "URL-del-componente"
				},

				{
					image:
						"https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg",
					titulo: "Desafio 2",
					content: "Desafío vida sana: come sano, ejercítate y descubre sus beneficios",
					buttonText: "Con todo!",
					url: "/detalle",
					detalleDesafio: "URL-del-componente"
				},

				{
					image: "https://interrailero.com/wp-content/uploads/2019/08/que-hacer-en-santiago-de-chile.jpg",
					titulo: "Desafio 3",
					content: "Desafío desconexión: mindfullness y relajación todos los días",
					buttonText: "Estar zen",
					url: "/detalle",
					detalleDesafio: "URL-del-componente"
				},

				{
					image:
						"https://s03.s3c.es/imag/_v0/770x420/2/5/5/490x_espacio-latinoamerica-america-latina-noche.jpg",
					titulo: "Desafio 4",
					content: "El cabronazo de los desafíos, saldrás vivo?",
					buttonText: "A morir!",
					url: "/detalle",
					detalleDesafio: "URL-del-componente"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
