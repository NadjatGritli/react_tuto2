export const specialitiesLoader = async () => {
    const res = await fetch("http://localhost:8000/specialties")
    const toreturn = res.json()
    if(!res.ok){
        return [];
    }
    return toreturn;
}