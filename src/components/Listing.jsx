import { listings } from '../Constants/constants'

export default function Listing() {
  return (
    <div className='pt-12 md:pt-16 px-4 md:px-8'>
      <h1 className='text-center text-xl md:text-3xl sm:text-2xl mb-8 font-semibold'>
        We Are Available Everywhere
      </h1>

      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-10'>
        {listings.map((listing) => {
          return (
            <a
              key={listing.id}
              href={listing.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={listing.content}
              className=' hover:scale-110 transition-transform duration-300'
            >
              <img
                src={listing.photo}
                alt={listing.content}
                className='w-30 md:w-50 rounded-full object-cover'
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
