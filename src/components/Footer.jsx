import image1 from '../assets/images/image1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer =()=>{
    return(
        <div  className='Footer h-[150] bg-[#08011E]'>
    <div className='ml-[40%] pt-[5%] p-[5%]'>
     <img src={image1} alt=""  srcSet=''/>   
     </div>    

<ul className='mt-[-2%] font-bold text-xs flex flex-wrap gap-x-4 ml-[40%]' >
  <li><a href="#">HOME</a></li>
  <li><a href="#">ABOUT </a></li>
  <li><a href="#">EVENTS</a></li>
  <li><a href="#">NEWS</a></li>
  <li><a href="#">CONTACT</a></li>
</ul>

<div className=" ml-[35%] pt-[1%]">
            <p className=' text-[#2F2F28]'>Copyright ©2024 All rights reserved | This template is made by <span className='text-blue-700'>Leticia </span></p>

           {/* Social Icons */}
        <div className='flex gap-6 mt-5 ml-[20%] pb-[10%]'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#FFFFFF] text-xs" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-[#FFFFFF] text-xs" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-[#FFFFFF]  text-xs" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#FFFFFF] text-xs" />
          </a>
        </div>


        </div>

        </div>

    )
};

export default Footer; 