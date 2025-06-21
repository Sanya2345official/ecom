import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";

const Products = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const [toastMessage, setToastMessage] = useState(null);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        axios.get("https://ecom-eaj8.onrender.com/api/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setToastMessage(`${product.name} added to cart!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="container mt-4">
            <h2>Products</h2>

            {/* Bootstrap Toast */}
            <div
                className="position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 9999 }}
            >
                <div
                    className={`toast align-items-center text-white bg-success border-0 ${showToast ? "show" : "hide"
                        }`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">{toastMessage}</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            onClick={() => setShowToast(false)}
                        >{""}</button>
                    </div>
                </div>
            </div>

            {/* Product Cards */}
            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={`https://ecom-eaj8.onrender.com${product.image}`}
                                className="card-img-top"
                                alt={product.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className="mt-auto">
                                    <p className="fw-bold text-success mb-2">Rs. {product.price}</p>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Products;
