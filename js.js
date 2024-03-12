/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (text) {
  const h1Element = document.querySelector("h1")
  h1Element.innerText = text
}
changeTitle("ciccio")

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function (titleClass) {
  const h1Element = document.querySelector("h1")
  h1Element.classList.add(titleClass)
}
addClassToTitle("h1Class")
/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const pContent = function (pText) {
  const AllDiv = document.querySelectorAll("div")
  AllDiv.forEach(element => {
    const allP = element.querySelectorAll("p")
    allP.forEach(element => {
      element.innerHTML = pText
    })
  })
}
pContent("ciao ciao")

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer)
        con il valore https://www.google.com
      */

const changeUrls = function (newLink) {
  const everyLinkNotFooter = document.querySelectorAll("a:not(footer a)")
  everyLinkNotFooter.forEach(link => (link.href = newLink))
}
changeUrls("https://www.google.com")
/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const ul = document.querySelector("body ul:nth-of-type(2)")
  const li = document.createElement("li")
  ul.appendChild(li)
}
addToTheSecond()

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function (newP) {
  const div = document.querySelector("div")
  const p = document.createElement("p")
  div.appendChild(p)
  p.innerText = newP
}
addParagraph("Questo è un nuovo paragrafo")

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const firstUl = document.querySelector("ul:first-of-type")
  firstUl.remove()
}
hideFirstUl()

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const allUl = document.querySelector("ul")
  allUl.style.backgroundColor = "green"
}
paintItGreen()

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1El = document.querySelector("h1")
  h1El.onclick = () => {
    h1Content = h1El.textContent
    textCut = h1Content.slice(0, -1)
    h1El.innerText = textCut
  }
}
makeItClickable()

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di 
       un alert()
      */
const revealFooterLink = function () {
  const footer = document.querySelector("footer")
  footer.onclick = () => alert(document.querySelector("footer a"))
}
revealFooterLink()

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {}

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {}

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {}
