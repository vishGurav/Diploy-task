import React, { useEffect } from "react";
// import a2 from './img/a2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faCheck,faStar,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home=()=>{
    useEffect(() => {
        AOS.init({ duration: 1000,offset: 200,once: true, }); // Initialize AOS with options
      }, []);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1100, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };
    return(
        <>
        

            <div className="bg-white">

                <section class="py-10 sm:py-16 lg:py-24 border- border-red-500">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border- border-red-500">
                        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className="border- border-red-500 bg-white space-y-5 space-x-2">
                                <h1 class="text-4xl font-bold text-[#17262b] leading-10 tracking-tight sm:text-4xl font-cerebri lg:text-6xl"> Create and sell custom products</h1>
                                <ul className="font-roboto text-[#485256] text-base font-bold">
                                    <li><FontAwesomeIcon icon={faCheck} /> 100% Free to use</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> 900+ High-Quality Products</li>
                                    <li><FontAwesomeIcon icon={faCheck} /> Largest global print network</li>
                                </ul>
                                <div class=" sm:flex sm:items-center space-y-2 sm:space-x-8">
                                    <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-roboto font-semibold text-white  transition-all duration-200 bg-green-500 hover:bg-green-600" role="button"> Start for free </a>
                                    <a href="#" title="" class="inline-flex items-center border border-gray-600 px-4 py-2 text-base font-roboto font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                        <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path fill="#0000" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        How it works?
                                    </a>
                                </div>
                                <p className="font-roboto text-[#39b75d] text-base font-bold">Trusted by over 8M sellers around the world</p>
                            </div>
                            <div className="border- border-red-500 h-[400px] sm:h-[550px] relative">
                                {/* <div className=" absolute top-5 border-2 border-red-600 w-[300px] h-[350px]"></div>
                                <div className=" absolute bottom-5 left-[200px] border-2 border-red-600 w-[300px] h-[350px]"></div>   */}
                                 <img className="w-full h-full" src="/img/a3.gif" alt="" />
      
                            </div>
                        </div>
                    </div>
                </section>
            </div>

<section  class=" py-10 sm:py-16 lg:py-24 border- border-red-500 relative">
    <div class=" h-auto px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border- border-red-500 flex flex-wrap justify-center gap-3">
        <div data-aos="fade-up" className=" w-[330px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  rounded-full ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="" />
            </div>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">Higher Profits</h1>

            <p className="text-[#485256] leading-6 font-roboto  text-base">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
        <div data-aos="fade-up" className="w-[330px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  rounded-full ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="" />
            </div>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">Robust Scaling</h1>

            <p className="text-[#485256] leading-6 font-roboto  text-base">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div data-aos="fade-up" className="w-[330px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  rounded-full ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="" />
            </div>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">Best Selection</h1>

            <p className="text-[#485256] leading-6 font-roboto  text-base">With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
     </div>
     <div className="absolute -bottom-8 sm:-bottom-16 w-full flex justify-center">
          <div className="w-30 h-8 sm:h-16 bg-white z-40" style={{
            width: '30%', 
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
           
          }}></div>
      </div>
</section>


<section  class=" bg-[#F7F7F7] py-10 sm:py-16 lg:py-24 border- border-red-500 relative">
    <div class="h-auto sm:h-[600px] px-4 mx-auto max-w-7xl sm:px-6 lg:px-16 border- border-red-500 flex flex-col items-center lg:flex-row lg:items-end justify-start">
        <div className=" relative border- border-black h-[300px] md:h-full w-full sm:w-[500px] bg-[#203741] rounded-tl-3xl rounded-tr-3xl sm:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl  flex flex-col  space-y-5">
           <img className="w-full h-full rounded-tl-3xl rounded-tr-3xl sm:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl " src="/img/a5.png" alt="" />
           <div data-aos="fade-up" className="z-40 w-[250px] h-[300px] absolute -right-24 bottom-10 border- border-black hidden lg:flex">
                <img className=" rounded-lg w-full h-full" src="/img/a4.gif" alt="" />
           </div>
        </div>  
        <div data-aos="fade-right" className="border- border-black h-4/5 flex-1 p-10 lg:pl-32 rounded-br-3xl rounded-bl-3xl sm:rounded-none lg:rounded-tr-3xl lg:rounded-br-3xl flex flex-col justify-center space-y-8 bg-white">
            <h1 className="text-[#17262b] text-2xl sm:text-3xl font-bold font-cerebri">Easily add your design to a wide range of products</h1>
            <p className="text-[#485256] text-base sm:text-xl font-roboto">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <a href="" className="text-[#39b75d] font-bold">All products <FontAwesomeIcon icon={faArrowRight} /></a>
            
        </div>
    </div>

    <div class=" h-auto px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border- border-red-500 flex flex-wrap justify-center gap-3  ">
        <div data-aos="fade-down" className="w-[310px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="" />
            </div>
            <div className="">
            <h1 className="text-[#29AB51] text-2xl font-cerebri font-bold leading-8">Create</h1>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">custom products</h1>
            </div>
            


            <p className="text-[#485256] leading-6 font-roboto  text-base">Easily add your designs to a wide range of products using our free tools</p>
        </div>
        <div data-aos="fade-down" className="w-[310px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/your-products.png" alt="" />
            </div>
            <div className="">
            <h1 className="text-[#29AB51] text-2xl font-cerebri font-bold leading-8">SELL</h1>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">on your terms</h1>
            </div>
            


            <p className="text-[#485256] leading-6 font-roboto  text-base">you choose the products, sale price, and where to sell.</p>
        </div>
        <div data-aos="fade-down" className="w-[310px] h-[400px] border- black border- flex flex-col justify-between p-4 py-8">
            <div className="w-40 h-40  ">
                <img className="w-full h-full " src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="" />
            </div>
            <div className="">
            <h1 className="text-[#29AB51] text-2xl font-cerebri font-bold leading-8">WE HANDLE</h1>
            <h1 className="text-[#17262b] text-2xl font-cerebri font-bold leading-8">fulfillment</h1>
            </div>
            


            <p className="text-[#485256] leading-6 font-roboto  text-base">once an order is placed, we automatically handle all the printing  and delivery logistics.</p>
        </div>
     </div>
     <div className="absolute -bottom-8 sm:-bottom-16 w-full flex justify-center">
          <div className="w-30 h-8 sm:h-16 bg-[#F7F7F7] z-40" style={{
            width: '30%', 
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            
          }}></div>
      </div>
</section>



<section class="py-20 px-4  overflow-hidden bg-white sm:pt-16 lg:pt-24 relative">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Connect your store</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Printify easily integrates with major e-commerce platforms and marketplaces</p>
        </div>
    </div>

    {/* <img class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png" alt="" /> */}
    <div class=" my-10 relative h-[500px] md:h-[600px] px-2 mx-auto max-w-7xl sm:px-6  border- border-red-500 ">
          <div data-aos="zoom-in" className=" absolute w-16 h-16 md:w-28 md:h-28  border- border-black top-[40%] left-[43%] rounded-xl hover:scale-110 duration-500">
            <img className="w-full h-full rounded-xl text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAS2IvTPt2KsgdgPb2hs5Uf-NF0OLmph-Pg&s" alt="" />
          </div>

          <div data-aos="fade-left" className=" absolute h-12 w-12 md:w-20 md:h-20  border- border-black top-[25%] left-[30%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_-bQ399xl-yfJYhbLraU-w0yWBcppLf8NA&s" alt="" />
          </div>

          <div data-aos="fade-left" className=" absolute w-20 h-20 md:w-24 md:h-24  border- border-black top-[40%] left-[10%] md:top-[60%] md:left-[35%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://logowik.com/content/uploads/images/686_prestashop.jpg" alt="" />
          </div>

          <div data-aos="fade-left" className=" absolute w-16 h-16 md:w-32 md:h-32 border- border-black top-[75%] left-[10%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://www.rogersoft.com/storage/attachments/1694683067-1.jpeg" alt="" />
          </div>

          <div data-aos="fade-left" className=" absolute w-12 h-12 md:w-16 md:h-16  border- border-black top-[65%] md:top-[80%] left-[38%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://cdn.worldvectorlogo.com/logos/more.svg" alt="" />
          </div>

          <div data-aos="fade-left" className=" absolute w-20 h-20 md:w-32 md:h-32 border- border-black top-[75%] left-[55%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://i.pinimg.com/originals/07/10/4f/07104f00872551c28907f821554ec4ad.png" alt="" />
          </div>

          <div data-aos="fade-right" className=" absolute w-12 h-12 md:w-32 md:h-32 border- border-black top-[60%] left-[75%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png" alt="" />
          </div>

          <div data-aos="fade-right" className=" absolute w-16 h-16  border- border-black top-[50%] left-[65%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXRpjnE58eARP3gq8nH50wnC_tU2bnxzexQ&s" alt="" />
          </div>

          <div data-aos="fade-right" className=" absolute w-16 h-16 md:w-24 md:h-24  border- border-black top-[20%] md:top-[30%] left-[60%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://1000logos.net/wp-content/uploads/2017/08/Squarespace-Logo.png" alt="" />
          </div>

          <div data-aos="fade-right" className=" absolute w-12 h-12 md:w-24 md:h-24  border- border-black top-[10%] left-[80%] rounded-xl hover:scale-110 duration-500 shadow-2xl">
            <img className="w-full h-full rounded-xl text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqjt5eyiXWXRmbC2pZgmyI_5J7nfrQnSFnQ&s" alt="" />
          </div>

    </div>
     

    <div style={{ backgroundImage: "url('/img/a2.png')",backgroundPosition: ' center' }} className=" h-[150px] px-4 mx-auto max-w-6xl sm:px-6 lg:px-16 border-  border-red-500 flex justify-between items-center rounded-3xl">
        <h1 className="text-[#1f6b45] text-base md:text-2xl font-cerebri font-bold ">Are you a large business looking <br/> for custom solutions?</h1>
        <a href="#" title="" class=" w-40 py-2 text-center bg-white text-base font-semibold  transition-all duration-200  rounded-sm border  hover:text-green-600" role="button">Talk to sales</a>

    </div>
        
</section>


<section  class=" bg-[#F7F7F7] py-10 sm:py-16 lg:py-24 border- border-red-500 space-y-5 relative">
    <div class=" h-[300px] px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border- border-red-500 flex flex-col md:flex-row justify-start gap-5">
        <div className="w-full sm:w-[400px] h-full border- border-black flex items-center text-[#353A47] font-cerebri text-3xl sm:text-5xl leading-snug  font-bold">
                Trusted by over 8M sellers around the world
        </div>
        <div data-aos="fade-right" className="w-full sm:w-[400px] h-full border- border-black flex items-center text-[#485256] font-roboto text-base leading-7">
        Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </div>
        
     </div>
     {/* <div class=" h-[400px] px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-2 border-red-500 flex justify-between"> */}
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000}  transitionDuration={500} arrows={false}
        className="h-[350px] px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border- border-red-500"
        >

        <div data-aos="fade-up" className="w-[370px] bg-white h-[250px] border- border-red-500 rounded-2xl p-6">
            <div className="w-full h-2/5 border- boder-black flex flex-row items-center  gap-4">
            <div className="w-16 h-16 border- border-red-500 rounded-xl">
                <img className="w-full h-full rounded-xl" src="https://printify.com/pfh/media/nikki-TJP4NANB.png" alt="" />
            </div>
            <div className="h-full flex-1 border- border-red-500 flex flex-col justify-center ">
                    <h1 className="font-cerebri text-base font-semibold">Nikki</h1>
                    <a href="" className="font-roboto text-sm text-green-500">Store link</a>
                    <div className="flex flex-row">
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />

                    </div>
            </div>
            </div>
            <div className="w-full h-3/5 border- boder-black text-[#485256] font-roboto text-sm flex items-center">
            <p> We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. </p>
            </div>

        </div>
         <div data-aos="fade-up" className="w-[370px] bg-white h-[250px] border- border-red-500 rounded-2xl p-6">
            <div className="w-full h-2/5 border- boder-black flex flex-row items-center  gap-4">
            <div className="w-16 h-16 border- border-red-500 rounded-xl">
                <img className="w-full h-full rounded-xl" src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" alt="" />
            </div>
            <div className="h-full flex-1 border- border-red-500 flex flex-col justify-center ">
                    <h1 className="font-cerebri text-base font-semibold">Jonh</h1>
                    <a href="" className="font-roboto text-sm text-green-500">developer</a>
                    <div className="flex flex-row">
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />

                    </div>
            </div>
            </div>
            <div className="w-full h-3/5 border- boder-black text-[#485256] font-roboto text-sm flex items-center">
            <p> We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. </p>
            </div>

        </div>
        <div data-aos="fade-up" className="w-[370px] bg-white h-[250px] border- border-red-500 rounded-2xl p-6">
            <div className="w-full h-2/5 border- boder-black flex flex-row items-center  gap-4">
            <div className="w-16 h-16 border- border-red-500 rounded-xl">
                <img className="w-full h-full rounded-xl" src="https://static.vecteezy.com/system/resources/previews/024/704/216/non_2x/young-businesswoman-illustration-ai-generative-free-photo.jpg" alt="" />
            </div>
            <div className="h-full flex-1 border- border-red-500 flex flex-col justify-center ">
                    <h1 className="font-cerebri text-base font-semibold">Anvi</h1>
                    <a href="" className="font-roboto text-sm text-green-500">photographer</a>
                    <div className="flex flex-row">
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />

                    </div>
            </div>
            </div>
            <div className="w-full h-3/5 border- boder-black text-[#485256] font-roboto text-sm flex items-center">
            <p> We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. </p>
            </div>

        </div>
        <div data-aos="fade-up" className="w-[370px] bg-white h-[250px] border- border-red-500 rounded-2xl p-6">
            <div className="w-full h-2/5 border- boder-black flex flex-row items-center  gap-4">
            <div className="w-16 h-16 border- border-red-500 rounded-xl">
                <img className="w-full h-full rounded-xl" src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" alt="" />
            </div>
            <div className="h-full flex-1 border- border-red-500 flex flex-col justify-center ">
                    <h1 className="font-cerebri text-base font-semibold">Sanket</h1>
                    <a href="" className="font-roboto text-sm text-green-500">Store link</a>
                    <div className="flex flex-row">
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />
                         <FontAwesomeIcon className="text-amber-500" icon={faStar} />

                    </div>
            </div>
            </div>
            <div className="w-full h-3/5 border- boder-black text-[#485256] font-roboto text-sm flex items-center">
            <p> We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. </p>
            </div>

        </div>
        </Carousel>;
       
        
     {/* </div/> */}
     <div className="absolute -bottom-8 sm:-bottom-16 w-full flex justify-center">
          <div className="w-30 h-8 sm:h-16 bg-[#F7F7F7]     z-4 0" style={{
            width: '30%', 
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
           
          }}></div>
      </div>
