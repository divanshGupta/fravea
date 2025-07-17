import { motion } from "framer-motion";
import { specs } from "../Constants/constants";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.19,
      duration: 0.6,
      type: "spring",
    },
  }),
};

export default function Specs() {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      {/* Image section */}
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <img
          className="w-full h-auto object-cover max-h-[400px] md:h-full"
          src="./fravea.png"
          alt=""
        />
      </div>

      {/* Specs section */}
      <div className='w-full md:w-1/2 flex items-center justify-center px-4 md:pr-40 py-8 md:py-0 bg-yellow-50'>
        <ul className="w-full max-w-md">
          {specs.map((spec) => (
            <motion.li
              className="text-lg sm:text-xl border-b-2 pl-4 sm:pl-8 pt-4 pr-4 sm:pr-40 pb-4 block transition-transform duration-300 hover:translate-x-3 sm:hover:translate-x-6"
              key={spec.id}
              custom={spec.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={variants}
            >
              {spec.content}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
