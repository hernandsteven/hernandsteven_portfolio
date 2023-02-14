'use client'
import { motion } from 'framer-motion'

const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
    },
  },
}

export const UpRightArrow = () => {
  return (
    <svg
      className="h-6 w-6 text-white  transition ease-in-out hover:scale-105"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        stroke="none"
        d="M0 0h24v24H0z"
      />{' '}
      <motion.line
        variants={icon}
        initial="hidden"
        animate="visible"
        x1="17"
        y1="7"
        x2="7"
        y2="17"
      />{' '}
      <motion.polyline
        variants={icon}
        initial="hidden"
        animate="visible"
        points="8 7 17 7 17 16"
      />
    </svg>
  )
}

export const Github = () => {
  return (
    <svg
      className="h-8 w-8 cursor-pointer text-white transition ease-in-out hover:scale-105"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      />
    </svg>
  )
}

export const LinkedIn = () => {
  return (
    <svg
      className="h-8 w-8 cursor-pointer text-white transition ease-in-out hover:scale-105"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />{' '}
      <motion.rect
        variants={icon}
        initial="hidden"
        animate="visible"
        x="2"
        y="9"
        width="4"
        height="12"
      />{' '}
      <motion.circle
        variants={icon}
        initial="hidden"
        animate="visible"
        cx="4"
        cy="4"
        r="2"
      />
    </svg>
  )
}

export const Mail = () => {
  return (
    <svg
      className="h-8 w-8 cursor-pointer text-white  transition ease-in-out hover:scale-105"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

export const Download = () => {
  return (
    <svg
      className="h-5 w-6 text-white"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <path stroke="none" d="M0 0h24v24H0z" />{' '}
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{' '}
      <polyline points="7 11 12 16 17 11" />{' '}
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  )
}
