export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen border-b-black'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-2 md:gap-6 px-6 md:pl-40 py-30 md:py-60 text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold md:font-bold'>
          Reveal Your Natural Glow with Our Organic Facial Pack
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-gray-700'>
          Nourish and rejuvenate your skin with 100% natural ingredients — free from chemicals, eco-friendly, and crafted for radiant, healthy skin.
        </p>
        <button className='text-lg md:text-xl px-6 py-3 md:py-4 border border-black hover:bg-black hover:text-white rounded-full'>
          Try Now!
        </button>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex items-center justify-center px-6 py-10'>
        <img
          src="/packaging.png"
          alt="Fravea Multani Mitti"
          className="max-w-full h-auto md:h-[500px] hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  )
}
