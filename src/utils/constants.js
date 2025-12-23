// ===== CATEGORÍAS =====
export const CATEGORIES = {
  TORTA: "Tortas",
  ALFAJOR: "Alfajor",
  COOKIE: "Cookie",
};

// Array de categorías para iterar
export const CATEGORIES_LIST = [
  { id: "tortas", name: CATEGORIES.TORTA, path: `/category/${CATEGORIES.TORTA}` },
  { id: "alfajores", name: CATEGORIES.ALFAJOR, path: `/category/${CATEGORIES.ALFAJOR}` },
  { id: "cookies", name: CATEGORIES.COOKIE, path: `/category/${CATEGORIES.COOKIE}` },
];

// ===== RUTAS =====
export const ROUTES = {
  HOME: "/",
  CART: "/carrito",
  CONTACT: "/contacto",
  ADMIN: "/admin",
  ADMIN_PRODUCTS: "/admin/alta-productos",
  CATEGORY: (category) => `/category/${category}`,
  DETAIL: (id) => `/detail/${id}`,
};

// ===== MENSAJES =====
export const MESSAGES = {
  CART_EMPTY: "Tu carrito está vacío",
  PRODUCT_ADDED: (name) => `${name} agregado al carrito`,
  QUANTITY_UPDATED: "Cantidad actualizada en el carrito",
  PRODUCT_DELETED: "Producto eliminado del carrito",
  CART_CLEARED: "Carrito vaciado",
  CHECKOUT_SUCCESS: "¡Compra realizada con éxito!",
  CHECKOUT_CONFIRM: "¿Seguro que quiere finalizar la compra?",
  MIN_QUANTITY: "Debes seleccionar al menos 1 unidad",
  MAX_STOCK: (stock) => `Stock máximo disponible: ${stock} unidades`,
  PRODUCT_CREATED: "Producto cargado con éxito",
  PRODUCT_ERROR: "Error al cargar el producto",
  LOADING_PRODUCTS: "Cargando productos...",
  LOADING_PRODUCT: "Cargando producto...",
};

// ===== STOCK DEFAULT =====
export const DEFAULT_STOCK = 10;