import CustomButton from "../components/CustomButton"
import{ arrowRight } from '../assets/icons'



const Hero = () => {
  const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
     <div className='relative xl:w-2/5 flex flex-col justify-center iterms-start w-full max-xl:padding-x pt-28 m-50'>
      <p className="tex-xl font-montserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold">
         <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
         <br />
         <span className="text-coral-red mt-3 italic">Style</span> Wear
      </h1>
      <p className="font-montserrat tex-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">something else</p>
      <CustomButton label='Shop now'
      iconURL={arrowRight}
      
      />
      <div className="flex m-20 ml-0 mb-0 gap-14 text-xl">
      
      {statistics.map((statistic)=>(
        <div key={statistic.label}>
          <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{statistic.label}</p>
          
        </div>
      ))} 
      
      
       
      </div>

    </div> 
   

    </section>
  )
}

export default Hero
