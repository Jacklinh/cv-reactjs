  
import { FiFacebook } from "react-icons/fi";
import { personInfo } from '../../data/personInfo';

type SingleSocialType = {
    icon: string,
    link: string
}
const SingleSocial = ({prop}:{prop: SingleSocialType}) => {
    return (
        <>
             <li>
                <a href={prop.link} className='social_btn social_blue'>{<FiFacebook />}</a>
            </li>
        </>
    )
}
const Social = () => {
  return (
    <ul className='flex gap-4 justify-center'>
        {
            personInfo[0].socials.map((item) => <SingleSocial key={`SingleSocial_${item.id}`} prop={item} />)
        }
    </ul>
  )
}

export default Social