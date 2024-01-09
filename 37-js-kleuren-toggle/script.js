//Requirement 1 wordt vervangen door bonus: als gebruiker wil ik het menu langzaam in beeld zien schuiven en weer uit beeld zien schuiven, in plaats van plotseling verschijnen (doe dit met CSS transitions). (de richting maakt niet uit!)
// status: done:

/*definition:
colorToggleMenu = table in which you can select a color on each table row. If you click on a table row (e.g. greyRow) than that color (e.g. grey) will be set as background color of the html body.
*/
const colorToggleMenu = document.querySelector('.color-toggle-menu');

const makeColorToggleMenuVisible = () => {
    colorToggleMenu.classList.add('make-color-toggle-menu-visible');
    colorToggleMenu.classList.remove('make-color-toggle-menu-invisible');
}

const makeColorToggleMenuInvisible = () => {
    colorToggleMenu.classList.add('make-color-toggle-menu-invisible');
    colorToggleMenu.classList.remove('make-color-toggle-menu-visible');
}

/*
bonus: Als gebruiker wil ik in plaats van klikken met mijn muis over de hamburger kunnen hoveren, waardoor het menu verschijnt. Wanneer ik als gebruiker met mijn muis weer weg ga bij de hamburger verdwijnt het menu weer.
status: done
*/
const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
hamburgerMenuIcon.addEventListener('mouseover', makeColorToggleMenuVisible);
hamburgerMenuIcon.addEventListener('mouseout', makeColorToggleMenuInvisible);

// if you move the mouse away from the hamburger menu towards the toggle menu to select a color, then the toggle menu should not move out of sight (otherwise you cannot select a color).
colorToggleMenu.addEventListener('mouseover', makeColorToggleMenuVisible);
// if you move the mouse away from the hamburger menu towards the toggle menu, but you do not select a color and instead move the mouse away from the toggle menu as well, then the toggle menu should move out of sight.
colorToggleMenu.addEventListener('mouseout', makeColorToggleMenuInvisible);

//Requirement 2: Als gebruiker wil ik in het uitgeklapte menu een keuze hebben aan kleuren (uitgeschreven in tekst). Elk item in het menu is één kleur.
// status: done.

//Reqirement 3: Als gebruiker wil ik op één van de kleuren kunnen klikken.
// status: done. 

// Requirement 4:Wanneer ik als gebruiker op de kleur in het menu heb geklikt verandert de achtergrondkleur van de gehele pagina in de aangeklikte kleur.
//status: done: 

const background = document.body;

// rows in the colorToggleMenu:
const greyRow = document.querySelector('.grey-row');
const redRow = document.querySelector('.red-row');
const orangeRow = document.querySelector('.orange-row');
const purpleRow = document.querySelector('.purple-row');
const greenRow = document.querySelector('.green-row');

const toggleMenuRows = [greyRow, redRow, orangeRow, purpleRow, greenRow];


const changeBackgroundColor = (newColor) => {
    background.classList.remove('grey-background');
    background.classList.remove('red-background');
    background.classList.remove('orange-background');
    background.classList.remove('purple-background');
    background.classList.remove('green-background');
    background.classList.add(newColor);
}

greyRow.addEventListener('click', function () { changeBackgroundColor('grey-background') });
redRow.addEventListener('click', function () { changeBackgroundColor('red-background') });
orangeRow.addEventListener('click', function () { changeBackgroundColor('orange-background') });
purpleRow.addEventListener('click', function () { changeBackgroundColor('purple-background') });
greenRow.addEventListener('click', function () { changeBackgroundColor('green-background') });

// Requirement 5: Wanneer ik als gebruiker op de kleur in het menu klik, klapt het menu weer terug in.
// status: done
for (let toggleMenuRow of toggleMenuRows) {
    toggleMenuRow.addEventListener('click', makeColorToggleMenuInvisible);
}

/*
Bonus Requirements 
Als gebruiker wil ik niet alleen de kleurennamen lezen, ik wil ook de kleuren kunnen zien in het menu. Elke "rij" in het menu heeft een kleur.
status: done
*/

/*
Als gebruiker wil ik op een radiobutton kunnen klikken van de kleur van mijn keuze, waardoor ik aan de radiobutton zie wat de huidige kleur is die "actief" is op dit moment.
status: done 
*/

/*
Als gebruiker wil ik de naast de veranderende achtergrondkleur ook de uitgeschreven naam van de achtergrondkleur op de achtergrond zien wanneer ik deze heb aangeklikt.
//remark: same solution as requirement 4 above. 
status: done
*/

