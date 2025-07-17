import { motion } from "framer-motion";
import { specs } from "../Constants/constants"

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.19,
      duration: 0.6,
      type: "spring",
    },
  }),
};

export default function Specs () {
  return (
    <div className='flex w-full'>
      <div className='w-1/2 flex items-center justify-center'>
        <img className="w-full h-full object-cover" src="./fravea.png" style={{height: 400}} alt="" />
      </div>

      <div className='w-1/2 flex items-center justify-center pr-40 bg-yellow-50'>
        <div>
            <ul>
                {specs.map((spec ) => {
                    return (
                        <motion.li 
                        className="text-xl border-b-2 pl-8 pt-4 pr-40 pb-4 block transition-transform duration-300 hover:translate-x-6"
                        key={spec.id}
                        custom={spec.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.4}}
                        variants={variants}
                        >
                          {spec.content}
                        </motion.li>
                    )
                })}
            </ul>
        </div>
      </div>
    </div>
  )
};
