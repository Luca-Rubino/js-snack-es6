SNACK 1

> Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

> Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

> Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:

    nome del tavolo (tableName),
    nome dell'ospite (guestName),
    posto occupato (place),

> Generiamo e stampiamo in console la lista per i segnaposto.

SNACK 2

> Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

> 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);

> 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

> 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120Buon pomeriggio e buon lavoro !!! :faccia_nerd:Questo è l'elenco degli studenti:


Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

Svolgimento:

Slack 1:

- Creo gli array con i dati richiesti in forma di stringhe
- Inserisco gli array ospiti in un array che li contenga
- Creo ciclo for per convertile le stringhe in oggetti
- Stampo la lista in console

> Soluzione usando il metodo array.map
- Creo gli array con i dati richiesti in forma di stringhe
- Converto gli elementi stringa dell'array in elementi object con i dati richiesti


Slack 2:

- Creo array con l'elenco totale degli studenti
- Stampo in console l'elenco totale degli studenti
- Creo un array che contenga l'elenco totale degli studenti e li stampi in console in maiuscolo e stampo in console l'array
- Creo un array con solo gli studenti che hanno Grades superiore a 70 e stampo in console l'array
- Creo un array con solo gli studenti che hanno Grades superiore a 70 e id superiore a 120 e stampo in console l'array