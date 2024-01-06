import { Link, useLoaderData, useParams } from "react-router-dom";

const DoctorDetails=()=>{
    const {id} = useParams();
    const doctor = useLoaderData();
    const hundle =()=>{
        console.log(doctor)
    }
    return (
        <div className="doctorsListing" >
            name : <b>{doctor.name}</b>
            {/* <p>
                speciality : <b> {doctor.data[1].value} </b>
            </p> */}
        </div>
    )
}
export default DoctorDetails;