import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL
const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section name='contact' className='min-h-screen bg-gray-950 flex items-center justify-center px-4'>
            <motion.div
                className='w-full max-w-2xl'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white text-center mb-4'>
                    Get In Touch
                </motion.h2>
                <motion.p variants={itemVariants} className='text-gray-400 text-center mb-12'>
                    Let's collaborate and create something amazing together
                </motion.p>

                <motion.div variants={itemVariants} className='bg-gray-900 rounded-lg p-8 shadow-lg'>
                    <form className='space-y-6' action={FORMSPREE_URL} method='POST' >
                        <input name='Name' type='text' placeholder='Name' className='w-full bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 ring-blue-500' />
                        <input name='Email' type='email' placeholder='Email' className='w-full bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 ring-blue-500' />
                        <textarea name='Message' rows='5' placeholder='Message' className='w-full bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 ring-blue-500'></textarea>
                        <button className='w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition'>Send Message</button>
                    </form>
                </motion.div>

                <motion.div variants={itemVariants} className='flex justify-center gap-6 mt-12'>
                    <a href='mailto:harshpandey4489@gmail.com' className='text-gray-400 hover:text-blue-500 transition text-3xl'><HiOutlineMail /></a>
                    <a href='https://www.linkedin.com/in/harsh-pandey-10b670253/' className='text-gray-400 hover:text-blue-500 transition text-3xl'><BsLinkedin /></a>
                    <a href='https://github.com/harsh-pandey1489' className='text-gray-400 hover:text-blue-500 transition text-3xl'><BsGithub /></a>
                    <a href='#' className='text-gray-400 hover:text-blue-500 transition text-3xl'><BsTwitter /></a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;