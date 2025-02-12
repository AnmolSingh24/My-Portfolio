import { motion } from "framer-motion"
import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-82 h-[11rem] text-center bg-neutral-900 justify-center items-center p-3 rounded">
              <img src={project.image} width={250} height={250} alt={project.title} className="mb-4 rounded" />
              <a href={project.url}>
                <button className="text-center text-neutral-300 rounded-xl">{project.status}</button>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mb-8">
              <h6 className="mb-6 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-4 text-center rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects