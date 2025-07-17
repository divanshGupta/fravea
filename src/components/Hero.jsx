export default function Hero() {
  return (
    <div className='flex w-full'>
      <div className='w-1/2 flex flex-col items-start justify-center gap-6 pl-40 py-50'>
        <h1 className='text-6xl'>Reveal Your Natural Glow with Our Organic Facial Pack</h1>
        <p className='text-lg'>Nourish and rejuvenate your skin with 100% natural ingredients — free from chemicals, eco-friendly, and crafted for radiant, healthy skin.</p>
        <button className='text-xl px-6 py-4 border  hover:bg-black hover:text-white rounded-full'>Try Now!</button>
      </div>

      <div className='w-1/2 flex items-center justify-center'>
        <img src="/packaging.png" alt="fravea Multani Mitti" 
        style={{height:500}}
        className="hover:scale-110 transition-transform duration-400"/>
      </div>
    </div>
  )
}
