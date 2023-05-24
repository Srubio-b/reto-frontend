import './Cart.css'

import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart, images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        };
    
        const showNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        };
    

    return (
    <li>
        <img
        src={images[currentImageIndex]}
        alt={title}
        />
        <div className='buttons-next'>
        <button onClick={showPreviousImage}>{'<'}</button>
        <button onClick={showNextImage}>{'>'}</button>
        </div>
        <div>
        <strong>{title}</strong> - ${price}
        </div>

        <footer>
        <small>
            Cantiadad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />

        <aside className='cart'>
        <ul>
            {cart.map(product => (
            <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
            />
            ))}
        </ul>

        <button onClick={clearCart}>
            <ClearCartIcon />
        </button>
        </aside>
    </>
    )
}