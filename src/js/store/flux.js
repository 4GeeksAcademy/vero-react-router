const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaDeContactos: [],
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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//guardarContactos	

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtenerListaDeContactos: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Vero519/contacts', {
					method: 'GET',
					headers: { "Content-Type": "application/json" }
				})
					//.then((respose) => respose.json())
					.then((response) => {
						if (response.status == 404) {
							// crearAgenda()
							getActions().crearAgenda()
						}
						return response.json()
					})
					.then((data) => {
						if (data) {
							// setStore({propiedad:valor})
							setStore({ listaDeContactos: data.contacts })
						}
					})
					.catch((error) => console.log(error))
			},
			// 	//Crear Contacto
			crearAgenda: () => {

				fetch('https://playground.4geeks.com/contact/agendas/Vero519', {
					method: 'POST',
					headers: { "Content-Type": "application/json" }
				})
					.then((respose) => {
						return respose.json()
					})
					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},
			// 	//GUARDAR CONTACTO
			guardarContacto: (name, address, email, phone) => {
				const store = getStore()

				fetch('https://playground.4geeks.com/contact/agendas/Vero519/contacts', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					})

				})

					.then((response) => {
						if (response.ok) {
							return response.json()
						}
						return null
					})
					.then((data) => {
						if (data) {
							// setStore({propiedad:valor})
							setStore({ listaDeContactos: store.listaDeContactos.concat(data) })
						}
					})
					.catch((error) => console.log(error))
			}


		}
	}
};

export default getState
