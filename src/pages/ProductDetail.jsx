import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError('');

        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="container py-5">
        <Loader message="A carregar detalhe do produto..." />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-5">
        <ErrorMessage message={error} />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="container py-5">
        <div className="alert alert-warning" role="alert">
          Produto não encontrado.
        </div>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Link to="/produtos" className="btn btn-outline-secondary mb-4">
        ← Voltar aos produtos
      </Link>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="row g-0">
          <div className="col-lg-5 bg-light d-flex align-items-center justify-content-center p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
          </div>

          <div className="col-lg-7">
            <div className="card-body p-4 p-lg-5">
              <span className="badge text-bg-primary mb-3">
                {product.category}
              </span>

              <h1 className="card-title mb-3">{product.title}</h1>

              <p className="text-muted mb-4">{product.description}</p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">Preço</small>
                    <strong className="fs-4 text-primary">
                      {product.price.toFixed(2)} €
                    </strong>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">Desconto</small>
                    <strong className="fs-4">{product.discountPercentage}%</strong>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">Marca</small>
                    <strong>{product.brand || 'Não disponível'}</strong>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">Stock</small>
                    <strong>{product.stock}</strong>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">Classificação</small>
                    <strong>{product.rating}</strong>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <small className="text-muted d-block">ID do produto</small>
                    <strong>{product.id}</strong>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-primary" disabled>
                  Adicionar ao carrinho
                </button>

                <Link to="/produtos" className="btn btn-outline-dark">
                  Continuar a explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;