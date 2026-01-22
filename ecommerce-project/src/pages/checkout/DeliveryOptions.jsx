import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export function DeliveryOptions({ cartItem, deliveryOptions }) {
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
                return (
                    <div key={deliverOption.id} className="delivery-option">
                        <input type="radio"
                            checked={cartItem.deliveryOptionId === deliverOption.id}
                            onChange={() => {
                                setCart((prevCart) => {
                                    return prevCart.map((item) => {
                                        if (item.productId === cartItem.productId) {
                                            return {
                                                ...item,
                                                deliveryOptionId: deliverOption.id
                                            }
                                        }
                                        return item;
                                    })
                                })
                            }}
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