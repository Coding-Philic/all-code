const productGrid = document.querySelector('.product-grid');
const loadingIndicator = document.querySelector('.loading-indicator');

fetch('product-data.json')
  .then(response => response.json())
  .then(data => {
    const chunkSize = 50;
    const chunks = [];

    for (let i = 0; i < data.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
    }

    chunks.forEach(chunk => {
      const productHTML = chunk.map(product => {
        return `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Brand: ${product.brand}</p>
            <p>Price: $${product.price}</p>
          </div>
        `;
      }).join('');

      productGrid.insertAdjacentHTML('beforeend', productHTML);
      loadingIndicator.style.display = 'none';
    });
  })
  .catch(error => console.error('Error fetching product data:', error));