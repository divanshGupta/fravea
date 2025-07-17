import { listings } from '../Constants/constants'

export default function Listing() {
  return (
    <div className='py-12 px-4 sm:px-8'>
      <h1 className='text-center text-xl sm:text-2xl mb-8 font-semibold'>
        We Are Available Everywhere
      </h1>

      <div className='flex flex-wrap justify-center gap-6'>
        {listings.map((listing) => {
          return (
            <a
              key={listing.id}
              href={listing.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={listing.content}
              className='flex flex-col items-center hover:scale-110 transition-transform duration-300'
            >
              <img
                src={listing.photo}
                alt={listing.content}
                className='w-16 h-16 sm:w-20 sm:h-20 md:w-50 rounded-full object-cover'
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
