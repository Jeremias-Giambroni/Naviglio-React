export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="product-form-section">
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            placeholder="Ej: Torta de chocolate"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-row">
          <div className="form-col">
            <label>Precio:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={onChange}
              placeholder="5000"
              required
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          <div className="form-col">
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={onChange}
              placeholder="10"
              min="0"
              required
            />
            {errors.stock && <p className="error">{errors.stock}</p>}
          </div>
        </div>

        <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            placeholder="Torta, Alfajor, Cookie"
            required
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div>
          <label>Descripcion:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            placeholder="Descripción del producto..."
            required
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};