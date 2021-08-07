const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			challengeDetails: [
				{
					// cargar los detalles del desafío
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

			getChallenges: () => {
				//usar esta función para traer los detalles del desafío
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
					.then(data => setStore({ challengeDetails: data })); //guardo el detalle del desafio en el store
			}
		}
	};
};

export default getState;
