
console.log("ASSIGNMENT : WINC API FUN TIME ")

const addLikes = {
    // variable count in closure, so global scope is not getting polluted.
    count: 0,
    incrementCounter: function() {
        addLikes.count++;
        let counterElem = document.querySelector('.joke-likes')
        let displayCounterElem = document.createElement('span')
        counterElem.appendChild(displayCounterElem)
        let counterToDisplay = addLikes.count;
        log(`counterToDisplay: ${counterToDisplay}`)
        const countryTextElem = document.createTextNode(`Joke Likes: ${counterToDisplay}`);
        displayCounterElem.appendChild(countryTextElem);
        counterElem.removeChild(counterElem.firstChild);
    }
}

const addDislikes = {
    count: 0,
    incrementCounter: function() {
        addLikes.count++;
        let counterElem = document.querySelector('.joke-dislikes')
        let displayCounterElem = document.createElement('span')
        counterElem.appendChild(displayCounterElem)
        let counterToDisplay = addLikes.count;
        log(`counterToDisplay: ${counterToDisplay}`)
        const countryTextElem = document.createTextNode(`Joke Dislikes: ${counterToDisplay}`);
        displayCounterElem.appendChild(countryTextElem);
        counterElem.removeChild(counterElem.firstChild);
    }
}

    const getJoke =  function (arrObjJoke) {
        return arrObjJoke.joke;
    }
    
    const addToDOM = async function (arrObjJoke) {
        const jokesTable = document.querySelector('.rateJokes');
        const listItem = document.createElement('li');
        const header = document.createElement('h4');
        const buttonLike = document.createElement("button")
        const buttonDislike = document.createElement("button")
        const buttonToggle = document.createElement("button")
        buttonToggle.classList.add('button-toggle');

        // alternative: for this assignment I could simply display the joke as an image as well.  

        // status of code: working. I have uncommented it as building block for other use.
/* 
        const headerImage = document.createElement('h4');
        const imgJoke = document.createElement("img")
        imgJoke.classList.add(arrObj.id);
        // imgJoke.id = arrObj.id;
        imgJoke.setAttribute("src", `https://icanhazdadjoke.com/j/${arrObj.id}.png`)
        headerImage.appendChild(imgJoke);
        listItem.appendChild(headerImage)

 */
        // 2make code blcok abvove work, also uncomment line ' headerImage.classList.toggle( "make-invisible"); '  inside fn toggleVisibilityOfJokeImage below. 
        
        const dataToDisplayOnButton1 = "click(s) to like"
        const button1TextElement = document.createTextNode(dataToDisplayOnButton1);
        const dataToDisplayOnButton2 = "click(s) to dislike"
        const button2TextElement = document.createTextNode(dataToDisplayOnButton2);
        const dataToDisplayOnButton3 = "toggle joke"
        const button3TextElement = document.createTextNode(dataToDisplayOnButton3);
        buttonLike.appendChild(button1TextElement)
        buttonDislike.appendChild(button2TextElement)
        buttonToggle.appendChild(button3TextElement)
        buttonLike.classList.add('button-like');
        buttonDislike.classList.add('button-dislike');
        const jokeToDisplay = getJoke(arrObjJoke);
        const textElem = document.createTextNode(jokeToDisplay);
        listItem.appendChild(buttonLike);
        listItem.appendChild(buttonDislike);
        listItem.appendChild(buttonToggle);
        listItem.appendChild(textElem);
        header.appendChild(textElem);
        listItem.appendChild(header);
        jokesTable.appendChild(listItem);
        listItem.id = 'flexboxJokeResults';


        const handleClickEvent1 = () => {
            addLikes.incrementCounter();
        }
        const handleClickEvent2 = () => {
            addDislikes.incrementCounter();
        }

        buttonLike.addEventListener("click", handleClickEvent1)
        buttonDislike.addEventListener("click", handleClickEvent2)

        buttonLike.addEventListener('click', function () {
            let elemJokeLikesCounter = document.querySelector('.joke-likes');
            elemJokeLikesCounter.classList.add('green-background');
        });

        buttonDislike.addEventListener('click', function() {
            let elemJokeDislikesCounter = document.querySelector('.joke-dislikes');
            elemJokeDislikesCounter.classList.add('red-background');
        });     
    

        const toggleVisibilityOfJokeImage = () => {
            // headerImage.classList.toggle( "make-invisible");   
            header.classList.toggle( "make-invisible");
        }

        const handleClickEvent3 = () => {  
            toggleVisibilityOfJokeImage()
        }
        buttonToggle.addEventListener("click", handleClickEvent3)
    };


    const showManyJokesFromApi = async function (nrOfJokes, searchTerms) {
        let resultFromApi;


        resultFromApi = await getManyJokesFromApi(nrOfJokes, searchTerms)
      
        log(resultFromApi.results)
        let myJokes = resultFromApi.results;

        //  sample of what the fetched data (should) look like
        //  myJokes = await getManyJokesFromApi()
            // myJokes = [
            //     {
            //       id: '0189hNRf2g',
            //       joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
            //     },
            //     {
            //       id: '08EQZ8EQukb',
            //       joke: "Did you hear about the guy whose whole left side was cut off? He's all right now."
            //     },
            //     {
            //       id: '0oO71TSv4Ed',
            //       joke: 'Why was it called the dark ages? Because of all the knights. '
            //     },
            //   ]
        myJokes.map((arrObjJoke) =>  addToDOM(arrObjJoke));
    };
    








