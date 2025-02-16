import './EventInfo.css'

function Date(props) {
    return (
        <h5 className='event-date'>{props.date}</h5>
    )
}

function Name(props) {
    return (
        <h5 className='event-name'>{props.name}</h5>
    )
}

function Link(props) {
    if (!props.discord_link || !props.wom_link) {
        return (
            <span className='event-links'>
                <h5 className='event-no-link'>info to come</h5>
            </span>   
        )
    }

    let discord
    let wom

    if (props.discord_link && props.wom_link) {
        discord = <a className='event-links' href={props.discord_link} target='_blank'><h5 className='event-link'>Discord</h5></a>
        wom = <a className='event-links' href={props.wom_link} target='_blank'><h5 className='event-link'>WiseOldMan</h5></a>
    }

    return (
        <span className='event-links'>
            {discord}
            <h5 className='event-link-seperator'>|</h5>
            {wom}
        </span>
    )
}

function EventInfo(props) {
    const entries = props.upcoming.map((entry) => {
        return (
            <section className='event-info' key={entry.id}>
                <Date  date={entry.date}/>
                <Name  name={entry.name}/>
                <Link  {...entry}/>
            </section>
        )
    })

    return (
        <>
            <section className='event-info'>
                <h3 className='schedule-heading' >Date</h3>
                <h3 className='schedule-heading' >Event</h3>
                <h3 className='schedule-heading' >Info Links</h3>
            </section>
            {entries}
        </>
    )
}

export default EventInfo