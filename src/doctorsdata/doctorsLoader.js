import { redirect } from "react-router-dom";

export const doctorsData = async () => {
    const res = await fetch('http://localhost:8000/doctors');
    if (!res.ok) {
        throw Error('Could not fetch !!! ');
    }
    return res.json();
}

export const doctorDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:8000/doctors/' + id);
    if (!res.ok) {
        throw Error('did not found a doctor with id : ' + id);
    }
    return res.json();
}
export const addDoctor = async ({ request }) => {
    const data = await request.formData();
    const newDoctor = {
        name: data.get('name'),
        url: data.get('url'),
        speciality: data.get('speciality'),
    }
    fetch("http://localhost:8000/doctors",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(newDoctor)
    }).then(()=>{
        return redirect("/doctors");
    }).catch((err)=>{
        console.log(err)
    })
    return null
}