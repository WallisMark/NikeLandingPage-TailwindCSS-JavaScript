import myLogo from '../assets/images/WallisMark.png'
import hambuger from '../assets/icons/hamburger.svg'
// import navLinks from '../constants/index.js'

const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
       <img 
       src={myLogo}
       alt="this is Wallis' logo"
       width={150}
       
       
       >
       </img>
       </a>
      <div className="flex-1 flex justify-center gap-20 max-lg:hidden text-gray-600 relative">
      
        <a href="#home" className= "text-gray-600 hover:text-red-600">Home</a>
        <a href="#about-us" className= "text-gray-600 hover:text-red-600">About Us</a>
        <a href="#products" className= "text-gray-600 hover:text-red-600">Products</a>
        <a href="#contus-us" className= "text-gray-600 hover:text-red-600">Contact Us</a> 
        
      </div>
      <div className='hidden max-lg:block'> 
          <img 
          src={hambuger}
          alt="this is humbuger icon"
          width={25}
          height={25}
          />
        </div>
      <div className="border-b-2 border-gray-100 absolute bottom-0 left-0 right-0"></div>
      </nav>
    </header>
  )
}

export default NavBar
