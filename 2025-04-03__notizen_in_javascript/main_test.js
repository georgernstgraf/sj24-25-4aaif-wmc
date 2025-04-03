import { Notizen } from "./main.js";

Deno.test(function fehler_leer0() {
    const notizen = new Notizen();
    try {
        notizen.erfassen("Brot kaufen");
    } catch (e) {
        console.log(e.message());
    }
    // TODO notizen.ausgeben();
});

Deno.test(function fehler_leer1() {
    const notizen = new Notizen();
    notizen.erfassen("Brot kaufen");
    notizen.erfassen("Brot 1 kaufen");
    notizen.erfassen("Brot 2 kaufen");
    notizen.ausgebenKatagorien();
});

Deno.test(function fehler_leer2_null() {
    const notizen = new Notizen();
    try {
        notizen.erfassen("Brot kaufen");
        notizen.erfassen("Brot 1 kaufen");
        notizen.erfassen("Brot 2 kaufen");
        notizen.erfassen(null);
        throw new Error("Fehler: Notiz darf nicht null sein");
    } catch (e) {
        console.log(`Alles Gut: NULL erfassen warf einen Fehler: ${e.message}`);
    }
    // TODO notizen.ausgeben();
});
Deno.test(function fehler_leer3() {
    const notizen = new Notizen();
    notizen.erstellen("Brot kaufen", "Lebensmittel");
    notizen.erstellen("Brot 1 kaufen", "Lebensmittel");
    notizen.erstellen("Brot 2 kaufen", "Lebensmittel");
    notizen.erstellen("Javascript lernen", "Programmierung");
    notizen.erstellen("Duschen", "Hygiene");
    notizen.ausgeben();
});
