import { useContext, useState } from "react"
import { IsMobileContext } from "../utilis/IsMobileContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const { isMobile } = useContext(IsMobileContext);
    const [activeLinkId, setActiveLinkId] = useState(null);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Portfolio" },
        { id: 4, link: "Contact" },
    ]
    return (
        <nav>
            <div className='logo'>
                <motion.img src='src/assets/Images/logo.png' alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} />
            </div>

            {!isMobile && (
                <>
                    <div className="menu">
                        <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                            {links.map((link, index) => (
                                <Link key={index} to={link.link} className={link.id === activeLinkId ? "active" : ""}
                                    alt=""  onClick={() => setActiveLinkId(link.id)} >
                                    {link.link}
                                </Link>


                            ))}

                        </motion.ul>
                    </div>
                    <motion.div className="btn" alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                        <button>Schedule your photoshoot</button>
                    </motion.div>
                </>
            )}


            {isMobile && (
                <>
                    <motion.div className="bar" onClick={() => setActiveMenu(!activeMenu)} alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                        <div></div>
                        <div></div>
                    </motion.div>

                    <motion.div className={`mobile-menu ${activeMenu ? "active" : ""}`} alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                        <ul>
                            {links.map((link, index) => (
                                <Link key={index} to={link.link} className={link.id === activeLinkId ? "active" : ""}
                                alt=""  onClick={() => setActiveLinkId(link.id)} >
                                {link.link}
                            </Link>
                            ))}
                        </ul>
                    </motion.div>
                </>

            )}

        </nav>
    )
};
export default Navbar;
