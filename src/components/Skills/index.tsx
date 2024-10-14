import { personInfo } from '../../data/personInfo';
import styles from './Skills.module.css';
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
const Skills = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Skills</h2>
        <ul className={styles.skill_list}>
            {
                personInfo[0].skills.map((item) => <SingleSkills key={`SingleSkills_${item.id}`} prop={item} />)
            }
        </ul>
    </article>
  )
}

export default Skills