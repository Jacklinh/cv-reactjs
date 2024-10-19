import { personInfo } from '../../data/personInfo';
import styles from './SkillsDetails.module.css';
type SingleSkillsType = {
    name: string,
    percent: number
}
const SingleSkills = ({prop}:{prop: SingleSkillsType}) => {
    return (
        <li>
            <p className={styles.skill_lablel}>
                <span className={styles.skill_name}>{prop.name}</span>
                <span className={styles.skill_progress_label}>{prop.percent}%</span>
            </p>
            <p className={styles.skill_progress}>
                <span className={styles.percent} style={{width: `${prop.percent}%`,backgroundColor: `rgb(250, 82, ${prop.percent})`}}></span>
            </p>
        </li>
    )
}
const SkillsDetails = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Skills Details</h2>
    </article>
  )
}

export default SkillsDetails