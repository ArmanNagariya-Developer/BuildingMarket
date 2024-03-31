import React from "react";
import Layout from "../../components/layout/Layout";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
function Home() {
  const images = [
    "https://as1.ftcdn.net/v2/jpg/02/91/03/18/1000_F_291031899_F4bjthgAQDyLg7HAmmCbicssF2rYIlzO.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/54/80/38/1000_F_354803870_YIuF16KDgssVB6qAUXC2Ds8mCHgANuTl.jpg",
    "https://as1.ftcdn.net/v2/jpg/00/52/87/88/1000_F_52878851_ruG9HlCuTgjH2DXCTy7pkigOaZCR6Rvn.jpg",
  ];
  return (
    <Layout>
      <Slide>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[0]})`, height: "250px" }}
          />
          {/* <span>Slide 1</span> */}
        </div>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[1]})`, height: "250px" }}
          >
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{ backgroundImage: `url(${images[2]})`, height: "250px" }}
          >
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
      <br></br>
      <br></br>
      <div className="w-[1340px] h-[45px] bg-white rounded-[10px] border-[1px] border-black">
        <p className="text-orange text-[20px] font-bold font-['Inria Sans']">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a98c1933d77e8b089a45ba5295887cccb4a00efdca7b46a1a08deb54ef60b67d?"
            className="w-[195px] max-w-sm aspect-[4.55] fill-orange-500 rounded-[10px]"
          />
          <p className="absolute top-[368px] left-[20px] ">New Offer’s</p>
        </p>
      </div>
      <div className="text-white text-[35px] font-bold font-['Inria Sans']"></div>
      <br />
      <br />

      
      <table>
        <th>
        <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img1}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </th>
        <th>
        <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img2}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </th>
        <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img3}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <th>
          <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img4}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </th>
      <th>
      <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img5}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br/>
      </th>
      </table>
      
      <table>
      <th>
        <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img2}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </th>
        <th></th>
        <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img8}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <th>
          <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img7}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </th>
      <th>
      <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img3}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br/>
      </th>
      <th>
      <div className="px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 pt-5 pb-12 mt-2.5  text-2xl font-bold text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mt-10 w-[220px] h-[250px]">
              <img
                loading="lazy"
                src={img2}
                className="max-w-full h-[150px] aspect-[0.67] w-[150px]"
              />
              <div className="text-black text-[16px] font-bold font-['Inria Sans']">
                Ultratech Super Cement
              </div>
              <div className="mt-3 text-left">
                <span className="text-orange-500 text-[18px] font-semibold font-['Inria Sans'] ">
                  ₹ 385.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </th>
      
      </table>
    </Layout>
  );
}

export default Home;
