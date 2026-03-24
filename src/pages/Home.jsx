import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-3">
                Catálogo de Produtos com React
              </h1>

              <p className="lead mb-4">
                Este projeto foi desenvolvido em React com Bootstrap e consome
                dados de uma API pública. A aplicação permite listar produtos,
                pesquisar, filtrar, ordenar, paginar e consultar o detalhe de
                cada item.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/produtos" className="btn btn-primary btn-lg">
                  Explorar produtos
                </Link>

                <a href="#sobre-api" className="btn btn-outline-light btn-lg">
                  Saber mais
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <h2 className="h4 mb-3 text-dark">Resumo do projeto</h2>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">React + Vite</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Consumo de API pública</li>
                    <li className="list-group-item">Listagem e detalhe</li>
                    <li className="list-group-item">Pesquisa, filtro e ordenação</li>
                    <li className="list-group-item">Paginação e responsividade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Funcionalidades principais</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Listagem dinâmica</h3>
                <p className="text-muted mb-0">
                  Os produtos são obtidos a partir da API e apresentados em
                  cartões responsivos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Pesquisa e filtro</h3>
                <p className="text-muted mb-0">
                  O utilizador pode procurar produtos por nome e filtrar por
                  categoria.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Ordenação e paginação</h3>
                <p className="text-muted mb-0">
                  Os resultados podem ser organizados e distribuídos por páginas
                  para melhor navegação.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Detalhe individual</h3>
                <p className="text-muted mb-0">
                  Cada produto tem uma página própria com informação mais
                  completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-api" className="bg-light py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-3">API utilizada</h2>
              <p className="mb-3">
                A aplicação utiliza a API pública DummyJSON para obter dados de
                produtos em formato JSON. Esta API foi escolhida por
                disponibilizar informação suficiente para construir uma listagem,
                filtros, pesquisa e detalhe individual.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Objetivos técnicos</h3>
                  <ul className="mb-0">
                    <li>Componentes reutilizáveis</li>
                    <li>Props</li>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>Rotas com React Router</li>
                    <li>Interface responsiva com Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;