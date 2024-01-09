

const huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak} maken `);
        callback();
    }, 500)
        ;
    
}

const klaarMetHuiswerk = () => { console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!") };

huiswerkMaken("wiskunde", klaarMetHuiswerk);


 