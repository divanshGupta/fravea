export default function Blog() {
  return (
    <div className='w-full md:flex md:px-12 md:py-20 '>
      <div className='w-full md:w-1/2 flex flex-col gap-3 md:gap-6 items-center md:items-start
      px-10 py-10 md:px-20 md:pl-40'>
        <h2 className='text-2xl md:text-4xl'>Discover the Timeless Beauty Benefits of Multani Mitti.</h2>
        <p className='text-md md:text-sm'>Unlock glowing, oil-free skin with nature's ancient clay remedy trusted for generations.</p>
        <button className='text-xl px-4 py-2 md:px-6 md:py-4 border  hover:bg-black hover:text-white rounded-full'>Read Full Blog!</button>
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center '>
        <img className="rounded-2xl shadow-lg" src="./model.png" alt="" style={{height:400}} />
      </div>
    </div>
  )
}
