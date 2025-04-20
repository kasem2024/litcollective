
import Academy from './components/Academy'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Video from './components/Video'

function App() {
  
  return (
    <>
     <main className='bg-[#000000] max-w-[1440px] m-auto '>
        <section className='mb-[100px]'>
          <Header/>
          <Hero/>
        </section>
        <section>
          <Video/>
          <Brands/>
        </section>
        <section>
          <Academy/>
          <Footer/>
        </section>
     </main>
    </>
  )
}

export default App
