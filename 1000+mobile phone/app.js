const products = [];

for (let i = 1; i <= 1000; i++) {
  const product = {
    id: i,
    name: `Mobile Phone ${i}`,
    brand: getRandomBrand(),
    price: getRandomPrice(),
    image: `product-images/mobile-phone-${i}.jpg`
  };
  products.push(product);
}

function getRandomBrand() {
  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Huawei'];
  return brands[Math.floor(Math.random() * brands.length)];
}

function getRandomPrice() {
  return Math.floor(Math.random() * 1000) + 100;
}

const jsonData = JSON.stringify(products, null, 2);
fs.writeFileSync('product-data.json', jsonData);