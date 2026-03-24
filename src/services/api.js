const BASE_URL = 'https://dummyjson.com';

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao obter dados da API.');
  }

  return response.json();
}

export async function getProducts(
  searchTerm = '',
  category = '',
  limit = 12,
  skip = 0
) {
  const query = searchTerm.trim();

  if (query) {
    return fetchData(
      `${BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`
    );
  }

  if (category) {
    return fetchData(
      `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
    );
  }

  return fetchData(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
}

export async function getCategories() {
  return fetchData(`${BASE_URL}/products/categories`);
}

export async function getProductById(id) {
  return fetchData(`${BASE_URL}/products/${id}`);
}