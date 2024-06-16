// Função para ordenar produtos
function sortProducts(sortBy) {
    // Obtém a div que contém todos os produtos
    let productGrid = document.getElementById('productGrid');

    // Obtém todos os elementos de produto como um array
    let products = Array.from(productGrid.getElementsByClassName('product-card'));

    // Função de comparação para ordenar os produtos
    products.sort((a, b) => {
        let aValue, bValue;

        // Ordenação por nome
        if (sortBy === 'name') {
            // Obtém o valor do atributo 'data-name' e converte para minúsculas
            aValue = a.getAttribute('data-name').toLowerCase();
            bValue = b.getAttribute('data-name').toLowerCase();

            // Compara os valores dos nomes
            return aValue.localeCompare(bValue);
        } 
        // Ordenação por preço ascendente
        else if (sortBy === 'priceAsc') {
            // Obtém o valor do atributo 'data-price' e converte para número
            aValue = parseFloat(a.getAttribute('data-price'));
            bValue = parseFloat(b.getAttribute('data-price'));

            // Compara os valores dos preços
            return aValue - bValue;
        } 
        // Ordenação por preço descendente
        else if (sortBy === 'priceDesc') {
            // Obtém o valor do atributo 'data-price' e converte para número
            aValue = parseFloat(a.getAttribute('data-price'));
            bValue = parseFloat(b.getAttribute('data-price'));

            // Compara os valores dos preços (invertido para ordem descendente)
            return bValue - aValue;
        }
    });

    // Limpa a grade de produtos
    productGrid.innerHTML = '';

    // Adiciona os produtos ordenados de volta à grade
    products.forEach(product => productGrid.appendChild(product));
}

// Adiciona event listeners para os dois selects
document.getElementById('sortSelect1').addEventListener('change', function() {
    sortProducts(this.value);
});

document.getElementById('sortSelect2').addEventListener('change', function() {
    sortProducts(this.value);
});


