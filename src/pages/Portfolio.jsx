import { Link } from 'react-router-dom';
import Image1 from '../img/1.png';
import Image2 from '../img/2.png';
import Image3 from '../img/3.png';
import Image4 from '../img/4.png';
import './portfolio.scss'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container2' >
        <div className='div1' style={{ display: "flex" }}  >
        {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex1'>
            <h1 className='h1'>Portfolio</h1>
            <p style={{ color: "white", fontSize: 17 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt nulla magni, impedit id iure? Deleniti at quos hic tempore repellat tenetur molestias dolorem vitae dolores.</p>
            <br />
            <p style={{ color: "white", fontSize: 17, marginBottom: "2rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non, illo neque odit praesentium blanditiis.</p>
            <Link to={'/'} className='btn1'> Visit my gallery </Link>
          </motion.div>
          {/* image grid */}
          <div className='div2'>
            {/* image */}
            <div className='div3'>
              <img className='imgo' src={Image1} alt="" />
            </div>
            <div className='div3'>
              <img className='imgo' src={Image2} alt="" />
            </div>
            <div className='div3'>
              <img className='imgo' src={Image3} alt="" />
            </div>
            <div className='div3'>
              <img className='imgo' src={Image4} alt="" />
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  )
}

export default Portfolio