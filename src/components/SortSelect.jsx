function SortSelect({ sortOption, onChange }) {
  return (
    <select
      className="form-select"
      value={sortOption}
      onChange={onChange}
    >
      <option value="">Ordenar por...</option>
      <option value="title-asc">Nome A-Z</option>
      <option value="title-desc">Nome Z-A</option>
      <option value="price-asc">Preço crescente</option>
      <option value="price-desc">Preço decrescente</option>
    </select>
  );
}

export default SortSelect;