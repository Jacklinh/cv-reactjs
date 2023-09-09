
import styles from './Profile.module.css';
import { personInfo } from '../../data/personInfo';
import Social from '../Social';

type ProfileType = {
    name: string,
    career: string
}
const SingleProfile = ({prop}:{prop: ProfileType}) => {
    return (
        <>
             <h1>{prop.name}</h1>
             <h3>{prop.career}</h3>
        </>
    )
}
const Profile = () => {
  return (
    <div className={styles.cv_profile}>
        <SingleProfile prop={personInfo[0]} />
        <Social />
    </div>
  )
}

export default Profile