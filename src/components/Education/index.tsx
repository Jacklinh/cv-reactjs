import { personInfo } from '../../data/personInfo';
import styles from '../Resume/Resume.module.css';

type SingleEducationType = {
    name: string,
    time: string,
    content: string
}
const SingleAEducation = ({prop}:{prop: SingleEducationType}) => {
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
const Education = () => {
  return (
    <div className={styles.resume_list}>
        <ul className={styles.resume_education}>
            {
                personInfo[0].education.map((item) => <SingleAEducation key={`SingleAEducation_${item.id}`} prop={item} />)
            }
        </ul>
    </div>
  )
}

export default Education