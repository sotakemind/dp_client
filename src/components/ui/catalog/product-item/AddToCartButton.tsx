import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import { FC } from "react";

import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri';



const AddToCartButton: FC<{product: IProduct}> = ({
    product}) => {
        const { addToCart, removeFromCart } = useActions()
        const { items } = useCart()

        const CurrentElement = items.find(
            cartItem => cartItem.product.id == product.id
        )

        return (
            <div>
                <button
                className="text-secondary"
                    onClick={() => 
                        CurrentElement
                          ? removeFromCart({ id: CurrentElement.id })
                            : addToCart({
                                product,
                                quantity: 1,
                                price: product.price,
                            })
                    }
                >
                    {CurrentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine /> }
                </button>
            </div>
        )
    }

    export default AddToCartButton