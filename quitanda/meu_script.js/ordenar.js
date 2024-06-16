document.getElementById('sortSelect').addEventListener('change', function() {
    let sortBy = this.value;
    let productGrid = document.getElementById('productGrid');
    let products = Array.from(productGrid.getElementsByClassName('product-card'));

    products.sort((a, b) => {
        let aValue, bValue;

        if (sortBy === 'name') {
            aValue = a.getAttribute('data-name').toLowerCase();
            bValue = b.getAttribute('data-name').toLowerCase();
            return aValue.localeCompare(bValue);
        } else if (sortBy === 'priceAsc') {
            aValue = parseFloat(a.getAttribute('data-price'));
            bValue = parseFloat(b.getAttribute('data-price'));
            return aValue - bValue;
        } else if (sortBy === 'priceDesc') {
            aValue = parseFloat(a.getAttribute('data-price'));
            bValue = parseFloat(b.getAttribute('data-price'));
            return bValue - aValue;
        }
    });

    // Clear the grid and append sorted products
    productGrid.innerHTML = '';
    products.forEach(product => productGrid.appendChild(product));
});

