import { FiFacebook,FiSmartphone,FiMapPin,FiMail,FiCalendar } from "react-icons/fi";
export const personInfo = [
   {
    id: 1,
    avatar: './images/avatar.JPG',
    name: 'Lê văn linh',
    career: 'Developer',
    socials: [
        {id: 1, icon: FiFacebook, link: 'https://www.facebook.com/rinlee138/'},
    ],
    contact: [
        {id: 1, icon: FiSmartphone, label:'', content: '0342681138'},
        {id: 2, icon: FiMapPin, label:'', content: '884 Nguyễn Lương Bằng, P. Hoà Hiệp Nam, Q.Liên Chiểu, Đà Nẵng'},
        {id: 3, icon: FiMail, label:'', content: 'jacklinh79@gmail.com'},
        {id: 4, icon: FiCalendar, label:'', content: 'April 5 , 1993'},
    ],
    aboutme: [
        {id: 1, content: 'I am a Frontend developer with over 5 years of expertise in developing user interfaces using HTML, CSS, JavaScript, CMS, and am currently transforming myself into a comprehensive MERN Stack Developer. With a passion for developing modern web applications, I not only master the frontend but also expand my skills to the backend with Node.js, Express.js, and MongoDB, Reactjs, Nextjs. Always focusing on performance, security, and user experience, I aspire to bring breakthrough technology solutions that are both optimized and scalable.'},
    ],
    education: [
        {id: 1, time: '2012-2015', name: 'Đại học sư phạm kỹ thuật Đà nẵng', content: 'Cử nhân nghành hệ thống thông tin quản lý'},
    ],
    experience: [
        {id: 1, time: '2017-2018', name: 'Công ty cổ phần công nghệ Themesflat ', content: 'Developer Front-End PSD To HTML'},
        {id: 2, time: '2018-Presend', name: 'Công ty thiết kế toàn cầu - GLOBAL DESIGN IT Co,ltd ', content: 'Developer Front-End CMS'}
    ],
    skills: [
        {id: 1, name: 'HTML5, CSS3, Bootstrap, Tailwind', percent: 100},
        {id: 2, name: 'JavaScript, Jquery', percent: 80},
        {id: 3, name: 'Photoshop, Ant Design', percent: 80},
        {id: 4, name: 'Github, Sourcetree', percent: 80},
        {id: 5, name: 'Reactjs, TypeScript, Nextjs', percent: 60},
        {id: 6, name: 'MongoDB, ExpressJS', percent: 60},
        {id: 7, name: 'NodeJS, ExpressJS', percent: 60},
    ],
    interests: [
        {id: 1, name: 'chess'},
        {id: 2, name: 'badminton'},
        {id: 3, name: 'learn new technology'},
    ],
    courses: [
        {id: 1, name: 'Reactjs Aptech Batch  R&N JS 34', desc: 'Github, Tailwind CSS, Reactjs'},
        {id: 2, name: 'Nodejs Aptech - Batch R&N JS 39', desc: 'Node.js, MongoDB, ExpressJS, Nextjs'},
    ],
    achievements: [
        {id: 1, name: 'MVP 2020, 2022, 2023'},
    ],
    projects: [
        {id: 1, foundation: 'CMS,HTML5, CSS3, Jquery ', name: 'https://www.city.setagaya.lg.jp/'},
        {id: 2, foundation: 'CMS,HTML5, CSS3, Jquery', name: 'https://www.city.bunkyo.lg.jp/'},
        {id: 3, foundation: 'CMS,HTML5, CSS3, Jquery', name: 'https://www.city.shizuoka.lg.jp/'},
        {id: 4, foundation: 'CMS,HTML5, CSS3, Jquery', name: 'https://www.city.meguro.tokyo.jp/'},
        {id: 5, foundation: 'CMS,HTML5, CSS3, Jquery', name: 'https://www.city.chuo.lg.jp/index.html'},
        {id: 6, foundation: 'Reactjs', name: 'https://jacklinh.github.io/cv-reactjs/'},
        {id: 7, foundation: 'Reactjs fetch api', name: 'https://github.com/Jacklinh/weather-app'},
        {id: 8, foundation: 'in development - A full stack e commerce web application built with React.js, Node.js, Express.js and MongoDB, Nextjs', name: 'https://github.com/Jacklinh/Nodejs-basic-note/tree/main/RinShop'},
    ]
   }
]