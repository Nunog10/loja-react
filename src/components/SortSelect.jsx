function SortSelect({ sortOption, onChange }) {
  return (
    <select
      className="form-select"
      value={sortOption}
      onChange={onChange}
    >
      <option value="">Ordenar por...</option>
      <option value="Nome A-Z">Nome A-Z</option>
      <option value="Nome Z-A">Nome Z-A</option>
      <option value="Preço crescente">Preço crescente</option>
      <option value="Preço decrescente">Preço decrescente</option>
    </select>
  );
}

export default SortSelect;