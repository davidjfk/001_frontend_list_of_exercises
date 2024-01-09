const homepageButtons = document.querySelector("#listOfAssignments");
const switchBetweenWincAssignments = (wincAssignment) => {
    // scope: static html classes.
    deleteAllChildNodes(homepageButtons);   
    homepageButtons.classList.remove('.search-and-rate-jokes');
    homepageButtons.classList.add(wincAssignment);
}
// I (may) want to add functionality later as part of my portfolio, so I keep fn switchBetweenWincAssignments from my previous winc assignment in place.

const getJokeSearchTerms = () => {
    // Selecting the input element and get its value 
    let jokeSearchTerms = document.getElementById("search-joke_input").value;
    log(jokeSearchTerms);
    return jokeSearchTerms;
}


const getNumberOfJokes = () => {
    let numberOfJokes = document.getElementById("number-of-jokes").value;
    return numberOfJokes;
}


const buttonSearchAndRateJokes = document.querySelector(".search-and-rate-jokes");

const handleClickEvent5 = () => {
    switchBetweenWincAssignments('rateJokes')


    let numberOfJokesToShow = getNumberOfJokes();
    log(`numberOfJokesToShow: ${numberOfJokesToShow}`)
    log(typeof(numberOfJokesToShow))
    // if website visitor does not enter nr of jokes to rate, then by default 5 jokes will be shown. 
    numberOfJokesToShow = (numberOfJokesToShow.length > 0) ? numberOfJokesToShow : 5;
    // I want to show in html attribute placeholder instead of (default) value.

    // webasite user must enter a valid number, but not e.g. a string: 
    numberOfJokesToShow = (parseInt(numberOfJokesToShow)) ? numberOfJokesToShow : 5;
    log(`numberOfJokesToShow2: ${numberOfJokesToShow}`)
    
    // create work-around for bug in api
    let jokeSearchTerms = getJokeSearchTerms()
    if (parseInt(jokeSearchTerms)) {
     // search api is able to use 1 or 2, or more integers, e.g. 1 or 45, or 984 as search terms.
    } else {
        if ( jokeSearchTerms.length < 3 && jokeSearchTerms.length > 0 ) {
            alert('Please enter 3 characters or more, or no characters at all.')
            // test1: "<no value>" --> search result
            // test1: l --> output: alert
            // test2: le --> output: alert
            // test3: leg --> output: search result
        }

    }
    showManyJokesFromApi(numberOfJokesToShow, jokeSearchTerms )
}
buttonSearchAndRateJokes.addEventListener("click", handleClickEvent5)



const buttonResetWebpage = document.querySelector(".resetWebpage");
const handleClickEvent7 = () => location.reload();
buttonResetWebpage.addEventListener("click", handleClickEvent7)



document.addEventListener('keydown', function (event) {
    switch (event.key) {  
        case ('Enter'):
            log('bla')
            document.querySelector(".search-and-rate-jokes").click();
            break;
        case ('Delete'):
            log('bar')
            document.querySelector(".resetWebpage").click();
            break;               
    }
});