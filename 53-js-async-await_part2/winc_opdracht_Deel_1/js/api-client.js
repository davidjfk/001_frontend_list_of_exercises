// I have removed my API_Key so I can add code to a public repo (and winc teacher has access to it)


//  functions in Deel1:
const log = console.log;

const createUrlWithoutQueryString = (origin, parameterString, useApiKey) => {
    const apiUrl = `${origin}${parameterString}`;
        let endPoint;
        if (useApiKey) {
            endPoint = `${apiUrl}?api_key=${API_KEY_TMDB}`;
        } else {
            endPoint = apiUrl;
        };                                
        return endPoint;
}

const createUrlWithQueryString = (origin, parameterString, queryString, useApiKey) => {
    const apiUrl = `${origin}${parameterString}?${queryString}`;
        let endPoint;
        if (useApiKey) {
            endPoint = `${apiUrl}&api_key=${API_KEY_TMDB}`;
        } else {
            endPoint = apiUrl;
        };                                
        return endPoint;
}

const getData = async (endpoint) => {        
    try{
        const res = await fetch(endpoint)
        // log(typeof (res))
        // console.dir(res)
        const json = await res.json();
        // console.dir(json);
        return json;
    } catch (err) {
        console.log(err);
        return err;
    }
}

