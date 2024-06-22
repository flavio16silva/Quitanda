  // document.addEventListener('DOMContentLoaded', () => {
  //   const searchInput = document.getElementById('searchInput');
  //   const searchButton = document.getElementById('searchButton');
  //   const sortSelect1 = document.getElementById('sortSelect1');
  //   const sortSelect2 = document.getElementById('sortSelect2');
  //   const productGrid = document.getElementById('productGrid');
  //   const noProductsMessage = document.getElementById('noProductsMessage');
    
  //   // Função para exibir a mensagem de erro
  //   const displaynoProductsMessage = (display) => {
  //     noProductsMessage.style.display = display ? 'block' : 'none';
  //   }
  
  //   // Função para filtrar produtos
  //   const filterProducts = () => {
  //     const searchTerm = searchInput.value.trim().toLowerCase();
  //     let productFound = false;
      
  //     document.querySelectorAll('.product-card').forEach(card => {
  //       const productName = card.dataset.name.toLowerCase();
  //       if (searchTerm === '' || productName.includes(searchTerm)) {
  //         card.style.display = 'block';
  //         productFound = true;
  //       } else {
  //         card.style.display = 'none';
  //       }
  //     });
      
  //     displaynoProductsMessage(!productFound);
  //   };
  
  //   // Função para ordenar produtos
  //   const sortProducts = (criteria) => {
  //     const productsArray = Array.from(productGrid.getElementsByClassName('product-card'));
      
  //     productsArray.sort((a, b) => {
  //       if (criteria === 'name') {
  //         return a.dataset.name.localeCompare(b.dataset.name);
  //       } else if (criteria === 'priceAsc') {
  //         return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
  //       } else if (criteria === 'priceDesc') {
  //         return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
  //       }
  //     });
  
  //     productsArray.forEach(product => productGrid.appendChild(product));
  //   };
  
  //   // Event Listeners
  //   searchButton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     filterProducts();
  //   });
  
  //   sortSelect1.addEventListener('change', () => {
  //     sortProducts(sortSelect1.value);
  //   });
  
  //   sortSelect2.addEventListener('change', () => {
  //     sortProducts(sortSelect2.value);
  //   });
  
  //   // Inicialização: Ordenar produtos inicialmente pelo nome
  //   sortProducts('name');
  // });
  
  document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const productGrid = document.getElementById('productGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');

      // Função para exibir a mensagem de erro
      const displaynoProductsMessage = (display) => {
        noProductsMessage.style.display = display ? 'block' : 'none';
      }
  
    searchButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      // Percorre cada produto na grid e verifica se contém o termo de busca
      let foundProducts = false;
      Array.from(productGrid.children).forEach(productCard => {
        const productName = productCard.getAttribute('data-name').toLowerCase();
        if (searchTerm === '' || productName.includes(searchTerm)) {
          productCard.style.display = 'block'; // Mostra o produto correspondente
          foundProducts = true;
        } else {
          productCard.style.display = 'none'; // Esconde produtos que não correspondem
        }
      });
  
      // Mostra ou esconde a mensagem de nenhum produto encontrado
      if (foundProducts) {
        noProductsMessage.style.display = 'none'; // Esconde a mensagem se encontrou produtos
      } else {
        noProductsMessage.style.display = 'block'; // Mostra a mensagem se não encontrou produtos
      }
    });
  });
  


