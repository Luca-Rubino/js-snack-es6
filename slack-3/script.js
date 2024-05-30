// SNACK 3
// > Creare un array di oggetti:
// > Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// > Stampare in console la bici con peso minore utilizzando destructuring e template literal


// creo array di oggetti con gli oggetti che hanno come proprietà: nome e peso. 
const listaBici = [
    {
        nome:`TREK DOMANE+ SLR 7-54`,
        peso:12.50,
    },
    {
        nome:`TARMAC SL8 PRO SHIMANO ULTEGRA UDi2`,
        peso:7.16,
    },
    {
        nome:`CANNONDALE SYNAPSE NEO ALL ROAD`,
        peso:10.52,
    },
    {
        nome:`GRAVEL SPECIALIZED TURBO CREO SL E5`,
        peso:9.36,
    },
    {
        nome:`GRAVEL SPECIALIZED DIVERGE STR`,
        peso:8.75,
    },
]

// console.log(listaBici)

// utilizzando destructuring per inserire in una costante i singoli oggetti
const [tarmacSl8,trekDomane,cannondale,gravelTurbo,gravelDiverge] = listaBici

console.log(tarmacSl8.peso,trekDomane.peso,cannondale.peso,gravelTurbo.peso,gravelDiverge.peso)

// uso il forEach per avere solo l'elenco del peso delle bici

const elencoPesoBici = [] // lista con solo il peso di ogni singola bici

listaBici.forEach((biciclette, i) => {
    const {peso} = listaBici[i];

    // console.log({peso});

    elencoPesoBici.push(peso)
});

// console.log(elencoPesoBici);

// utilizzo il metodo filter per ottenere il parametro peso con il valore minore
const biciPiuLeggera = listaBici.filter((biciclette) => biciclette.peso === Math.min(...elencoPesoBici));

// console.log(biciPiuLeggera);

// stampo in console qual'è la bici più leggera usando il console.log con template literal
console.log(`La bici piu' leggera e': ${biciPiuLeggera[0].nome} e pesa: ${biciPiuLeggera[0].peso} kg`);

// SNACK 4
// > Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// > Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// > Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Genova',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
]


// BONUS 1

// SNACK 5
// > Abbiamo questa lista di articoli di moda:
// name        type      color
// Poppy       tshirt    red
// Jumping     occhiali  blue
// CrissCross  scarpe    black
// Jenny       borsa     pink
// > Questi articoli sono inseriti in un array di oggetti.
// > Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.



// BONUS 2

// > Stampare in pagina oltre che in console!