export class Notizen {
    #notizen;
    constructor() {
        this.#notizen = new Map();
    }

    erfassen(notiz) {
        if (!notiz) {
            throw new Error("Fehler: null");
        }
        const katagorie = "Diverses";
        let liste = this.#notizen.get(katagorie); // möglicherweise undefined
        if (!liste) { // wenn undefined
            liste = [];
            this.#notizen.set(katagorie, liste);
        }
        // an dieser Stelle ist liste immer ein Array und auch in der Map zugeordnet
        liste.push(notiz);
    }
    ausgeben() {
        this.#notizen.keys().forEach((k) => {
            console.log(`Kategorie: ${k}`);
            const liste = this.#notizen.get(k);
            liste.forEach((n) => {
                console.log(`  ${n}`);
            });
        });
    }
    erstellen(notiz, kategorie) {
        if (!notiz || !kategorie) {
            throw new Error("Fehler: null");
        }
        // an dieser STelle sind beide not null bzw. undefined
        if (!this.#notizen.has(kategorie)) {
            this.#notizen.set(kategorie, []);
        }
        this.#notizen.get(kategorie).push(notiz);
    }

    ausgebenKatagorien() {
        this.#notizen.keys().forEach((k) => {
            console.log(k);
        });
    }
}
//    public void suche(String wort) throws NotizenException {

//    public void entfernen(String wort) {

//    public void sortiereNachLaenge(){
//    }