// target element of which you want to show the color as a tekst word on the background:
const tekstGrey = document.querySelector('.grey');
const tekstRed = document.querySelector('.red');
const tekstOrange = document.querySelector('.orange');
const tekstPurple = document.querySelector('.purple');
const tekstGreen = document.querySelector('.green');

const wordsOnBackground = [tekstGrey, tekstRed, tekstOrange, tekstPurple, tekstGreen];

// when the page loads (before selecting a color), no color is displayed on the html background as a word. 
const removeAllWordsFromBackground = (wordsOnBackground) => {
    for (let wordOnBackground of wordsOnBackground) {
        wordOnBackground.classList.add('make-invisible');
    }
}
removeAllWordsFromBackground(wordsOnBackground);

// after selecting a background color, also show this color on the html background as a word, e.g. "Green"
const showTekstOnDocumentBackground = (targetElementToUpdate) => {   
    // remove the previous selected color as word from the html background:
    removeAllWordsFromBackground(wordsOnBackground);
    //show the current selected color as a word on the html background:
    targetElementToUpdate.classList.remove('make-invisible');
}

greyRow.addEventListener('click', function () { showTekstOnDocumentBackground(tekstGrey) });
redRow.addEventListener('click', function () { showTekstOnDocumentBackground(tekstRed) });
orangeRow.addEventListener('click', function () { showTekstOnDocumentBackground(tekstOrange) });
purpleRow.addEventListener('click', function () { showTekstOnDocumentBackground(tekstPurple) });
greenRow.addEventListener('click', function () { showTekstOnDocumentBackground(tekstGreen) });

/*
Als gebruiker wil ik het menu langzaam in beeld zien schuiven en weer uit beeld zien schuiven, in plaats van plotseling verschijnen (doe dit met CSS transitions). (de richting maakt niet uit!)
status: done 
*/

/*
Verander de kleuren door het gebruik van keyboard toetsen (1 voor home, 2 voor rood, 3 voor oranje, etc.) ⇒ ****hier heb je dus een nieuw Event Type nodig.
status: done
*/
/*
if you select a color with the keyboard (e.g. keyboard button  '2' indicates 'red'), then the radiobutton (e.g.of the redRow) must be checked in the toggle menu. 
status: done  
*/
const checkRadioButtonInToggleMenu = (radiobuttonId) => {
    document.getElementById(radiobuttonId).checked = true;
}

/*
if the mouse cursor is on top of the toggle menu and/while you change color with the keyboard (e.g. keyboard '3' to select orange), then the toggle menu must disappear after you have selected this new color.
status: done
*/
document.addEventListener('keydown', function (event) {
    switch (event.key) {  
        case ('1'):
            changeBackgroundColor('grey-background');
            showTekstOnDocumentBackground(tekstGrey)
            checkRadioButtonInToggleMenu('grey');
            makeColorToggleMenuInvisible();
            break;
        case ('2'):
            changeBackgroundColor('red-background');
            showTekstOnDocumentBackground(tekstRed)
            checkRadioButtonInToggleMenu('red');
            makeColorToggleMenuInvisible();
            break;
        case ('3'):
            changeBackgroundColor('orange-background');
            showTekstOnDocumentBackground(tekstOrange)
            checkRadioButtonInToggleMenu('orange');
            makeColorToggleMenuInvisible();
            break;
        case ('4'):
            changeBackgroundColor('purple-background')
            showTekstOnDocumentBackground(tekstPurple)
            checkRadioButtonInToggleMenu('purple');
            makeColorToggleMenuInvisible();
            break;       
        case ('5'):
            changeBackgroundColor('green-background')
            showTekstOnDocumentBackground(tekstGreen)
            checkRadioButtonInToggleMenu('green');
            makeColorToggleMenuInvisible();
            break;                
    }
});

// if you click on a row in the toggle menu, but not precisely on the radiobutton on that specific row, then the radiobutton of that row must be checked. So if you click e.g. greenRow, then the radiobutton on the greenRow will be checked. 
greyRow.addEventListener('click', function () { document.getElementById('grey').checked = true });
redRow.addEventListener('click', function () { document.getElementById('red').checked = true });
orangeRow.addEventListener('click', function () { document.getElementById('orange').checked = true });
purpleRow.addEventListener('click', function () { document.getElementById('purple').checked = true });
greenRow.addEventListener('click', function () { document.getElementById('green').checked = true });