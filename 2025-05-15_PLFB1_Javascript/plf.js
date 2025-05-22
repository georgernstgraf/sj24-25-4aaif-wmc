import { assert, assertEquals, assertThrows } from "@std/assert";

export class Frage {
    constructor(frage, optionen, antwort) {
        if (arguments.length !== 3) {
            throw new Error("drei args");
        }
        if (typeof arguments[2] !== "string") {
            throw new Error("last is not string");
        }
        assert(Array.isArray(arguments[1]));
        assertEquals(typeof arguments[0], "string");
        assert(arguments[1].includes(arguments[2]));
        this.frage = arguments[0];
        this.optionen = optionen;
        this.antwort = antwort;
    }
}
export class Quiz {
    constructor(arg) {
        assertEquals(arguments.length, 1);
        this.fragen = arg.map((pojo) =>
            new Frage(pojo.frage, pojo.optionen, pojo.antwort)
        );
    }
    getFragenByLength(l) {
        return this.fragen.filter((o) => o.frage.length >= l);
    }
    getFragenSortedByLength() {
        return this.fragen.sort((a, b) => a.frage.length - b.frage.length);
    }
    getFragenWithOption(option) {
        return this.fragen.filter((o) => o.optionen.includes(option));
    }
    getAverageOptions() {
        let count = 0;
        //this.fragen.forEach((element) => {
        //    count += element.optionen.length;
        //});
        count = this.fragen.reduce((acc, cur) => acc + cur.optionen.length, 0);
        return count / this.fragen.length;
    }
    getAllOptions() {
        const s = new Set();
        this.fragen.forEach((f) => {
            f.optionen.forEach((o) => s.add(o));
        });
        return Array.from(s);
    }
}
