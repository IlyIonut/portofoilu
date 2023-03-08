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
                        <h6 className="my-3 text-2xl font-semibold ">Education</h6>
                        <div>
                            <p className="my-2 text-xl font-medium">Universitatea Tehnica din Cluj-Napoca</p>
                            <h5 className="font-medium">Faculty of Electronics, Telecommunications and Information Technology</h5>
                            <p className="my-3">Economic Engineering Profile</p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h6 className="my-3 text-2xl font-bold ">Experience</h6>
                        <div>
                            <h5 className="inline text-xl font-medium">SAS UTCN</h5>
                            <h1 className="inline my-3 font-medium"> -  Student Entrepreneurial Society</h1>
                            <p className="font-medium">Coordinator of the media department</p>
                            <p className="my-3">In the media department I was responsible department coordination and all promotional materials and postings
                                necessary for the events organized by SAS.</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2">
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