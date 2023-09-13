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
        {id: 1, content: 'Mình là Lê Văn Linh, với niềm đam mê trong phát triển website cho các doanh nghiệp kinh doanh lĩnh vực truyền thông và công nghệ. Mình có khả năng lắng nghe và thấu hiểu mong muốn khách hàng nhanh giúp hoàn thành dự án đúng tiến độ.'},
        {id: 2, content: 'Thành thạo ngôn ngữ lập trình HTML, CSS, Javascript, Reactjs. Mình đang tìm kiếm sự nghiệp nâng cao với các thử thách, cơ hội khi quyết định tham gia vào công ty. Với Ưu điểm bản thân là học hỏi nhanh, trung thực và có trách nhiệm công việc. Khuyết điểm là ít nói, ngại khi phát biểu trước đám đông.'}
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