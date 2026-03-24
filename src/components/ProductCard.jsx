import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ height: '220px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-primary mb-2 align-self-start">
            {product.category}
          </span>

          <h5 className="card-title">{product.title}</h5>

          <p className="card-text text-muted">
            {product.description.length > 100
              ? product.description.substring(0, 100) + '...'
              : product.description}
          </p>

          <p className="fw-bold fs-5 mt-auto mb-3">
            {product.price.toFixed(2)} €
          </p>

          <Link to={`/produto/${product.id}`} className="btn btn-outline-primary">
            Ver detalhe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;