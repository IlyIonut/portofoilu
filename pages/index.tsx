import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimation } from "../animations";
import { stagger } from "../animations";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";


const index = () => {
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow px-6 pt-1">
             {/* <head>
                <title>
                    Web Developer | portofoliu | Ionut
                </title>
            </head> */}
            <h6 className="my-3 font-mediu">I am self-taught, communicative, a good team coordinator and I am always open to learning new things. I am passionate about financial education, psychology, marketing, sports and web design.</h6>
            <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
                <h6 className="my-3 font-bold tracking-wide text-x1">What i offer</h6>
                <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger}>
                    {
                        services.map(service => (
                        <motion.div variants={fadeInUp} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"  key={service.title}>
                        <ServiceCard service={service}/>
                        </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}


export default index

// export const getServerSideProps = async(context: GetServerSidePropsContext) =>
// {
//     // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//     // const data = await res.json()
    
//     return{
//         props:{
//             endpoint: process.env.VERCEL_URL,
//         },
//     }
// }
// export const getStaticProps = async(context: GetStaticPropsContext) =>
// {
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
    
//     return{
//         props:{
//             services: data.services,
//         },
//     }
// }