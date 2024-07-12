import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
					<span className="navbar-brand mb-1 h1">Lista de contactos</span>
			</Link>
			<div className="ml-auto">
				<Link to="/agregar-contacto">
					<button className="btn btn-primary">Crear Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
