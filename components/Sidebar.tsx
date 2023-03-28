import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/legacy/image'


const Sidebar = () => {
    const {theme ,setTheme} = useTheme();

    const changeTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return(
        <div>
            <Image src='/images/profil.jpg'
            alt='user avatar'
            className='w-32 h-32 mx-auto rounded-full'
            height="128"
            width="128"
            layout= "intrinsic"
            quality="100"
            />
            <h3 className='my-4 font-medium tracking-wider text-3x1 font-kaushan'><span className='text-green-500'>Ilies </span>Ionut</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' 
            href='/assets/CV_IliesIonutCristian.pdf' download='CV_IliesIonutCristian.pdf'><GiTie className='w-6 h-6' />Download Resume</a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href='https://github.com/IlyIonut' target="_blank" rel="noreferrer"><AiFillGithub className='w-8 h-8 cursor-pointer' aria-label='Github'/></a>
                <a href='https://www.linkedin.com/in/ionut-ilies/' target="_blank" rel="noreferrer"><AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label='Linkedin'/></a>
                <a href='https://www.instagram.com/ili_ionut/' target="_blank" rel="noreferrer"><AiFillInstagram className='w-8 h-8 cursor-pointer' aria-label='Instagram' /></a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex justify-center space-x-2 idems-center'>
                    <GoLocation/>
                    <span>Cluj, Romania</span>
                </div>
                <p className='my-2'>iliesionut3@gmail.com</p>
                <p className='my-2'>0729062563</p>
            </div>
            <button
            className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
            onClick={() => window.open('mailto:iliesionut3@gmail.com')} >
            Email Me
            </button>
            <button onClick={changeTheme} className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Themes</button>
        </div>
    )
}

export default Sidebar