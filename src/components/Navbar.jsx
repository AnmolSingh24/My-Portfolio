import { motion } from "framer-motion";
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 1 }}
        className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 1 }}
        className="m-8 flex justify-end items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </motion.div>
    </nav>
  )
}

export default Navbar