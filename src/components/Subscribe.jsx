import image25 from '../assets/images/image25.jpeg'

const Subscribe = ()=> {
    return (
        <div>
             <div
        className="h-[80vh] bg-cover "
        style={{ backgroundImage: `url(${image25})` }}  
      >


            <h1 className='text-white text-center text-4xl pt-[10%]'>Subscribe to our newsletter to get the latest trends & news</h1>
            <h6 className='text-white text-center'>Join our database NOW!</h6>

             <div  className='flex flex-cols-2 gap-x-4 ml-[25%] mt-[5%]'>
            <form>
                <input  className='w-[15vw] h-[7vh] rounded-[6px]' type="text" placeholder="name"/>
            </form>

            <form >
                
                <input className='w-[30vw] h-[7vh] rounded-[6px]' type="text " placeholder="your email"/>
               
    
            </form>

            <span> <button className='button-sub' type="submit" >Subscribe</button></span>

            </div>  
            </div>

           

        </div>
    )
};

export default Subscribe;