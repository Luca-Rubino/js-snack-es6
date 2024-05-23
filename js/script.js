// > SNACK 1
// > Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// > Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// > Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:

//     nome del tavolo (tableName),
//     nome dell'ospite (guestName),
//     posto occupato (place),
// > Generiamo e stampiamo in console la lista per i segnaposto.

console.log('Snack 1')

// // creo gli array con i dati richiesti in forma di stringhe
// const bradPitt = ['tableName: Tavolo Vip', 'guestName: Brad Pitt', 'place: 1']
// // console.log(bradPitt)
// const johnnyDepp = ['tableName: Tavolo Vip', 'guestName: Johnny Depp', 'place: 2']
// // console.log(johnnyDepp)
// const ladyGaga = ['tableName: Tavolo Vip', 'guestName: Lady Gaga', 'place: 3']
// // console.log(ladyGaga)
// const cristianoRonaldo = ['tableName: Tavolo Vip', 'guestName: Cristiano Ronaldo', 'place: 4']
// // console.log(cristianoRonaldo)
// const georginaRodrigue = ['tableName: Tavolo Vip', 'guestName: Georgina Rodriguez', 'place: 5']
// // console.log(georginaRodrigue)
// const chiaraFerragni = ['tableName: Tavolo Vip', 'guestName: Chiara Ferragni', 'place: 6']
// // console.log(chiaraFerragni)
// const georgeClooney = ['tableName: Tavolo Vip', 'guestName: George Clooney', 'place: 7']
// // console.log(georgeClooney)
// const amalClooney = ['tableName: Tavolo Vip', 'guestName: Amal Clooney', 'place: 8']
// // console.log(amalClooney)
// const fedez = ['tableName: Tavolo Vip', 'guestName: Fedez', 'place: 9']
// // console.log(fedez)
// const amadeus = ['tableName: Tavolo Vip', 'guestName: Amadeus', 'place: 10']
// // console.log(amadeus)
// const fiorello = ['tableName: Tavolo Vip', 'guestName: Fiorello', 'place: 11']
// // console.log(fiorello)

// // inserisco gli array ospiti in un array che li contenga
// const listaOspiti = [bradPitt,johnnyDepp,ladyGaga,cristianoRonaldo,georginaRodrigue,chiaraFerragni,georgeClooney,amalClooney,fedez,amadeus,fiorello]
// // console.log(listaOspiti)

// // creo ciclo for per convertile le stringhe in oggetti
// let i
// for (i=0; i<listaOspiti.length; i++){
//     bradPitt.pop(); bradPitt.pop()
//     bradPitt[0] = {tableName: 'Tavolo Vip',guestName: 'Brad Pitt',place: 1}
//     // console.log(bradPitt)

//     johnnyDepp.pop(); johnnyDepp.pop()
//     johnnyDepp[0] = {tableName: 'Tavolo Vip',guestName: 'Johnny Depp',place: 2}
//     // console.log(johnnyDepp)

//     ladyGaga.pop(); ladyGaga.pop()
//     ladyGaga[0] = {tableName: 'Tavolo Vip',guestName: 'Lady Gaga',place: 3}
//     // console.log(ladyGaga)

//     cristianoRonaldo.pop(); cristianoRonaldo.pop()
//     cristianoRonaldo[0] = {tableName: 'Tavolo Vip',guestName: 'Cristiano Ronaldo',place: 4}
//     // console.log(cristianoRonaldo)

//     georginaRodrigue.pop(); georginaRodrigue.pop()
//     georginaRodrigue[0] = {tableName: 'Tavolo Vip',guestName: 'Georgina Rodriguez',place: 5}
//     // console.log(georginaRodrigue)

//     chiaraFerragni.pop(); chiaraFerragni.pop()
//     chiaraFerragni[0] = {tableName: 'Tavolo Vip',guestName: 'Chiara Ferragni',place: 6}
//     // console.log(chiaraFerragni)

//     georgeClooney.pop(); georgeClooney.pop()
//     georgeClooney[0] = {tableName: 'Tavolo Vip',guestName: 'George Clooney',place: 7}
//     // console.log(georgeClooney)

//     amalClooney.pop(); amalClooney.pop()
//     amalClooney[0] = {tableName: 'Tavolo Vip',guestName: 'Amal Clooney',place: 8}
//     // console.log(amalClooney)

//     fedez.pop(); fedez.pop()
//     fedez[0] = {tableName: 'Tavolo Vip',guestName: 'Fedez',place: 9}
//     // console.log(fedez)

//     amadeus.pop(); amadeus.pop()
//     amadeus[0] = {tableName: 'Tavolo Vip',guestName: 'Amadeus',place: 10}
//     // console.log(amadeus)

//     fiorello.pop(); fiorello.pop()
//     fiorello[0] = {tableName: 'Tavolo Vip',guestName: 'Fiorello',place: 11}
//     // console.log(fiorello)
// }

// console.log(listaOspiti)


// * Soluzione usando il metodo array.map

// Creo gli array con i dati richiesti in forma di stringhe
const listaOspiti = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// Converto gli elementi stringa dell'array in elementi object con i dati richiesti
const listaInvitati = listaOspiti.map((ospite,indice)=>({
    tableName:`Tavolo Vip`,
    guestName:ospite,
    place:indice+1,
}))

console.log(listaInvitati)