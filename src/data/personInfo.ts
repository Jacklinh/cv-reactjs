import { FiFacebook,FiTwitter,FiSmartphone,FiMapPin,FiMail,FiCalendar } from "react-icons/fi";
export const personInfo = [
   {
    id: 1,
    avatar: './images/avatar.JPG',
    name: 'Lê văn linh',
    career: 'Front-End Developer',
    socials: [
        {id: 1, icon: FiFacebook, link: 'https://www.facebook.com/rinlee138'},
        {id: 2, icon: FiTwitter, link: 'https://www.facebook.com/rinlee138'},
    ],
    contact: [
        {id: 1, icon: FiSmartphone, label:'điện thoại', content: '0342681138'},
        {id: 2, icon: FiMapPin, label:'địa chỉ', content: 'Nguyễn Tất Thành, Đà Nẵng'},
        {id: 3, icon: FiMail, label:'Email', content: 'jacklinh79@gmail.com'},
        {id: 4, icon: FiCalendar, label:'Birthday', content: '05.04.1993'},
    ],
    aboutme: [
        {id: 1, content: 'Mình lập trình viên Frontend với hơn 5 năm chuyên môn về phát triển giao diện người dùng bằng HTML, CSS, JavaScript, CMS, hiện đang chuyển mình mạnh mẽ thành một MERN Stack Developer toàn diện. Với sự đam mê phát triển các ứng dụng web hiện đại, mình không chỉ làm chủ frontend mà còn mở rộng kỹ năng vào backend với Node.js, Express.js, và MongoDB, Reactjs, Nextjs. Luôn chú trọng đến hiệu suất, tính bảo mật, và trải nghiệm người dùng, mình khao khát mang lại các giải pháp công nghệ đột phá, vừa tối ưu vừa có khả năng mở rộng.'},
    ],
    education: [
        {id: 1, time: '2012-2015', name: 'Đại học sư phạm kỹ thuật Đà nẵng', content: 'Cử nhân nghành hệ thống thông tin quản lý'},
        {id: 2, time: '2023-nay', name: 'Trung tâm Aptech đà nẵng', content: 'Reactjs'}
    ],
    experience: [
        {id: 1, time: '2016-2018', name: 'Công ty THHH Themesflat ', content: 'Developer Front End'},
        {id: 2, time: '2018-nay', name: 'Công ty thiết kế toàn cầu', content: 'Designer'}
    ],
    skills: [
        {id: 1, name: 'html', percent: 90},
        {id: 2, name: 'css', percent: 90},
        {id: 3, name: 'javascript', percent: 80},
        {id: 4, name: 'reactjs', percent: 50},
    ],
    interests: [
        {id: 1, name: 'Phá code'},
        {id: 2, name: 'Du lịch'},
        {id: 3, name: 'Đọc truyện'},
    ]
   }
]