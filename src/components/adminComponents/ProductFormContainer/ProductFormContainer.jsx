import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI"
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import { useToast } from "../../../context/ToastContext/useToast";
import { MESSAGES } from "../../../utils/constants";

import "../ProductFormContainer/ProductFormContainer.css";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
  });

  const { showSuccess, showError } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
        imageUrl,
      };

      await createProduct(productData);
      showSuccess(MESSAGES.PRODUCT_CREATED);

      setProduct({ name: "", price: "", category: "", description: "", stock: "" });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
      showError(MESSAGES.PRODUCT_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};