import { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortSelect from '../components/SortSelect';

function Products() {
  const PRODUCTS_PER_PAGE = 12;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoadingProducts(true);
        setError('');

        const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const data = await getProducts(
          submittedSearch,
          selectedCategory,
          PRODUCTS_PER_PAGE,
          skip
        );

        setProducts(data.products);
        setTotalProducts(data.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingProducts(false);
      }
    }

    loadProducts();
  }, [submittedSearch, selectedCategory, currentPage]);

  function handleSearch() {
    setSelectedCategory('');
    setCurrentPage(1);
    setSubmittedSearch(searchTerm);
  }

  function handleCategoryChange(event) {
    const value = event.target.value;

    setSelectedCategory(value);
    setSearchTerm('');
    setSubmittedSearch('');
    setCurrentPage(1);
  }

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const selectedCategoryName =
    categories.find((category) => category.slug === selectedCategory)?.name || '';

  return (
    <main className="container py-5">
      <h1 className="mb-3">Produtos</h1>
      <p className="text-muted mb-4">
        Listagem de produtos obtidos através da API pública DummyJSON.
      </p>

      <div className="row g-2 mb-4">
        <div className="col-lg-5">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        <div className="col-lg-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
            disabled={loadingCategories}
          />
        </div>

        <div className="col-lg-3">
          <SortSelect
            sortOption={sortOption}
            onChange={handleSortChange}
          />
        </div>
      </div>

      {submittedSearch && !loadingProducts && !error && (
        <p className="mb-2">
          Resultados para: <strong>{submittedSearch}</strong>
        </p>
      )}

      {selectedCategory && !loadingProducts && !error && (
        <p className="mb-2">
          Categoria selecionada: <strong>{selectedCategoryName}</strong>
        </p>
      )}

      {loadingProducts && <Loader message="A carregar produtos..." />}

      {error && <ErrorMessage message={error} />}

      {!loadingProducts && !error && products.length === 0 && (
        <div className="alert alert-warning" role="alert">
          Não foram encontrados produtos.
        </div>
      )}

      {!loadingProducts && !error && sortedProducts.length > 0 && (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 mt-5 flex-wrap">
            <button
              className="btn btn-outline-primary"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            <span className="fw-semibold">
              Página {currentPage} de {totalPages || 1}
            </span>

            <button
              className="btn btn-outline-primary"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage >= totalPages}
            >
              Seguinte
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Products;