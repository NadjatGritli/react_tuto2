import { Link, useLoaderData } from "react-router-dom";

const Doctors=()=>{
    const doctors = useLoaderData();
    return (
        <div className="doctorsListing">
            {doctors.map(doctor=>(
                <div className="docItm" key={doctor.id}>
                    <Link to={doctor.id.toString()}>
                        {doctor.name}
                        <button >delete</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Doctors;