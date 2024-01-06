import { useRouteError } from "react-router-dom"

const DoctorError = ()=>{
    const error = useRouteError();
    return(
        <div>
            <h1>Something went wrong</h1>
            <p>
                {error.message}
            </p>
        </div>
    )
}
export default DoctorError;