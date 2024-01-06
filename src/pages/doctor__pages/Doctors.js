import { Link, useLoaderData, Form } from "react-router-dom";

const Doctors = () => {
    const doctors = useLoaderData();
    return (
        <div className="doctorsListing">
            {doctors.map(doctor => (
                <div className="docItm" key={doctor.id}>
                    <Link to={doctor.id.toString()}>
                        {doctor.name}
                    </Link>
                    
                </div>
            ))}
        </div>
    )
}
export default Doctors;