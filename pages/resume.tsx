import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";
const resume = () => {
    
    return(
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            <head>
                <title>
                    Web Developer | Resume | Ionut
                </title>
            </head>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h6 className="my-3 font-bold text-2x1 ">Education</h6>
                        <div>
                            <h5 className="my-2 font-bold text-x1">Faculty of Electronics, Telecommunications and Information Technology</h5>
                            <p className="font-semibold">Universitatea Tehnica din Cluj-Napoca</p>
                            <p className="my-3">Lorem Ipsum.......</p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h6 className="my-3 font-bold text-2x1 ">Experience</h6>
                        <div>
                            <h5 className="my-2 font-bold text-x1">Junior Developer</h5>
                            <p className="font-semibold">Universitatea Tehnica din Cluj-Napoca</p>
                            <p className="my-3">Lorem Ipsum.......</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cold-2 lg:grid-cols-2">
                    <div>
                        <h5 className="my-3 font-bold text 2x1">Languages & Frameworks</h5>
                        <div className="my-2">
                            {
                                languages.map(Language =><Bar data={Language} key={Language.name}/>)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className="my-3 font-bold text 2x1">Tools & Softwares</h5>
                        <div className="my-2">
                            {
                                tools.map(tool =><Bar data={tool} key={tool.name}/>)
                            }
                        </div>
                    </div>

                </div>
        </motion.div>
    )
}

export default resume