import { personInfo } from '../../data/personInfo';
import styles from '../Interests/Interests.module.css'

type SingleProjects = {
    foundation: string,
    name: string,
}
const SingleProjects = ({prop}:{prop: SingleProjects}) => {
    return (
        <li>
            <p><a href={prop.name} target='_blank'>{prop.name}</a> - ( <span>{prop.foundation}</span> )</p>
        </li>
    )
}
const Projects = () => {
  return (
    <article className='box_article'>
        <h2 className='heading'>Projects</h2>
        <ul className={styles.interests_list}>
            {
                personInfo[0].projects.map((item) => <SingleProjects key={`SingleProjects_${item.id}`} prop={item} />)
            }
        </ul>
    </article>
  )
}

export default Projects