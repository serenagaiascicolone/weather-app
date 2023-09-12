La versione night del sito è implementata nel componente Layout è passata alle altre rotte mediante props.
In NotFound, non essendo rotta figlia di Layout, ho dovuto riportare l'intera logica.

Lo switch dei vari sfondi delle città in base al meteo è implementato in nameUI (utilities) dove prendo come casi le icone provenienti da Open Weather Mapp

La funzione che cambia sfondo al body è setBodyColor in bodyColor (utilities)

Per controllare lo stato dell'applicazione, eccetto night, ho usato redux reducer (slice in features, store in store).
Anche le chiamate sono controllate con redux reducer (weatherApi) => funziona come il reducer dello stato: crei il tuo slice, i reducers vengono chiamati nei componenti in cui servono. 
Si fa il dispatch quando aggiungiamo nuove città e aggiungiamo la posizione. 

//TODO: CAMBIARE ICONE E IMMAGINI NELLA VERSIONE NOTTE, SISTEMARE LOGOTEXT NELLA ROTTA DELLA CITTA SELEZIONATA (QUANDO AUMENTA LA DIMENSIONE DELLO SCHERMO) 
