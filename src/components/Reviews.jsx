import { customerReviews } from '../Constants/constants'
import { motion } from 'framer-motion'

export default function Reviews() {
  return (
    <section className="w-full md:py-20 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {customerReviews.slice(0, 3).map(({ id, name, review }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-between bg-yellow-50 rounded-[2rem] shadow-lg p-8 h-60"
          >
            <p className="text-lg text-black leading-relaxed">
              {review}
            </p>
            <p className="text-sm text-right mt-6 font-medium text-gray-700">
              – {name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
