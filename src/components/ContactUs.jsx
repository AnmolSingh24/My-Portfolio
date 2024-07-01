import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl">Get In Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">Contact:
          <span> {CONTACT.phoneNo}</span>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="border-b border-neutral-700 pb-2 my-4">Email:
          <span> {CONTACT.email}</span>
        </motion.p>
      </div>
      <p className="mt-4 text-center -m-3">
        Made with ❤️ by Anmol Singh
      </p>
    </div>
  )
}

export default ContactUs