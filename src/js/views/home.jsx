// import React, { useState, useEffect } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// const Home = () => {
// 	//declaracion de estados
// 	let [contacto, setContacto] = useState("")
// 	let [listaDeContactos, setListaDeContactos] = useState([])


// 	//GUARDAR CONTACTO
// 	function guardarContactos() {

// 		fetch('https://playground.4geeks.com/contact/agendas/Vero519', {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				"slug": contacto,
// 			})

// 		})

// 			.then((respose) => { return respose.json() })
// 			.then((data) => console.log(data))
// 			.catch((error) => console.log(error))
// 	}

// 	function obtenerListaDeContactos() {
// 		fetch('https://playground.4geeks.com/contact/agendas/Vero519/contacts', {
// 			method: 'GET',
// 			headers: { "Content-Type": "application/json" }
// 		})
// 			//.then((respose) => respose.json())
// 			.then((response) => {
//                 if(response.status == 404) {
//                     crearAgenda()
// 					return false
//                 }
// 				return response.json()
//             })
// 			.then((data) => {
// 				if(data){
// 					setListaDeContactos(data.contacts)
// 				}
// 			})
// 			.catch((error) => console.log(error))
// 	}

// 	 function eliminarContactoDesdeApi(id) {
// 	fetch(`https://playground.4geeks.com/contact/agendas/Vero519/contacts/id`, {
// 	 method: 'DELETE',
// 	headers: {
// 	 "Content-Type": "application/json"
// 	}

// 	})

// 	.then((respose) => respose.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error))

// 	 }

// 	useEffect(() => {
// 		obtenerListaDeContactos()
// 	}, [])

// 	return Card (
// 		<div className="container">
// 			<div className="card" style={{ width: "18rem" }}>
// 				<img src="..." className="card-img-top" alt="..." />
// 				<div className="card-body">
// 					<h5 className="card-title">Card title</h5>
// 					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// 				</div>
// 				<ul className="list-group list-group-flush">
// 					<li className="list-group-item">An item</li>
// 					<li className="list-group-item">A second item</li>
// 					<li className="list-group-item">A third item</li>
// 				</ul>
// 				<div className="card-body">
// 					<a href="#" className="card-link">Card link</a>
// 					<a href="#" className="card-link">Another link</a>
// 				</div>
// 			</div>
// 		</div>
// 	)
// 	};
		
	



// export default Home;








