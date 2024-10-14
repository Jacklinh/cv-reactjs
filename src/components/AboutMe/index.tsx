import { personInfo } from '../../data/personInfo';

type SingleAboutMeType = {
    content: string
}
const SingleAboutMe = ({prop}:{prop: SingleAboutMeType}) => {
    return (
        <p className='mb-[20px] text-justify'>{prop.content}</p>
    )
}
const AboutMe = () => {
  return (
    <>
        <article className='box_article'>
            <h2 className='heading'>Introduce</h2>
            {
                personInfo[0].aboutme.map((item) => <SingleAboutMe key={`SingleAboutMe_${item.id}`} prop={item} />)
            }
        </article>
    </>
    
  )
}

export default AboutMe