
import image9 from '../assets/images/image9.jpeg'
import image10 from '../assets/images/image10.jpeg'
import image8 from '../assets/images/image8.png'
import image14 from '../assets/images/image14.jpeg'
import image15 from '../assets/images/image15.jpeg'

const  Section3 = () =>{
    return (

        <section  className='image4'>

        <div className='image-container'>
       
         <div className='mini1'>
         <h6 className='image-text text-xs w-[60%] mt-[100%]'>MICHEAL SMITH IN CONCERT</h6>
         <h6 className='mini-text1 text-xs'>August 25
         </h6>

         <img className='pt-[20%] mb-[10%]'src={image8} alt="" srcSet=''/>

              
         <div className='mini4 pt-[5%] w-[70%] ml-[60%]'>
         <h6  className='image-text2 w-[70%] mt-[70%] text-xs '>90's DISCO NIGHT</h6>
         <h6 className='mini-text1 text-xs pb-[7%]'>August 28</h6>
         </div>

         <span>
            <img className='w-[10vw] ml-[160%] mt-[25%] ' src={image15} alt="" srcSet='' />
         </span>

        

  
  
         </div>
  
         <div className='mini2 '>
         <h6  className='image-text2 w-[40%] mt-[72%]  text-xs ' >STREET ART FEST</h6>
         <h6 className='mini-text1 text-xs mb-[40%]'>November 28</h6>

          
         <div className='mini5 pt-[10%] w-[100%] ml-[40%]'>
         <h6  className='image-text2 w-[70%] mt-[72%] text-xs '>MORDERN BALLET</h6>
         <h6 className='mini-text1 text-xs pb-[7%]'>August 25</h6>
         
        
         </div> 
         
             
         <span>
            <img className='w-[10vw] ml-[150%] ' src={image14} alt="" srcSet='' />
         </span>


        
         </div>

        
  
         <div className='mini3'>
  
         <h6  className='image-text3 text-xs w-[70%] ' > ANABELLE IN CONCERT</h6>
         <h6 className='mini-text1 text-xs'>August 28</h6>


         <span>
            <img className='w-[12vw] ml-[90%] pl-[20%] mt-[-32%]' src={image10} alt="" srcSet='' />
         </span>

  
         <div className='pl-[5%] w-[10vw]'>
            <img src={image9} alt=""  srcSet=""/>

                  
         <div className='mini6 pt-[30%] w-[200%] ml-[100%] mt-[5%]'>
         <h6  className='image-text2 w-[70%] mt-[72%] text-xs '>SMOKE SHOW</h6>
         <h6 className='mini-text1 text-xs pb-[7%]'>August 25</h6>


         


         

         </div>



         


       
           

         </div>

         
  
         </div>

        
         
  
  
         </div>


  
  
  
       </section>
  
    )
};



export default Section3;