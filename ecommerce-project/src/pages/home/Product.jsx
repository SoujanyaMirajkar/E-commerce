import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from 'axios';

export function Product({ product, loadCart }) {
    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        await axios.post('/api/cart-items', {
            productId: product.id,
            quantity
        });
        await loadCart();
    }

    const selectQuantity = (e) => {
        const selectedQty = Number(e.target.value);
        setQuantity(selectedQty);
    }

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image" src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatMoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select
                    value={quantity}
                    onChange={selectQuantity}
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </div>

            <div className="product-spacer"></div>

            <button
                className="add-to-cart-button button-primary"
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}
