import React from "react";

function Card({name,address,phone,email}) {
    return(
        <div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{phone}</li>
                    <i class="fa-duotone fa-location-dot"></i>
					<li className="list-group-item">{email}</li>
                    <li className="list-group-item">{address}</li>
					
					
				</ul>
			</div>
		</div>
    )
    
};
export default Card