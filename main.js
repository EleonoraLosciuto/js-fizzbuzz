// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


    for(i=1; i<=100; i++)  //Ciclo for per numeri da 1 a 100 
    {
        if (i % 3 === 0 && i % 5 === 0) {console.log("FizzBuzz")} // Condizione con AND per FizzBuzz // Multipli di 3 --> % 3 = 0 // Multipli di 5 --> % 5 = 0
        else if (i % 3 === 0) {console.log("Fizz")}
        else if (i % 5 === 0) {console.log("Buzz")}
        else console.log(i);
    };


    // Altra possibilità - questa possibilitá ha il vantaggio di essere piú flessibile se per esempio aggiungessi un altro multiplo e devo concatenare anche quello (es. multiplo di 7 "Riss")
    
    for(i = 0; i < 100; i++) { //loop da 0 a 99
        const val = i + 1; // variabile per i+1 --> console.log(val) --> loop da 1 a 100
        const multipleOf3 = val % 3 === 0;
        const multipleOf5 = val % 5 === 0;
        const multipleOf7 = val % 7 === 0;

        let result = ""; // utilizzo una variabile stringa di accumulo

        if (multipleOf3) result += "Fizz"; // concateno "Fizz"
        if (multipleOf5) result += "Buzz"; // concateno "Buzz"
        if (multipleOf7) result += "Riss"; // concateno "Riss"
        if (!multipleOf3 && !multipleOf5 && !multipleOf7) result = val;

        console.log(result);

        }


