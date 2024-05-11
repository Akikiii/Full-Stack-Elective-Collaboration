

function Btn(props){
    return(
        <button className='bg-[#c30404] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-[#5E0202] duration-500'>
            {props.children}
        </button>
    );
}

export default Btn