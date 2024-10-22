"use client"

import Container from "@/components/ui/container"
import useCart from "@/hooks/use-cart"
import { useEffect, useState } from "react"

const CartPage = () => {
    const cart = useCart()


    return (
        <div className="bg-black">
            <Container>
                <div className="py-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Carrito de compras</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:cols-pan-2">
                            {cart.items.length === 0 && <p className="text-neutral-500">No hay Items añadidos</p> }
                            <ul>
                                {cart.items.map((item)=>(
                                    <CartItems />
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default CartPage