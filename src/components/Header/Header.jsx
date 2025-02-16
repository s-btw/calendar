import './Header.css'

function Header() {
    return (
        <header className='main-content'>
            <h1 className='schedule-title'>Event Schedule</h1>
            <h2 className='schedule-intro'>Welcome to our clan calendar!</h2>
            <span className='schedule-intro-tag'>Here you will see an overview of what's to come over the next month or so.</span>
        </header>
    )
}

export default Header