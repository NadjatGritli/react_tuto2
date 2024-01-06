import { useLoaderData } from "react-router-dom";

const SpecialitiesList = () => {
    const specialties = useLoaderData();
    return (
        <div className="specialitiesContainer">
            <h1>
                {specialties.length}
            </h1>
            {specialties.map(speciality => (
                <div className="SpecialitiesContainer" key={speciality.id}>
                    <p>speciality name : {speciality.name} </p>
                </div>
            ))}

        </div>
    )
}
export default SpecialitiesList;