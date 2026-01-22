import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import axios from 'axios';

export function DeliveryOptions({ cartItem, deliveryOptions, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliverOption) => {


                let priceString = 'FREE Shipping';
                if (deliverOption.priceCents > 0) {
                    priceString = `${formatMoney(deliverOption.priceCents)}-Shipping`;
                }

                const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliverOption.id
                    });
                    await loadCart();
                }
                return (
                    <div key={deliverOption.id} className="delivery-option"
                        onClick={updateDeliveryOption}
                    >
                        <input type="radio"
                            checked={cartItem.deliveryOptionId === deliverOption.id}
                            readOnly
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`}
                            value={deliverOption.id}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliverOption.estimatedDeliveryTime).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}