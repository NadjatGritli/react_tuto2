import { useLoaderData, Form } from "react-router-dom";

const CreateDoctor = () => {
    const specialties = useLoaderData();
    return (
        <div className="CreateDoctor">
            <Form method="post" action="/doctors/add">
                <label htmlFor="name">
                    Doctor Name
                </label>
                <input type="text" id="name" name="name" />
                <label htmlFor="url">
                    URL
                </label>
                <input type="text" name="url" id="url" />
                <label htmlFor="specialities">
                    speciality
                </label>
                <select name="speciality" id="speciality">
                    {specialties.map(speciality => (
                        <option value={speciality.name} key={speciality.id}>
                            {speciality.name}
                        </option>
                    ))}
                </select>
                <button type="submit">
                    Add
                </button>
            </Form>
        </div>
    )
}
export default CreateDoctor;