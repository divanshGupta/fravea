export default function Blog() {
  return (
    <div className='w-full flex px-12 py-20'>
      <div className='w-1/2 flex flex-col gap-6 items-start justify-center
      px-20 pl-40'>
        <h2 className='text-4xl'>Start feeling your best today.</h2>
        <p className='text-sm'>Can't decide which supplements to try? Our Foundational Well-being Set is designed to give you energy, balance, and calm throughout the day, every day.</p>
        <button className='text-xl px-6 py-4 border  hover:bg-black hover:text-white rounded-full'>Take a look!</button>
      </div>

      <div className='w-1/2 flex items-center justify-center '>
        <img className="rounded-2xl" src="./model.png" alt="" style={{height:400}} />
      </div>
    </div>
  )
}
