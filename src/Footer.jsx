import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faSquareInstagram,faLinkedin,faSquareTwitter,faSquareXTwitter,faYoutube,faTiktok,faSquareReddit } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
    return(
        <>
        <section class="pt-10 bg-white sm:pt-16 lg:pt-24 border- border-red-500 space-y-8">

<div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl border- border-red-500 flex flex-col md:flex-row justify-start items-start  md:justify-between md:items-center ">
    <div className="w-48 h-20 border- border-red-500 ">
     <img class="w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Printify.png" alt="" />
    </div>
    <div className="space-x-3">
            
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faFacebook} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faSquareInstagram} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faSquareXTwitter} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faYoutube} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faLinkedin} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faTiktok} /> </a>
            <a href=""> <FontAwesomeIcon className="w-6 h-6 text-green-500" icon={faSquareReddit} /> </a>

            

    </div>
</div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl border- border-red-500">
        <div class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12 font-roboto text-[#353A47] ">
            <div>
                <p class="text-base  font-bold font-cerebri">Integrations</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Shopify </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Etsy </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> eBay  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Amazon </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> TikTok Shop </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> PrestaShop </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> BigCommerce  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Wix </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> WooCommerce  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Squarespace </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Printify API </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> PrestaShop </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Shutterstock  </a>
                    </li>
                  
                </ul>
            </div>

            <div>
                <p class="text-base font-bold font-cerebri">Discover</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Blog </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Guides </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Products </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Etsy print-on-demand </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Shopify print-on-demand </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Woocommerce print-on-demand </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Wix print-on-demand </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Squarespace print-on-demand </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Make Your Own Shirt </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Brands </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Pricing </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Shipping Rates </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Mockup Generator </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-base font-bold font-cerebri">Start selling</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom T-shirts </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Hoodies </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Mugs </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Socks </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Backpacks </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Branding </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Sell on Etsy </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Sell on Social Media </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Free T-shirt Designs </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom Products </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Custom All-Over-Print Hoodies </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Start a Clothing Line </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Start POD Business </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Bulk Orders </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Transfering To Printify </a>
                    </li>
                    
                </ul>
            </div>

            <div>
                <p class="text-base font-bold font-cerebri"> Printify </p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Print on Demand  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Print Providers  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Experts Program  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Printify Express Delivery  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Become a Partner  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Printify Quality Promise  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Jobs  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Webinars  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Printing Profits Podcast  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Contact Us  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Affiliate  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Contact Sales  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> POD Glossary  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Network Fulfillment Status  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Merchant Protection  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Security  </a>
                    </li>
                    <li>
                        <a href="#" title="" class="text-base  transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Sitemap  </a>
                    </li>
                </ul>
            </div>
        </div>
       
    </div>
    <div class=" h-28 flex bg-gray-100 items-center flex-col justify-center gap-2 font-roboto">
        <div className= " flex space-x-4 ">
        <a href="" className="hover:text-green-500">Intellectual Property Policy</a>
        <a href="" className="hover:text-green-500">Terms of Service</a>
        <a href="" className="hover:text-green-500">Privacy Policy</a>
        <a href="" className="hover:text-green-500">Security</a>
        </div>
       
        <div className="">
        <p class="w-full  text-sm text-center md:mt-0 md:w-auto md:order-2">© Copyright 2024, All Rights Reserved by Vish Gurav</p>

        </div>
    </div>      
</section>
        </>
    )
}
export default Footer