import { personInfo } from '../../data/personInfo';
import styles from './Interests.module.css';
type SingleInterestsType = {
    name: string,
}
const SingleInterests = ({prop}:{prop: SingleInterestsType}) => {
    return (
        <li>
            <p>{prop.name}</p>
        </li>
    )
}
const Interests = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Sở thích</h2>
        <ul className={styles.interests_list}>
            {
                personInfo[0].interests.map((item) => <SingleInterests key={`SingleInterests_${item.id}`} prop={item} />)
            }
        </ul>
    </article>
  )
}

export default Interests