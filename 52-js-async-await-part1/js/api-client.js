// I have removed my API_Key so I can add code to a public repo (and winc teacher has access to it)
const API_KEY = "secretStuff";

const getData = async () => {
    try {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

    const endPoint = `${apiUrl}?api_key=${API_KEY}`;
    
        
    const res = await fetch(endPoint)
    const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
        return err;
    }

}






