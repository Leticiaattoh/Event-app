import K from '../constants'




const Shows = () =>{
    return (
        <div className='grid grid-cols-3 w-[75vw] ml-[15%] gap-4 mt-[-7%] leading-3'>
            {
                K.SHOWS.map(( show, index) => {
                    console.log (`${index}: ${show.text}`);
                  return(
                    <div key={index} >    
                    <h3 className='text-3xl text-black text-center '>{show.text}</h3>
                    <h6 className='text-xl text-[#9A28D7] pb-[2%] pt-[0.5%] text-center'>{show.date}</h6>
                    <h6 className='text-xs text-[#777777] text-center' >{show.description}</h6>
                    <p className='text-xs text-[#777777] text-center  underline'>{show.info}</p>
                   </div>
        
                  )
                     
                     

                  



                }

            
            )
            }
        </div>

    )
};








export default Shows;