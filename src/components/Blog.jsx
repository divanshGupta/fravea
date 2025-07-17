export default function Blog() {
  return (
    <div className='w-full md:flex md:px-12 md:py-20 '>
      <div className=' w-full md:w-1/2 flex flex-col gap-3 md:gap-6 items-start justify-center
      px-10 py-10 md:px-20 md:pl-40'>
        <h2 className='text-2xl md:text-4xl'>Start feeling your best today.</h2>
        <p className='text-xs md:text-sm'>Can't decide which supplements to try? Our Foundational Well-being Set is designed to give you energy, balance, and calm throughout the day, every day.</p>
        <button className='text-xl px-6 py-4 border  hover:bg-black hover:text-white rounded-full'>Take a look!</button>
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center '>
        <img className="rounded-2xl" src="./model.png" alt="" style={{height:400}} />
      </div>
    </div>
  )
}
