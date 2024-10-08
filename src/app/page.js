"use client"

import { GrTechnology } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { LuBuilding } from "react-icons/lu";
import Link from "next/link";
// import Head from "next/head";
import ContactForm from "./components/ContactForm";
import CounterAnimation from "./components/CounterAnimation";


import { useEffect } from "react";

export default function Home() {

  // useEffect(() => {
  //   AOS.init({
  //       duration: 600,
  //       once: false,
  //   });
    
  // }, [])

  return(
    <>

    <section>
    <div className="min-h-screen relative overflow-hidden flex hero" >
    <img
            src="https://cdn.pixabay.com/photo/2016/12/01/13/10/lightbulb-1875247_1280.jpg"
            alt="Technology"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative mx-auto md:py-4 py-12 px-4 md:px-8 pt-18 pb-10 flex flex-wrap justify-center items-center">
            <div className="w-full md:w-7/12 px-4 flex flex-wrap justify-content-center">
              <h1 className="text-4xl text-base-100 bg-base-content rounded-lg bg-opacity-60 py-2 px-4 font-bold text-left mb-8">
                Empowering your digital success
              </h1>
              <h2 className="text-base-100 bg-base-content rounded-lg bg-opacity-50 py-2 px-4 text-xl mb-8">
                Transform Your Online Presence with Expert Website Development, Mobile App Creation, and Strategic Digital Marketing Solutions. Empower Your Brand with Our Seamless Integration of Design, Development, and Marketing Strategies.
              </h2>
              <div className="flex justify-left">
              <Link href="/services">
                <button className="btn btn-primary">
                  View All Services
                </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 md:py-4 py-12">
              <div className="bg-base-300 rounded-lg p-8">
              <ContactForm />
              </div>
            </div>
          </div>
        </div>


    </section>
    
    <section  className="bg-gradient-to-r from-primary to-secondary overflow-hidden   px-4 py-16 md:px-8 text-white">
  <div className="flex flex-col md:flex-row items-center text-center md:text-left">
  <div className="md:w-1/2 mt-8 mb-8 md:mt-0 md:px-4">
      <h1 className="text-5xl font-bold mb-4">Apna Business Apna Website</h1>
      <p className="text-xl mb-8">Get your own website to boost your business. We provide the best solutions for creating a professional and effective online presence.</p>
      <div className="flex justify-right">
              <Link  href="/apna-business-apna-website">
                <button className="btn ">
                  Know More
                </button>
                </Link>
              </div>
    </div>


    <div className="md:w-1/2 md:px-4 md:py-4">
      <img src="/image/apna-website-hero.jpg" alt="Hero Image" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
  </div>
</section>

  <section>
    <div  className="min-h-screen relative overflow-hidden">
  <div className="mx-auto flex flex-wrap px-4 md:px-8 py-16">
          <div className="w-full md:w-1/2 px-4">
          <img 
            src="/section-2.png"
            alt="Technology"
            className=""
          />
          {/* <h2 className="text-2xl font-bold py-4">Design, Develop & Market</h2>
            <p className="text-lg">
              We specialize in the design, development, and marketing of products or services.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-4">
          {/* <h3 className="box-border h-8 w-32 border-2 text-center font-semibold mb-4">Who We Are?</h3> */}
          <h1 className="text-4xl font-bold mb-8">Grow Your Business Online with Your Trusted IT Partner</h1>
            <p className="mb-8 font-semibold">
            {`We're GrowTech Lab, a leading Mumbai-based IT solutions provider. We specialize in the design, development, and marketing of products or services. We help businesses of all sizes achieve their digital goals with a powerful combination of services`}
            </p>
                      <h3 className="box-border h-8 w-32 border-2 text-center font-semibold mb-4">Why Us?</h3>

            <p className="mb-2">
              <span className="font-semibold">Deep Industry Knowledge</span> : We understand the unique challenges and opportunities faced by businesses in your sector.
            </p>
            <p className="mb-2">
            <span className="font-semibold">Proven Track Record</span> : We have a history of success in delivering impactful digital solutions for diverse clients.
            </p>
            <p className="mb-2">
            <span className="font-semibold">Customized Approach</span> : We take the time to understand your specific needs and goals, tailoring our services to maximize your online impact.

            </p>

          </div>
        </div>
        </div>
  </section>
      
      
<div className="bg-gradient-to-r from-primary to-secondary overflow-hidden">
  <div id="whyus" className="max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
    {/* <div>
      <img
        className="w-full 	 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29"
        alt="Image Description"
      />
    </div> */}
    {/* Grid */}
    <div className="mt-5 md:my-8 grid md:grid-cols-3 gap-8 md:gap-12">
      <div className="md:col-span-1">
        <h2 className="font-bold text-2xl md:text-3xl text-base-100">
          We tackle the IT challenges you face
        </h2>
        <p className="mt-2 md:mt-4 text-base-200">
       {`In addition to collaborating with emerging businesses to drive digital transformation, we've developed enterprise-grade solutions to address common challenges encountered across diverse products and projects.`}
        </p>
      </div>
      {/* End Col */}
      <div className="md:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-8">
          {/* Icon Block */}
          <div  className="flex bg-base-200 rounded-lg p-4 gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Creative minds
              </h3>
              <p className="mt-1">
                We choose our teams carefully. Our people are the secret to
                great work. Passion drives us forward in everything we do
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200 rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Affordable Pricing
              </h3>
              <p className="mt-1">
                We provide customised service as per client requirements. We deliver services in your budget.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200 rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Industry-leading documentation
              </h3>
              <p className="mt-1">
                We always document our code. It aids in accessing the product and future development.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200  rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Designing for people
              </h3>
              <p className="mt-1">
                We actively pursue the right balance between functionality and
                aesthetics, creating delightful experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>

  </div>
{/* 
  <div className="bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
    <h1 className="text-4xl font-bold text-white mb-6">Contact web development company India today to get started.</h1>
    <p className="text-lg text-white mb-8">Take the first step on your digital journey and contact us today to get started.</p>
    <div className="flex space-x-6 mb-8">
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none ">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
       <span className="text-white">Outcome focused</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
         <span className="text-white">Agile methodology</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
           <span className="text-white">Strategic solutions</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
        <span className="text-white">Reliable support</span>
      </div>
    </div>
    <button className="bg-white text-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition duration-300"><Link href="/contact">Schedule a free consultation</Link></button>
  </div>
</div> */}





  <section>

      
   <CounterAnimation />
  
  {/* End Testimonials */}

  </section>


    </>
  );
}
