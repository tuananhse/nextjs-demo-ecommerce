import Agencies from '@/components/ui/Agencies'
import Banner from '@/components/ui/Banner'
import BestDesignComponent from '@/components/ui/BestDesignComponent/BestDesignComponent'
import BusinessEnhancement from '@/components/ui/BusinessEnhancement'
import FastenTheProcess from '@/components/ui/FastenTheProcess'
import JoinOurComponent from '@/components/ui/JoinOurComponent/JoinOurComponent'
import LatestMarketplace from '@/components/ui/LatestMarketplace'
import NewsComponent from '@/components/ui/News'
import ProductAdoptionBanner from '@/components/ui/ProductAdoptionBanner'
import SaveTimeComponent from '@/components/ui/SaveTimeComponent/SaveTimeComponent'
import TestimonialsComponent from '@/components/ui/TestimonialsComponent/TestimonialsComponent'
import VerifiedAgencies from '@/components/ui/VerifiedAgencies'
import { fetchProjects } from '@/lib/api/home'

export default async function Home() {
  const projectsData = fetchProjects()
  const [projects] = await Promise.all([projectsData])

  return (
    <div className='items-center justify-items-center min-h-screen'>
      <main className='flex flex-col row-start-2 items-center sm:items-start'>
        <Banner />
        <ProductAdoptionBanner />
        <BusinessEnhancement />
        <FastenTheProcess />
        <Agencies />
        <LatestMarketplace data={projects} />
        <VerifiedAgencies />
        <JoinOurComponent />
        <SaveTimeComponent />
        <TestimonialsComponent />
        <BestDesignComponent />
        <NewsComponent />
      </main>
    </div>
  )
}
