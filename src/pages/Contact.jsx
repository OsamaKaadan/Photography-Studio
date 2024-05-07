import WomanImg from '../img/WomanContact.png';
import './contact.scss'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section1'
    >
      <div className='d1'>
        <div className='d2'>
          {/* text & form */}
          <div className='d4'>
            <h1 style={{ fontSize: 40, color: "white" }}>Contact me</h1>
            <p style={{ color: "white", marginBottom: 12 }}>I would love to get sggestions from you.</p>
            <form action="" >
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ transition1, duration: 1 }}
                className='d5' style={{ display: "flex", gap: "40px" }}>
                <input className='inpo' type="text" placeholder='Your name' style={{ color: "white" }} />
                <input className='inpo' type="text" placeholder='Your email address' style={{ color: "white" }} />

              </motion.div>
              <motion.textarea
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ transition1, duration: 1 }}
                className='inpo' type="text" placeholder='Your message' style={{ color: "white" , marginTop:"20px"}} />
              <motion.button
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ transition1, duration: 1 }}
                className='btn1' style={{ marginTop: "20px" }}>Send</motion.button>

            </form>
          </div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition1, duration: 0.7 }}
            className='d6'>
            <img src={WomanImg} alt="" style={{ width: "60%", }} />
          </motion.div>

        </div>
      </div>

    </motion.section>
  )
}

export default Contact