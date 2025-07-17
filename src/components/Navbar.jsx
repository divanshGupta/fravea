export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full flex items-center justify-between shadow-md shadow-black/5'>
      <div className='px-20 py-4 text-3xl font-bold'>
        <h3>Fravea.</h3>
      </div>

      <div className='px-20 py-4 flex gap-4'>
        <button className='px-4 py-2 border rounded-full  hover:bg-black hover:text-white'>Buy</button>
        <button className='px-4 py-2 border rounded-full hover:bg-black hover:text-white'>About</button>
      </div>
    </nav>
  )
}
