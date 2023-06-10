import { useCart } from "@/hooks/useCart"
import { useOutside } from "@/hooks/useOutside"
import Button from "@/ui/button/Button"
import SquareButton from "@/ui/button/SquareButton"
import { convertPrice } from "@/utils/convertPrice"
import cn from 'classnames'
import { useRouter } from "next/router"
import { FC } from "react"
import { RiShoppingCartLine } from "react-icons/ri"
import CartItem from "./CartItem"


const Cart: FC = () => {
    const {isShow, setIsShow, ref} = useOutside(false)

    const { items, total } = useCart()

    const { push } = useRouter()


    return (
        <div className="relative" ref={ref}>
            <SquareButton
            Icon={RiShoppingCartLine}
            onClick={() => {
                setIsShow(!isShow)
            }}
            />

            <div className={cn("absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white",
            isShow ? 'open-menu' : 'close-menu')}
            >
            <div className="font-normal text-lg mb-5"> Корзина</div>
            

            <div>
                {items.length ? (
                    items.map(item => <CartItem item ={item} key={item.id}/>)
                ): (
                    <div className="font-light">В корзине пусто!</div>
                )}
            </div>

            <div>
                <div>Количество:</div>
                <div>{convertPrice(total)}</div>
            </div>

            <div className="text-center">
                <Button variant='white' size='sm' className="btn-link mt-5 mb-2">Разместить заказ</Button>
            </div>
        </div>
    </div>
    )
}

export default Cart