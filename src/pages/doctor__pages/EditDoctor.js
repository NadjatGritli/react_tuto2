import { useEffect, useState } from "react";
import { useLoaderData, Form } from "react-router-dom";
import { specialitiesLoader } from "../../doctorsdata/specialitiesLoader";

const EditDoctor = () => {
    const doctor = useLoaderData();
    const [ specialties, setSpeciality ] = useState([]);
    useEffect(() => {
        console.log(doctor)
        const fetchData = async () => {
            const loadedSpecialities = await specialitiesLoader();
            setSpeciality(loadedSpecialities);
        };

        fetchData();
    }, [])
    return (
        <div className="CreateDoctor">
            <Form method="post" action={"/doctors/edit/"+doctor.id}>
                <input type="hidden" name="id" value={doctor.id} />
                <label htmlFor="name">
                    Doctor Name
                </label>
                <input type="text" id="name" name="name" value={doctor.name} />
                <label htmlFor="url">
                    URL
                </label>
                <input type="text" name="url" id="url" value={doctor.url} />
                <label htmlFor="specialities">
                    speciality
                </label>
                <select name="speciality" id="speciality">
                    {specialties.map(speciality => (
                        <option value={speciality.name} key={speciality.id} selected={doctor.speciality === speciality.name}>
                            {speciality.name}
                        </option>
                    ))}
                </select>
                <button type="submit">
                    edit
                </button>
            </Form>
        </div>
    )
}
export default EditDoctor;