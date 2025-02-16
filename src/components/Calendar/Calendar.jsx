import Images from '../Images/Images'
import './Calendar.css'

function Entry(props) {
    if (props.image === 'empty') {
        return (
            <div className='calendar-empty-entry'></div>
        )
    }
    return (
        <div className='calendar-entry'>
            <img src={Images[props.image].img} />
            <span>{}</span>
            <div className='calendar-entry-day-container'>
                <span className='calendar-entry-day'>{props.day}</span>
            </div>
        </div>
    )
}

function Calendar(props) {
    const elements = props.empty + props.days
    let entries = []
    for (let i = 0; i < props.empty; i++) {
        entries.push(<Entry key={i} image={'empty'}/>)
    } 
    for (let i = 0; i < props.days; i++) {
            entries.push(<Entry key={i + props.empty} day={i + 1} image={props.images[i]}/>)
    }

    return (
        <>
            <h2 className='month-title'>{props.month}</h2>
            <section className='calendar-container'>
                {entries}

            </section>
        </>
    )
}

export default Calendar