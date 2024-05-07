import './about.scss'
// import images
import Avatar from '../img/Avatar.jpg';
// import link
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { transition1 } from '../transitions';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 , y:'100%'}}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y:'100%' }}
      transition={transition1}
      className='sec'>
      <div className="container1">
        {/* text & img wrapper */}
        <div className='c1'>
          {/* image */}
          <div className='c1-1'>
            <img
              src={Avatar} alt=""
              style={{
                width: "80%",
                // marginBottom: "5rem",
              }}
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='c2'
          >
            <h1 className='h1' style={{ color: "white", fontSize: 40, marginBottom:20}}>About me</h1>
            <p style={{ color: "white", fontSize: 17 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt nulla magni, impedit id iure? Deleniti at quos hic tempore repellat tenetur molestias dolorem vitae dolores.</p>
            <br />
            <p style={{ color: "white", fontSize: 17,marginBottom:2  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non, illo neque odit praesentium blanditiis.</p>
            <Link to={'/'} className='button'> Download my resume </Link>
          </motion.div>
        </div>
      </div>

    </motion.section>
  )
}
