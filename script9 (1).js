function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // ?
        console.log(b); // ?
    }
    console.log(a); // ?
    console.log(b); // ?
}
testeEscopo();
//sera impresso só os tres primeiros consoles logs , pois o ultimo não é declarado.
// o var ira valer para o código inteiro, já o let vale apenas para o bloco.
//sendo assim, se quisermos que , o ultimo let saia, precisararemos declarar denovo o let fora do bloco.