
 //'strict mode'
 const log = console.log;


import fetch from 'node-fetch';
// const fetch = require("node-fetch");
// const { Headers } = fetch;
// const { Request } = fetch;

//  above is boilerplate code:

/* 
Deel 2: Post request (alleen met Postman: done, also in code below:)
1. Je gaan een POST request maken, die jouw rating post naar een film van jouw keuze.
2. Let op: "A valid session or guest session ID is required. You can read more about how this works" (lees de documentatie dus goed door)
3. Je rating verschijnt daadwerkelijk in de database, en is terug te traceren naar jouw API key en dus jouw emailadres. Dus je wilt wel iets "echts" opsturen.
4. Check de code generation functie in de documentatie. Ze gebruiken niet de fetch() methode, maar je kunt er wel inspiratie uit halen hoe de settings moeten zijn.
5. Check of het is gelukt. Zie je rating staan op https://www.themoviedb.org/ ? Of kun je misschien een GET request doen van de ratings van de movie, om te zien of die van jou ertussen staat? Kan allebei. 


Deel 3: Delete request (alleen met Postman)
Delete je bovenstaande rating
Ook voor deze geldt weer dat er een "valid session or guest session ID is required." is. Lees de documentatie goed door hoe je een DELETE request doet van jouw rating
*/



/*  
how2 run code below: (future reference)
do not comment global variables:
API_KEY_TM
request_token_generated
session_id_generated

Run each step via node separately (e.g. 2.1, then 2.2 etc). Only uncomment the code of the step that you want to run. Then comment the step, before you uncomment the code of the next step. Run the steps of each part (e.g. Deel 2) sequentially. 

Deel 2: 
2.1
2.2
2.3 (in browser) -->2do later: automate this step as well.
2.4
2.5
Deel 3:
3.1
3.2


*/

//  functions in Deel2:
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

const postData = async (endpoint, data) => {
    const result = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "charset": "utf-8",
        },
    });
    const json = await result.json();
    console.log(json);
};

const deleteData = async (endpoint, data) => {
    const result = await fetch(endpoint, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "charset": "utf-8",
        },
    });
    const json = await result.json();
    console.log(json);
};








//  Je gaan een POST request maken, die jouw rating post naar een film van jouw keuze.


//  step 2.1: generate API_Key in moviedb account and copy to variable API_KEY_TMDB:
const API_KEY_TMDB = "9bfb12e3fc85d83e7b60892bafc16457";

const getRequestToken = async function() {
    let urlToRequestToken = createUrlWithoutQueryString('https://api.themoviedb.org/3/', 'authentication/token/new', true)
    log(urlToRequestToken); 
    
    let result = await getData(urlToRequestToken);
    log(result);
    /* format of expected output:
    {
        success: true,
        expires_at: '2021-10-30 13:59:21 UTC',
        request_token: '2d8893d513cf4731fcfff9a276992b156314a3a7'
    } */
}
 getRequestToken()

let request_token_generated = '28ed0ec7dcdb924d9b49276f3235f46e3407df0a'

//  Step 2.3: Ask the "user" (read: account holder, a.k.a "me") for permission
//  login to account and then enter https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}  in the browser (while using the generated request_token)


//  step 2d: create session_id and assign it to variable session_id_generated 
const createSessionId = async function() {
    let urlTocreateSessionId = createUrlWithoutQueryString('https://api.themoviedb.org/3/', 'authentication/session/new', true)
    log(urlTocreateSessionId); 
    
    let result = await postData(urlTocreateSessionId, { request_token: request_token_generated });
    log(result)
/*     2021-11-01T12:39:03.150Z > {
        success: true,
        session_id: 'fd4246834d12487a1bef5006846fbbd8c0374a68'
    } */
}
// createSessionId()

let session_id_generated = '71c5244956c3fdffe2062af6b591d190c8507f51'

/* https://www.themoviedb.org/movie/725056-the-invisible-man 
movie_id === 725056 */

//  step 2.4: rate movie
const rateMovie = async function(movie_id, rating) {
    let urlToRateMovie = createUrlWithQueryString('https://api.themoviedb.org/3/', `movie/${movie_id}/rating`, `session_id=${session_id_generated}`, true)
    log(urlToRateMovie);
    
    let result = await postData(urlToRateMovie, { "value": rating });
    log(result)
    /* expected result format: { success: true, status_code: 1, status_message: 'Success.' } */
}
// rateMovie('725056', 6);


/* step 2.5: Check of het is gelukt. Zie je rating staan op https://www.themoviedb.org/ ? Of kun je misschien een GET request doen van de ratings van de movie, om te zien of die van jou ertussen staat? Kan allebei. 
step 5a: do GET request to get movie ratings of rated movie in previous step. */


const showRatingOfMovie = async function(movie_id) {
    const urlToGetRatedMovie = createUrlWithQueryString('https://api.themoviedb.org/3/', `movie/${movie_id}`, 'language=en-US', true)
    // log(urlToGetRatedMovie);
    
    let result = await getData(urlToGetRatedMovie);
    log(`vote average: ${result.vote_average}`)
    log(`vote count: ${result.vote_count}`)
   /*     
   expected output format: 
    vote average: 10
    vote count: 1 */
}
// showRatingOfMovie('725056')

// bug: (imho) after deletion, the vote_average and vote_count are not immediately updated via the endpoint. But via the UI of themoviedb.org the deletion is updated immediately.




//  Deel 3: Delete request (alleen met Postman: done, also in code below: )

// step 3.1: delete rating
const deleteRatingOfMovie = async function(movie_id) {
    const urlToGetRatedMovie = createUrlWithQueryString('https://api.themoviedb.org/3/', `movie/${movie_id}/rating`, `session_id=${session_id_generated}&language=en-US`, true)
    // log(urlToGetRatedMovie);
    
    let result = await deleteData(urlToGetRatedMovie);
    log(result);

/*     expected output looks like this:
    2021-11-01T11:35:40.393Z > {
        success: true,
        status_code: 13,
        status_message: 'The item/record was deleted successfully.'
    } */
}
// deleteRatingOfMovie('725056')


// step 3.2: check if rating has been deleted (not required in assignment)
// showRatingOfMovie('725056')


