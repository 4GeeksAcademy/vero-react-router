import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";


//Agregar contactos
function Contactos() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerListaDeContactos()
    }, [])
    return (
        <div className="container mt-3">
            {store.listaDeContactos.map((contact, index) => (
                <Card
                    key={index}
                    id={contact.id}
                    name={contact.name}
                    address={contact.address}
                    email={contact.email}
                    phone={contact.phone} />
            ))}

        </div>
    )
}

export default Contactos