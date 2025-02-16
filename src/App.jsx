import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import EventInfo from './components/EventInfo/EventInfo'
import Calendar from './components/Calendar/Calendar'
import eventdata from './assets/eventdata'
import './App.css'

const month_names = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function LoadData() {
  const d = new Date();
  const month = month_names[d.getMonth()]

  const empty = new Date(d.getFullYear(), d.getMonth(), 1).getDay() - 1
  const days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()

  const loaded_data = eventdata[month]

  let upcoming_data = []
  let calendar_images = Array(days).fill(0)
  for (let i = 0; i < loaded_data.length; i++){
    let upcoming_entry = {
      id: i,
      date: loaded_data[i].start + " - " + loaded_data[i].end, 
      name: loaded_data[i].name, 
      discord_link: loaded_data[i].discord_link,
      wom_link: loaded_data[i].wom_link
    }
    upcoming_data.push(upcoming_entry)

    loaded_data[i].days.map((entry) => {
      calendar_images[entry - 1] = loaded_data[i].image
    })
  }

  let calendar_data = {
    month: month,
    empty: empty,
    days: days,
    images: calendar_images
  }

  const data = {
    upcoming: upcoming_data,
    calendar: calendar_data
  }

  return data
}

function App() {
  const data = LoadData()
  const calendar_data = data.calendar

  return (
    <main className='page-content-container'>
      <Navbar />
      <Header />
      <EventInfo {...data}/>
      <Calendar {...calendar_data}/>
    </main>
  )
}

export default App
