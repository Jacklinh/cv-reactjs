
import Education from '../Education';
import Experience from '../Experience';
import { FiBookOpen, FiGitPullRequest } from "react-icons/fi";
const Resume = () => {
    return (
        <article className='box_article'>
            <h2 className='heading'>Sơ yếu lý lịch</h2>
            <div className="cv_row2">
                <div className="cv_col">
                    <h3 className='sub_heading'><span><FiBookOpen /></span>Trình độ học vấn</h3>
                    <Education />
                </div>
                <div className="cv_col">
                    <h3 className='sub_heading'><span><FiGitPullRequest /></span>Kinh Nghiệm</h3>
                    <Experience />
                </div>
            </div>
        </article>
    )
}

export default Resume