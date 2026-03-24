# Catálogo de Produtos com React

## Descrição
Este projeto foi desenvolvido em **React** com **Vite** e **Bootstrap**, com o objetivo de demonstrar o consumo de uma **API pública** e a apresentação dinâmica de dados num website moderno.

A aplicação permite visualizar uma lista de produtos, pesquisar por nome, filtrar por categoria, ordenar resultados, navegar por páginas e consultar o detalhe individual de cada produto.

## Objetivo
O principal objetivo deste projeto é aplicar os conceitos fundamentais de React num contexto prático, incluindo:

- criação de componentes reutilizáveis;
- utilização de `props`;
- gestão de estado com `useState`;
- utilização de efeitos com `useEffect`;
- consumo de dados de uma API pública;
- organização modular do projeto;
- criação de uma interface responsiva com Bootstrap.

## API utilizada
A API escolhida foi a **DummyJSON**.

Esta API fornece dados em formato JSON e disponibiliza endpoints adequados para:
- listagem de produtos;
- pesquisa;
- filtragem por categoria;
- detalhe de produto;
- paginação.

## Funcionalidades implementadas
- Página inicial com apresentação do projeto
- Navbar responsiva
- Footer
- Listagem dinâmica de produtos
- Página de detalhe individual
- Pesquisa por nome
- Filtro por categoria
- Ordenação por nome e preço
- Paginação
- Tratamento de:
  - carregamento
  - erro
  - ausência de dados

## Tecnologias utilizadas
- React
- Vite
- Bootstrap
- React Router DOM
- JavaScript
- HTML
- CSS

## Estrutura do projeto
```bash
src/
  components/
    Navbar.jsx
    Footer.jsx
    ProductCard.jsx
    Loader.jsx
    ErrorMessage.jsx
    SearchBar.jsx
    CategoryFilter.jsx
    SortSelect.jsx
  pages/
    Home.jsx
    Products.jsx
    ProductDetail.jsx
  services/
    api.js
  App.jsx
  main.jsx
  index.css