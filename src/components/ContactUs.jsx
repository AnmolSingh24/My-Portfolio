import React from 'react'
import { CONTACT } from '../constants'

const ContactUs = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Contact:
          <span> {CONTACT.phoneNo}</span>
        </p>
        <p className="my-4">Email:
          <span className="border-b"> {CONTACT.email}</span>
        </p>
      </div>
    </div>
  )
}

export default ContactUs