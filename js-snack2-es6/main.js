const array_nomi = ['marco', 'luca', 'maria', 'susanna', 'francesco', 'chiara'];
let numero_partenza = parseInt(prompt('inserisci un numero'));
let numero_fine = parseInt(prompt('inserisci un numero'));

for (var i = numero_partenza; i < numero_fine; i++) {
    let nuovi_compresi = array_nomi.filter((numero_partenza, numero_fine) => array_nomi[i] > numero_partenza && array_nomi[i] < numero_fine)
    console.log(nuovi_compresi);
}
