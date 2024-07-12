import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

function Formulario() {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")//las comillas son el valor inicial

    function handleSubmit(e) {
        e.preventDefault()

       if(!name || !address || !email || !phone) {
        alert("no puedes dejar campos vacios")
        return 
       }
       actions.guardarContacto(name, address, email, phone)
       navigate("/")
    }
    return (
        <div className="Formulario">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="inputValue" value={name} 
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputValue" value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="inputValue" value={phone} 
                        onChange={(e)=>setPhone(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="ainputValue" value={address} 
                        onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </form>
        </div>
    )

};

export default Formulario        