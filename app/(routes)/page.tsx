import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {


  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboards('80faddfe-e0fd-4af9-89e7-dad062ab9748')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}  />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title="Productos Destacados" items={products} />
      </div>
    </Container>
  )
}

export default HomePage