</section>

<section  class=" bg-white py-10 sm:py-16 lg:py-24 border- border-red-500 space-y-5">
<div class=" h-[600px] px-4 mx-auto max-w-7xl sm:px-6 lg:px-16 border- border-red-500 flex justify-start">
    <div data-aos="fade-left" className="border- border-black h-full w-[550px] bg-[#203741] rounded-3xl sm:rounded-none md:rounded-bl-3xl md:rounded-tl-3xl p-4 sm:px-20 sm:p-12 flex flex-col justify-center space-y-5">
        <h1 className="text-white font-bold text-4xl sm:text-5xl font-cerebri">Make Money, Risk-Free</h1>
        <p className="text-white font-semibold text-base font-cerebri">You pay for fulfillment only when you make a sale</p>
        <div className=" w-full h-[200px] border- bg-[#17262B] border-white rounded-xl p-6 flex flex-col justify-around">
            <div className="w-full h-10 flex justify-between items-center text-white font-roboto text-base font-semibold"> <h1>You sell a t-shirt</h1> <h1>$ 30</h1></div>
            <div className="w-full h-10 flex justify-between items-center text-white font-roboto text-base font-semibold"> <h1>You sell a t-shirt</h1> <h1>$ 30</h1></div>
            <div className="w-full h-[1px] bg-white flex justify-between items-center"></div>
            <div className="w-full h-10 flex justify-between items-center text-green-500 font-roboto text-base font-semibold"> <h1>You sell a t-shirt</h1> <h1>$ 30</h1></div>



        </div>
        <a href="#" title="" class=" w-28 py-2 text-center  text-base font-semibold  text-white transition-all duration-200  rounded-sm bg-green-500  hover:bg-green-600" role="button">Sign up</a>
        <p className="text-[#c4c7c8]  text-sm font-cerebri">100% Free to use · 900+ Products · Largest print network</p>

    </div>

    
    <div className="border- border-black h-full flex-1 rounded-tr-3xl rounded-br-3xl hidden md:flex">
        <img className="w-full h-full rounded-tr-3xl rounded-br-3xl" src="/img/a1.png" alt="" />
    </div>
</div>

</section>

           
        </>
    )
}
export default Home