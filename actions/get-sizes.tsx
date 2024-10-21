import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URl}/sizes`


const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL)

    return res.json()

}

export default getSizes;