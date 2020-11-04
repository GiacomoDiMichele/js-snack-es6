
    const bici = [
        {
            nome: 'bici-uno',
            peso: 5
        },
        {
            nome: 'bici-due',
            peso: 6
        },
        {
            nome: 'bici-tre',
            peso: 3
        },
        {
            nome: 'bici-quattro',
            peso: 6
        },
        {
            nome: 'bici-cinque',
            peso: 5
        }
    ]
    const numero_minimo = Math.min(5, 6, 3, 6, 5);
    console.log(numero_minimo);

    for (let i = 0; i < bici.length; i++) {
    // recupero l'elemento corrente, che è un oggetto bicicletta

    let bici_corrente = bici[i];
    // destrutturo la bici corrente e ne recupero il peso
    let {peso} = bici_corrente;
    console.log(peso);
    if (bici_corrente.peso == numero_minimo) {
        console.log(
            `
            ${bici_corrente.nome} è il peso minore
            `
        );
    }
}
