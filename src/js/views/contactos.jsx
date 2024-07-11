import React, {useContext} from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";


//Agregar contactos
function Contactos() {
    const {store, action} = useContext(Context)
console.log(store.listaDeContactos)
    return (
        <div className="container mt-3"> 
            <Card name={"Veronica"} address={"mi casa"} email={"voviedo6@gmail.com"} phone={"1111"} />

        </div>
    )
}

export default Contactos