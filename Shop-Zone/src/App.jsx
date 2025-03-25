import './App.css'
import Boys from './compondent/boys'
import Header from './compondent/Header'
import Slider from './compondent/Slider'
import Welcome from './compondent/welcome'
import Girls from './compondent/girls'
import Eletric from './compondent/Eletric'
import Grocery from './compondent/grocery'
import Snacks from './compondent/snacks'
import Footer from './compondent/Footer'



function App() {
return(
  <>
      <Slider />
      <Header />
      <Welcome /> 
      <div id='mens-section' className='section'>
        <h1>Mens Section</h1>
        <Boys />
        <button onClick={() => window.open("https://www.google.com/search?q=Amazon+boys+collection&oq=Amazon+boys+collection&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgIGB4yCggCEAAYgAQYogQyBwgDEAAY7wUyCggEEAAYgAQYogQyBwgFEAAY7wUyBwgGEAAY7wXSAQkyMTA4OGowajeoAgiwAgHxBQw5rrwrTC2V8QUMOa68K0wtlQ&sourceid=chrome&ie=UTF-8", "_blank")}>More Items</button>
      </div>
      <div id='girls-section' className='section'>
        <h1>Girls Section</h1>
        <Girls />
        <button onClick={() => window.open("https://www.google.com/search?q=amazon+womens&sca_esv=0ee971cd3a354d8b&sxsrf=AHTn8zr20fZW3hCwHj4Cwr0tZUHPE7XxqA%3A1742746901072&ei=FTXgZ57wA53J4-EP_6rVIA&ved=0ahUKEwjezuKPzqCMAxWd5DgGHX9VFQQQ4dUDCBA&uact=5&oq=amazon+womens&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWFtYXpvbiB3b21lbnMyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBRAAGIAEMgcQABiABBgKMgcQABiABBgKSJhhUOYbWIVPcAN4A5ABApgBywygAbdgqgEPMi0yLjEuMS4yLjMuMi4zuAEDyAEA-AEBmAINoAL7LcICBBAAGEfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBhAAGBYYHsICChAAGIAEGBQYhwLCAgoQIxiABBgnGIoFwgIEECMYJ8ICChAAGIAEGEMYigXCAggQABiABBixA8ICEBAAGIAEGLEDGIMBGBQYhwLCAggQABiABBjJA8ICDhAuGIAEGLEDGNEDGMcBwgILEAAYgAQYkQIYigXCAg4QABiABBiRAhixAxiKBcICCxAAGIAEGLEDGIoFwgINEAAYgAQYsQMYFBiHApgDAIgGAZAGDJIHDzQuMS4yLjAuMi4xLjIuMaAHj2CyBw0yLTIuMC4yLjEuMi4xuAfnKw&sclient=gws-wiz-serp")}>More Items</button>
      </div>
      <div id='electric-section' className='section'>
        <h1>Eletric Section</h1>
        <Eletric />
        <button onClick={() => window.open("https://www.google.com/search?q=amazon+electronics&sca_esv=0ee971cd3a354d8b&sxsrf=AHTn8zpaMfU1v3keswCuBlbKpBaLlTmujw%3A1742746920876&ei=KDXgZ7-MNeiY4-EPstSbmQc&oq=amazon+elect&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGFtYXpvbiBlbGVjdCoCCAAyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIiCRQqAFYjRlwAXgBkAEBmAGDBKAB3BmqAQswLjIuNi4wLjIuMbgBAcgBAPgBAZgCCaAC8xPCAgoQABiwAxjWBBhHwgIEECMYJ8ICDBAAGIAEGEMYigUYCsICDRAAGIAEGLEDGBQYhwLCAggQABiABBixA8ICCxAAGIAEGLEDGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgoQIxiABBgnGIoFwgIQEAAYgAQYsQMYgwEYFBiHAsICCBAAGIAEGMkDwgILEAAYgAQYsQMYgwGYAwCIBgGQBgiSBwkxLjAuNS4xLjKgB4VLsgcHMi01LjEuMrgH3BM&sclient=gws-wiz-serp")}>More Items</button>
      </div>
      <div id='grocery-section' className='section'>
        <h1>Grocery Section</h1>
        <Grocery />
        <button onClick={() => window.open("https://www.google.com/search?q=amazon+grocery&sca_esv=0ee971cd3a354d8b&sxsrf=AHTn8zpCxCkBqp9BoTywm-H51SdlcIkQzw%3A1742746948828&ei=RDXgZ9OiMtaZ4-EPgvzdmQ8&oq=amazon+groc&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2FtYXpvbiBncm9jKgIIADIOEAAYgAQYkQIYsQMYigUyBRAAGIAEMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyBRAAGIAEMggQABiABBixAzIFEAAYgAQyChAAGIAEGBQYhwIyBRAAGIAEMgUQABiABEi_NVBAWIsncAF4AZABAJgBqwigAcokqgEPMC4zLjcuMi4wLjEuMC4xuAEByAEA-AEBmAIIoAKNDcICChAAGLADGNYEGEfCAhMQLhiABBiwAxjRAxhDGMcBGIoFwgINEAAYgAQYsAMYQxiKBcICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYFBiHAsICCxAAGIAEGLEDGIMBwgIEECMYJ8ICEBAAGIAEGLEDGIMBGBQYhwLCAg4QLhiABBixAxjRAxjHAZgDAIgGAZAGCpIHBTEuMC43oAeiX7IHAzItN7gH-Qw&sclient=gws-wiz-serp")}>More Items</button>
      </div>
      <div id='snacks-section' className='section'>
        <h1>Snacks Section</h1>
        <Snacks />
        <button onClick={() => window.open("https://www.google.com/search?q=amazon+snacks+&sca_esv=0ee971cd3a354d8b&sxsrf=AHTn8zrXhtNkGy4_tb3Qtwc2VxC118PbLw%3A1742747005859&ei=fTXgZ56aNKPE4-EPkKn_wAE&ved=0ahUKEwjezN7BzqCMAxUj4jgGHZDUHxgQ4dUDCBA&uact=5&oq=amazon+snacks+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmFtYXpvbiBzbmFja3MgMgoQIxiABBgnGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSP0UULcBWIMNcAB4ApABAJgBogWgAegNqgEDNS0zuAEDyAEA-AEBmAIDoAKgCsICBBAAGEeYAwCIBgGQBgiSBwcxLjQtMS4xoAfSF7IHBTQtMS4xuAeBCg&sclient=gws-wiz-serp")}>More Items</button>
      </div>

      <Footer />
    </>
  );
}

export default App
