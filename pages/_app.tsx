import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { AppProps } from 'next/app';
import {AnimatePresence} from 'framer-motion';

import { ThemeProvider } from 'next-themes';


interface CustomPageProps { // <--- your custom page props
    // your props
 }

function MyApp({ Component, pageProps , router}: AppProps<CustomPageProps>){
    return (
        <ThemeProvider attribute='class'>
        <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px32' >
            <div className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'> 
            <Sidebar />
            </div>
                
            <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <Navbar/>
                <AnimatePresence mode='wait'>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </div>
        </div>
        </ThemeProvider>
        );
}

export default MyApp