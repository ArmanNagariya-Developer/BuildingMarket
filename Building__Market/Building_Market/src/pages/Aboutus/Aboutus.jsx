import React from "react";
import Layout from "../../components/layout/Layout";
import personimg from "../../assets/personimg.jpeg"
function Aboutus() {
  return (
    <>
      <Layout>
        <div className="self-center px-16 py-12 mt-16 w-full rounded-3xl max-w-[1809px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-gradient-to-r from-orange-500">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col font-bold text-black max-md:mt-10 max-md:max-w-full">
                <div className="self-end text-3xl underline text-stone-200">
                  About Us
                </div>
                <div className="mt-1 text-2xl max-md:max-w-full max-md:text-xl">
                  This is Building Market
                </div>
                <div className="mt-11 text-2xl max-md:mt-10 max-md:max-w-full">
                  <span className="text-xl">Welcome to BUILDING MARKET </span>
                  <span className="text-xl ">
                    - Your Premier Building Material Supplier!
                  </span>
                  <br />
                  <br />
                  <span className="text-base ">At</span>
                  <span className="text-base"> BUILDING MARKET, </span>
                  <span className="text-base justify-self: center;">
                    we take pride in being your one-stop solution for
                    high-quality building materials. With a commitment to
                    excellence and customer satisfaction, we strive to be the
                    preferred partner for contractors, builders, and DIY
                    enthusiasts alike.
                  </span>
                  <br />
                  <br />
                  <span className="text-base ">Why choose</span>
                  <span className="text-base"> BUILDING MARKET ?</span>
                  <ol>
                    <li>
                      <span className="text-base ">
                        Quality Assurance: We source our materials from trusted
                        manufacturers, ensuring that every product meets
                        stringent quality standards.
                      </span>
                    </li>
                    <li>
                      <span className="text-base ">
                        Wide Variety: Explore our extensive catalog featuring a
                        wide range of building materials, from bricks and
                        concrete to roofing and insulation. Find everything you
                        need under one roof.
                      </span>
                    </li>
                    <li>
                      <span className="text-base ">
                        Competitive Prices: We understand the importance of
                        budget considerations. That's why we offer competitive
                        prices without compromising on the quality of our
                        materials.
                      </span>
                    </li>
                  </ol>
                  <br />
                  <span className="text-base ">
                    Discover the difference when you choose BUILDING MARKET as
                    your building material supplier. Browse our website, explore
                    our product offerings, and experience the convenience of
                    partnering with a reliable and customer-centric supplier.
                  </span>
                  <br />
                  <br />
                  <span className="text-base ">
                    Build with confidence. Build with BUILDING MARKET.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full absolute top-[-10px] left-[-15%] z-10">
            <img
              loading="lazy"
              src={personimg}
              className="self-stretch my-auto w-[350px] aspect-[0.95] max-md:mt-10 max-md:max-w-full absolute top-[300px] left-[1100px]"
            />
          </div>
        </div>
   
    
      </Layout>
    </>
  );
}

export default Aboutus;
