function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
  disabled = false,
}) {
  return (
    <select
      className="form-select"
      value={selectedCategory}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">Todas as categorias</option>

      {categories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;