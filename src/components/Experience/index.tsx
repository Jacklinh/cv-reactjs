import { personInfo } from '../../data/personInfo';
import styles from '../Resume/Resume.module.css';

type SingleExperienceType = {
    name: string,
    time: string,
    content: string
}
const SingleExperience = ({prop}:{prop: SingleExperienceType}) => {
    return (
        <li>
            <div className={styles.resume_item}>
                <p className={styles.resume_time}>{prop.time}</p>
                <h4 className={styles.resume_name}>{prop.name}</h4>
                <p>{prop.content}</p>
            </div>
        </li>
    )
}
const Experience = () => {
  return (
    <div className={styles.resume_list}>
        <ul className={styles.resume_experience}>
            {
                personInfo[0].experience.map((item) => <SingleExperience key={`SingleExperience_${item.id}`} prop={item} />)
            }
        </ul>
    </div>
  )
}

export default Experience