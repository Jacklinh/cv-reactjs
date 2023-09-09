
import './App.css'
import AboutMe from './components/AboutMe';

import Avatar from './components/Avatar';
import Contact from './components/Contact';
import Interests from './components/Interests';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Skills from './components/Skills';
function App() {

    return (
        <>
            <main className='bg_home pt-[200px] pb-[100px] md:px-0 lg:px-[100px]'>
                <div className="container m-auto">
                    <section className='flex justify-between flex-wrap sec_cv'>
                        <aside className='cv_avatar'>
                            <div className="px-6 bg-white rounded-[20px] text-center relative">
                                <Avatar />
                                <div className="cv_avatar_content pt-[100px] pb-[20px] shadow-xl">
                                    <Profile />
                                    <Contact />
                                </div>
                            </div>
                        </aside>
                        <aside className='cv_content shadow-xl'>
                            <AboutMe />
                            <Resume />
                            <Skills />
                            <Interests />
                            <p className="copyright">© 2023 All Rights Reserved by LE VAN LINH.</p>
                        </aside>
                    </section>
                </div>
            </main>
        </>
    )
}

export default App
