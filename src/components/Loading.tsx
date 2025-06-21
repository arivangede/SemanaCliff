'use client'

import {motion} from 'motion/react'

export default function Loading ({progress}:{progress: number}) {
    return (
        <motion.div 
          initial={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-screen w-full"
        >
          <motion.h1 
            animate={{ 
              opacity: [1, 0.3, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} 
            className="text-white text-4xl font-sacramento"
          >
            Semana Cliff
          </motion.h1>
          <div className="w-64 h-2 bg-gray-300 mt-4 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
    )
}