import image18 from '../assets/images/image18.jpeg'
import image19 from '../assets/images/image19.png'
import image20 from '../assets/images/image20.png'
import image21 from '../assets/images/image21.png'
import image22 from '../assets/images/image22.png'
import image23 from '../assets/images/image23.png'

const Partners = () => {
    return (
        <div
        className="h-[150vh] bg-cover "
        style={{ backgroundImage: `url(${image18})` }}  
      >


      <div className=' pt-[5%]'>

      <h1 className=" next1 mt-[20%] ml-50% text-white text-6xl text-center h-[30%] ">Partners</h1>
            </div>

            <div className='flex flex-cols-5 gap-x-20 p-[15%] mt-[-8%] gap-y-2 my-auto mx-auto'>

            <div>
                <img src={image19} alt="" srcSet="" />

            </div>
        
            <div>
                <img src={image20} alt="" srcSet="" />

            </div>
            <div>
                <img src={image21} alt="" srcSet="" />

            </div>
            <div>
                <img src={image22} alt="" srcSet="" />

            </div>
            <div>
                <img src={image23} alt="" srcSet="" />

            </div>

            </div>





            <div className='flex flex-cols-5 gap-x-20  mt-[-10%] ml-[12%]'>  
            <div>
                <img src={image21} alt="" srcSet="" />

            </div>
              
            <div>
                <img src={image22} alt="" srcSet="" />

            </div>
              
            <div>
                <img src={image23} alt="" srcSet="" />

            </div>
              
            <div>
                <img src={image19} alt="" srcSet="" />

            </div>
              
            <div>
                <img src={image20} alt="" srcSet="" />

            </div>
              





            </div>


      </div>

    


    )
}

export default Partners;