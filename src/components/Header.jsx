import Button from '../Btn.jsx'
import AbsenotSVG from '../assets/absenotArsenal.svg'

function Header(){
    let Links = [
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
    ];
    
    return(
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src={AbsenotSVG} alt="Absenot Arsenal"/>
                    </span>
                </div>
                <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <ul className ='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                    {
                        Links.map((Link)=>(
                        <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={Link.link}>{Link.name}</a>
                        </li>
                        )) 
                    }
                    <Button>
                        Read More
                    </Button>
                </ul>
            </div>
        </div>
    );
}

export default Header