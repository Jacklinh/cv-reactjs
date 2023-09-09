import { personInfo } from '../../data/personInfo';
import styles from './Avatar.module.css';

type SingleAvatarType = {
    avatar: string
}
const SingleAvatar = ({prop}:{prop: SingleAvatarType}) => {
    return (
        <p className={`${styles.avatar_img}`}><img src={prop.avatar} width={240} height={240} alt="" className='drop-shadow-xl' /></p>
    )
}
const Avatar = () => {
  return (
    <>
        <SingleAvatar prop={personInfo[0]} />
        
    </>
    
  )
}

export default Avatar