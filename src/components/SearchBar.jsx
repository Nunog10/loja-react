function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar produto pelo nome..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Pesquisar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;