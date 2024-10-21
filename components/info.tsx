import { Product } from "@/types"
import Currency from "./ui/currency"


interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

        <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gray-900">
                <Currency value={data.price} />
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Tamaño:</h3>
            <div></div>
        </div>
      

    </div>
  )
}

export default Info