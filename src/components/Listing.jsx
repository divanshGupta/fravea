import { listings } from '../Constants/constants'

export default function Listing() {
  return (
    <div className='py-12'>
        <h1 className='text-center text-2xl mb-6'>We Are Available Everywhere</h1>
        <div className='flex items-center justify-center gap-4'>
            {listings.map((listing)=>{
                return (
                        
                    <a 
                    key={listing.id}
                    href={listing.url}
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label={listing.content}
                    className='px-8 py-6 hover:scale-110 duration-300 transition-transform'
                    >
                        <img
                            style={{width:200}}
                            src={listing.photo}
                            className="w-14 h-14 rounded-full object-cover"
                        />
                    </a>
                )
                })}
        </div>
    </div>
  )
}
