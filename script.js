function criptografar() {
    let texto = document.getElementById('texto').value;
    let frase = texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    document.getElementById('resposta').innerHTML = `<h2>Criptografado:</h2><p>${frase}</p>`;
}

function descriptografar() {
    let texto = document.getElementById('texto').value;
    let frase = texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    document.getElementById('resposta').innerHTML = `<h2>Descriptografado:</h2><p>${frase}</p>`;
}

function copiar() {
    let textoCopiar = document.getElementById('resposta').innerText;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Erro ao copiar texto. Por favor, tente novamente.');
        });
}
