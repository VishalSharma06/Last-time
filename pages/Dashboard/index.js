import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const index = () => {
  const router = useRouter()
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-6">

        <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
          <span className="font-semibold text-xl tracking-tight hover:text-green-800"><a href="#">OM SHIPMENT</a></span>
        </div>

        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 md:text-right">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4" onClick={() => router.push('/Home')}>Home</a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4"  onClick={() => router.push('/Driver')}>ADD DRIVER</a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4" onClick={() => router.push('/ShipForm')} >CREATE SHIPMENT</a>
          </div>
        </div>

      </nav>
      

      <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage:'url("https://tse2.mm.bing.net/th?id=OIP.E0m94orDYzeHv0C33eSHDwHaDF&pid=Api&P=0&h=180")'}}>
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-white">Speed, Trust, Reliability</h2>
          <h3 className="text-2xl mb-8 text-gray-200">Connecting Commerce, Simplifying Shipping,We Handle, You Relax,Our Business is Your Shipment,Beyond Boundaries, On Time</h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all" onClick={() => router.push('/ShipForm')}>CONTACT US</button>
        </div>
      </div>


      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Goods, Our Guarantee.</h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Your Cargo, Our Commitment</h4>
            <p className="text-gray-600 mb-8">Their primary target will be the power generators. Prepare to open the shield. Sir, Rebel ships are coming into our sector. Good. Our first catch of the day. Stand by, ion control....Fire! The first transport is away.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://tse3.mm.bing.net/th?id=OIP.U-6HHufhVPbeqNYEuk4IWgHaDI&pid=Api&P=0&h=180" alt="Vortex" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://tse1.mm.bing.net/th?id=OIP.X9D4EddHedcXl05sRxL09gHaC6&pid=Api&P=0&h=180" alt="use the force" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reliable Shipping, Global Reach</h4>
            <p className="text-gray-600 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Shipping Beyond Boundaries</h4>
            <p className="text-gray-600 mb-8">There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://tse1.mm.bing.net/th?id=OIP.sWz7sxh3X40dJlU2C-KuwgAAAA&pid=Api&P=0&h=180" alt="Syncing" />
          </div>
        </div>
      </section>


      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Artoo expresses</h2>
          <div className="flex flex-wrap">

            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">How are you feeling, kid? You don't look so bad to me. In fact, you look strong enough to pull the ears off a Gundark. Thanks to you.</p>
                <p className="text-gray-500 text-xs md:text-sm px-6">Luke Skywalker</p>
              </div>
            </div>

            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">That's two you owe me, junior. Well your Worship, looks like you managed to keep me around for a little while longer. I had nothing to do with it.</p>
                <p className="text-gray-500 text-xs md:text-sm px-6">Emperor's Royal Guards</p>
              </div>
            </div>

            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">General Rieekan thinks it's dangerous for any ships to leave the system until we've activated the energy shield. That's a good story. I think you just can't bear to let a gorgeous guy like me out of your sight</p>
                <p className="text-gray-500 text-xs md:text-sm px-6">Queen Mother Ta'a Chume</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section style={{backgroundColor : '#667eea'}}>
      <div className="container mx-auto px-6 text-center py-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">Headquarters personnel</h2>
        <h3 className="my-4 text-2xl text-white">Report to command center. Take it easy.</h3>
        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">Report</button>
      </div>
    </section><footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">I'll return</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">I promise</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Reckless is he</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Emperor's Terms</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Pulverized?</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Corellia</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Bilbringi</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Fondor</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Journey to the Emperor</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Lord Vader ship approaching?</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">X-wing className</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default index