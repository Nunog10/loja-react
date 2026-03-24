const BASE_URL = 'https://dummyjson.com';

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao obter dados da API.');
  }

  return response.json();
}

export async function getAllProducts() {
  return fetchData(`${BASE_URL}/products?limit=0`);
}

export async function getCategories() {
  return fetchData(`${BASE_URL}/products/categories`);
}

export async function getProductById(id) {
  return fetchData(`${BASE_URL}/products/${id}`);
}