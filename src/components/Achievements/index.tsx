import { personInfo } from '../../data/personInfo';
import styles from '../Interests/Interests.module.css'

type SingleAchievements = {
    name: string,
}
const SingleAchievements = ({prop}:{prop: SingleAchievements}) => {
    return (
        <li>
            <p>{prop.name}</p>
        </li>
    )
}
const Achievements = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Achievements</h2>
        <ul className={styles.interests_list}>
            {
                personInfo[0].achievements.map((item) => <SingleAchievements key={`SingleAchievements_${item.id}`} prop={item} />)
            }
        </ul>
    </article>
  )
}

export default Achievements