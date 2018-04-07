// ***** FOR OF LOOP
    let cheer = 'JOHNDOE';

    for (let value of cheer) {
        if (value === 'J'){
            value += '!';
            console.log('Give me a', value);
        } else {
            value += '!';
            console.log('Give me an', value);
        }
    }

    console.log(`What does that spell? ${cheer}!`);
