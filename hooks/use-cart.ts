import { create } from "zustand";
import { Product } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";


interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void; 
    removeAll: ()=>void;
}



const useCart = create(
    persist<CartStore>((set, get)=>({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItems = currentItems.find((items)=>items.id === data.id)
            if (existingItems){
                return toast("Item ya esta en el carrito")
            }


            set({items: [...get().items, data]})
            toast.success("Item añadido en carrito")
        },
        removeItem: (id:string) => {
            set({items: [...get().items.filter((item)=> item.id !== id)]})
            toast.success("Item removido del carrito")
        },
        removeAll: ()=> set({ items: []})
    }), {
        name: "cart-storage",
        storage: createJSONStorage(()=> localStorage)
    })
)


export default useCart