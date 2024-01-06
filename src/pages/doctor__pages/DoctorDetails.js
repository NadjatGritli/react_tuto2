import { Link, useLoaderData, useParams, Form } from "react-router-dom";
import { PencilOutline, TrashOutline } from 'react-ionicons'

const DoctorDetails = () => {
    const { id } = useParams();
    const doctor = useLoaderData();
    const hundle = () => {
        console.log(doctor)
    }
    return (
        <div className="doctorsListingElemnt" >
            name : <b>{doctor.name}</b>
            <p>
                speciality : <b> {doctor.speciality} </b>
            </p>
            <div className="docTools">
                <Link to={"/doctors/edit/" + doctor.id} className="editDoc">
                    <PencilOutline
                        color={'#00000'}
                        title={'edit'}
                        height="20px"
                        width="20px"
                    />
                </Link>
                <Form method="Delete" action="/doctors">
                    <input type="hidden" name="id" value={doctor.id} />
                    <button  className="editDoc" type="submit">
                        <TrashOutline
                            color={'#00000'}
                            title={'edit'}
                            height="20px"
                            width="20px"
                        />
                    </button>
                </Form>
            </div>
        </div>
    )
}
export default DoctorDetails;