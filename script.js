// Função para calcular a quantidade a comprar
function calcularQtdComprar(quantidadeAtual, quantidadeNecessaria) {
    return quantidadeNecessaria - quantidadeAtual > 0 ? quantidadeNecessaria - quantidadeAtual : 0;
}

// Função para adicionar produto à tabela
function adicionarProduto(event) {
    event.preventDefault();

    const setor = document.getElementById('setor').value;
    const produto = document.getElementById('produto').value;
    const quantidadeAtual = parseInt(document.getElementById('quantidade-atual').value);
    const quantidadeNecessaria = parseInt(document.getElementById('quantidade-necessaria').value);
    const unidade = document.getElementById('unidade').value;

    const qtdComprar = calcularQtdComprar(quantidadeAtual, quantidadeNecessaria);

    const tabela = document.getElementById('lista-estoque').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>${setor}</td>
        <td>${produto}</td>
        <td>${quantidadeAtual}</td>
        <td>${quantidadeNecessaria}</td>
        <td>${qtdComprar}</td>
        <td>${unidade}</td>
    `;

    document.getElementById('form-produto').reset();
}

// Função para gerar PDF
function gerarPDF() {
    const doc = new jsPDF();
    const tabela = document.getElementById('lista-estoque');
    doc.autoTable({ html: tabela });
    doc.save('estoque_clinica.pdf');
}

// Adicionando evento de submissão do formulário
document.getElementById('form-produto').addEventListener('submit', adicionarProduto);

// Adicionando evento para gerar PDF
document.getElementById('baixar-pdf').addEventListener('click', gerarPDF);