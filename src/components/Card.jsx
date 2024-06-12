/* eslint-disable react/prop-types */
import star from '/assets/star.png'

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className='card'>
            {badgeText && <div className='cardBadge'>{badgeText}</div>}
            <img src={`/assets/${props.coverImg}`} className='cardImage' />
            <div className='cardStats'>
                <img src={star} className='cardStar' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='cardTitle'>{props.title}</p>
            <p className='cardPrice'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}