
import { personInfo } from '../../data/personInfo';
type SingleSocialType = {
    icon: string,
    link: string,
}
const SingleSocial = ({prop}:{prop: SingleSocialType}) => {
    const Icon = prop.icon;
    return (
        <>
             <li>
                <a href={prop.link} className='social_btn social_blue'>{<Icon />}</a>
            </li>
        </>
    )
}
const Social = () => {
    
  return (
    <ul className='flex gap-4 justify-center'>
        {
            personInfo[0].socials.map((item) =>{
                
                return (
                    <SingleSocial key={`SingleSocial_${item.id}`} prop={item} />
                )
            } )
        }
    </ul>
  )
}

export default Social