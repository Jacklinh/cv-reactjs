import styles from './Contact.module.css';
import { personInfo } from '../../data/personInfo';

type SingleContacType = {
    icon: string,
    label: string,
    content: string,
}
const SingleContact = ({prop}:{prop:SingleContacType}) => {
    const Icon = prop.icon;
    return (
        <li>
            <div className={styles.cv_contact_item}>
                <div className={styles.cv_contact_icon}>
                    <span className='social_btn drop-shadow-xl'><Icon /></span>
                </div>
                <div className={styles.cv_contact_content}>
                    <p className={styles.contact_label}>{prop.label}</p>
                    <p className={styles.contact_desc}>{prop.content}</p>
                </div>
            </div>
        </li>
    )
}
const Contact = () => {
  return (
    <div className={styles.cv_contact}>
        <ul>
            {
                personInfo[0].contact.map((item)=> <SingleContact key={`SingleContact_${item.id}`} prop={item} />)  
            }
        </ul>
    </div>
  )
}

export default Contact