import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'
import './App.css'


export default function App() {
    const cards = data.map(element => <Card 
            key={element.id}
            {...element}/>)
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <section className='cardsList'>{cards}</section>            
        </div>
    )
}