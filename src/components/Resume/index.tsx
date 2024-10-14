
import Education from '../Education';
import Experience from '../Experience';
import { FiBookOpen, FiGitPullRequest } from "react-icons/fi";
const Resume = () => {
    return (
        <article className='box_article'>
            <h2 className='heading'>Resume</h2>
            <div className="cv_row2">
                <div className="cv_col">
                    <h3 className='sub_heading'><span><FiBookOpen /></span>Education</h3>
                    <Education />
                </div>
                <div className="cv_col">
                    <h3 className='sub_heading'><span><FiGitPullRequest /></span>Professional Experience</h3>
                    <Experience />
                </div>
            </div>
        </article>
    )
}

export default Resume