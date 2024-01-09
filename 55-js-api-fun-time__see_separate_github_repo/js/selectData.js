const getManyJokesFromApi = async function (numberOfJokes= 3, searchTerm= "") {
  const jokeResponse = await fetch(`https://icanhazdadjoke.com/search?limit=${numberOfJokes}&term=${searchTerm}`, {
    
      method: 'GET',
 
      headers: {      
          'Accept': 'application/json',
        }
  });   
  const json = await jokeResponse.json()
  log(json)
  return json;
};



