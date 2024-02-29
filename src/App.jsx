import { useState } from 'react'
import './App.css'

function App() {
  const [index,setIndex] = useState(0)
  const quotes = [
    {
      quote: 'hehe',
      author: 'me',
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ]
  function handleNextClick(){
    setIndex((index + 1) % quotes.length)
  }
  function handlePrevClick(){
    setIndex((index + quotes.length + 1) % quotes.length)
  }

  return (
    <div className='testimonials'>
      <div className='testimonials-quote'>
        {quotes[index].quote}
      </div>
      <div className='testimonials-author'>
        -{quotes[index].author}
      </div>

      <div className='testimonials-nav'>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default App
