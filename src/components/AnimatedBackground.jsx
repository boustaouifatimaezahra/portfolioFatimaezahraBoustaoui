import { motion } from 'framer-motion'

function Blob({ className, duration, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -30, 40, 0],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <Blob
        className="left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-fuchsia-600"
        duration={18}
      />
      <Blob
        className="right-[-10%] top-[20%] h-[26rem] w-[26rem] bg-indigo-600"
        duration={22}
        delay={2}
      />
      <Blob
        className="bottom-[-15%] left-[20%] h-[30rem] w-[30rem] bg-purple-700"
        duration={20}
        delay={4}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  )
}
