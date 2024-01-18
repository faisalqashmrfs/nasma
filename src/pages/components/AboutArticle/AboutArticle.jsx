import './AboutArticle.css'

export default function AboutArticle(props) {
  return (
    <section className='AboutArticle'>
        <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.Date}</span>
        </div>
        <p className='Descrip'>{props.descrip}</p>
        <div className='tags'>
        {props.tag}
        </div>
    </section>
  )
}
