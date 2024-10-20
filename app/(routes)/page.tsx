import getBillboards from '@/actions/get-billboards';
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboards('80faddfe-e0fd-4af9-89e7-dad062ab9748')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}  />
      </div>
    </Container>
  )
}

export default HomePage