import { personInfo } from '../../data/personInfo';
import styles from '../Resume/Resume.module.css';

type SingleCourse = {
    name: string,
    desc: string,
}
const SingleCourse = ({prop}:{prop: SingleCourse}) => {
    return (
        <li>
            <div className={styles.resume_item}>
                <h4 className={styles.resume_name}>{prop.name}</h4>
                <p>{prop.desc}</p>
            </div>
        </li>
    )
}
const Course = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Course</h2>
        <ul className={styles.skill_list}>
            {
                personInfo[0].courses.map((item) => <SingleCourse key={`SingleCourse_${item.id}`} prop={item} />)
            }
        </ul>
    </article>
  )
}

export default Course