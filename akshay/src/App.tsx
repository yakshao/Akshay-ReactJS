import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, NavLink, useLocation, HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import EmblaCarousel from './EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import articles from './articles';


export function App() {

  const [showFixedNav, setShowFixedNav] = useState(false);

  const [showMobNav, setShowMobNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

  })


  function handleScroll() {
    window.scrollY > 70 ? setShowFixedNav(true) : setShowFixedNav(false);

  }




  return (

    <HashRouter>
      <StickyNav setShowMobNav={setShowMobNav} showFixedNav={showFixedNav} />
      <Header setShowMobNav={setShowMobNav} />
      {showMobNav && <MobileNav setShowMobNav={setShowMobNav} />}
      <Routes>
        <Route path='/' element={<><ContentSummary /> <Portfolio />  <Services /> <RecentWork /> </>} />
        <Route path='/services' element={<> < Services /> </>} />
        <Route path='/portfolio' element={<> <ContentSummary /> <Portfolio /></>} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<BarC />} />
        <Route path='/article' element={<ContentFull />} />
      </Routes>
      <Footer />
    </HashRouter>

  )
}

function BarC() {

  useEffect(() => {
    AOS.init();
  }, [])

  return <>

    <div data-aos='fade-up' className='video'>
      <video loop muted autoPlay width={'100%'}>
        <source
          src='/vid.mp4' />

      </video>
    </div>

  </>;
}

function Header({ setShowMobNav }: any) {

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (<div className='pHeader2'>

    <div
      className='pHeaderLogo' >
      <NavLink to='/'>
        <p>Akshay </p>
      </NavLink>

    </div>

    <div className='pHeaderNav'>
      <div className='navLinks flex'>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/'}><div><a href=''>Home</a></div></NavLink></div>


        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/services'}><div><a href=''>Services</a></div></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/portfolio'}><a href=''>Portfolio</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/about'}><a href=''>About</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/contact'}><a href=''>Contact</a></NavLink></div>

        {/* <div className='navLink'> <NavLink to={'/services'}><a href=''>Career</a></NavLink></div> */}

      </div>
      <div
        className='mobNav'
        onClick={() => setShowMobNav(true)}
      >
        <div className='bread'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  </div>)
}

function StickyNav({ setShowMobNav, showFixedNav }: any) {

  function toTop() {
    window.scrollTo(0, 0)
  }

  return <div className={showFixedNav ? 'stickyNavAnimStart stickyNav' : 'stickyNavAnimEnd stickyNav'}>
    <NavLink to='/'>
      <div
        onClick={() => { toTop(); }}
        className='flex center stickyNavTitle'>

        <p>Akshay</p>
      </div>
    </NavLink>

    <div className='stickyHeaderNav'>
      <div className='navLinks flex'>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current2' : ''}
          to={'/'}><div><a href=''>Home</a></div></NavLink></div>


        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current2' : ''}
          to={'/services'}><div><a href=''>Services</a></div></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current2' : ''}
          to={'/portfolio'}><a href=''>Portfolio</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current2' : ''}
          to={'/about'}><a href=''>About</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current2' : ''}
          to={'/contact'}><a href=''>Contact</a></NavLink></div>
        {/* <div className='navLink'> <NavLink to={'/services'}><a href=''>Career</a></NavLink></div> */}
      </div>
    </div>
    <div
      className='mobNav'
      onClick={() => setShowMobNav(true)}
    >
      <div className='bread'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  </div>;
}

function Services() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div data-aos='fade-up' className='services'>
        <div className='flex '>
          <h1>Services</h1>

        </div>

        <div data-aos='fade-up' className='cardContainer '>
          <div className="card" >
            <div className='cardImg'>
              <img
                src='/dgMarketing.png'
              />

            </div>
            <div className='cardContent'>
              <h4>Digital Marketing</h4>
              <p>
                <b> Ready to grow your business?</b> Join the hundreds of companies who have benefited from our sales strategies. Our seasoned team knows what it takes to boost your sales.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="card" >
            <div className='cardImg'>
              <img
                src='/webdevW.png'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>Web Development</h4>
              <p><b>We know how to convert visitors to customers.</b> We offer a comprehensive range of services including design, development, marketing, and SEO to drive more sales for your company.</p>
            </div>
            <div>


            </div>

          </div>

          <div className="card" >
            <div className='cardImg'>
              <img
                src='/ecom.jpg'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>E-Commerce</h4>
              <p><b>Your website: Your silent salesperson.</b>
                &nbsp;Use the power of the internet to grow your business. Tell your brand story through your custom-build website, designed just for you by our expert developers.
              </p>
            </div>
          </div>


        </div>
        <div data-aos='fade-up' className='cardContainer '>
          <div className="card" >
            <div className='cardImg'>
              <img
                src='/dgMarketing.png'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>Branding</h4>
              <p>
                <b> Ready to grow your business?</b> Join the hundreds of companies who have benefited from our sales strategies. Our seasoned team knows what it takes to boost your sales.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="card" >
            <div className='cardImg'>
              <img
                src='/webdevW.png'
              />

            </div>
            <div className='cardContent'>
              <h4>Video Animation</h4>
              <p><b>We know how to convert visitors to customers.</b> We offer a comprehensive range of services including design, development, marketing, and SEO to drive more sales for your company.</p>
            </div>
            <div>


            </div>

          </div>

          <div className="card" >
            <div className='cardImg'>
              <img
                src='/ecom.jpg'
              />

            </div>
            <div className='cardContent'>
              <h4>UI/UX Design</h4>
              <p><b>Your website: Your silent salesperson.</b>
                Use the power of the internet to grow your business. Tell your brand story through your custom-build website, designed just for you by our expert developers.
              </p>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

function Footer() {
  useEffect(() => {
    AOS.init();

  }, [])

  return (
    <>
      <div data-aos='fade-up' className='footerM'>
        <div data-aos='fade-up' className='footerChild footerColor1 center flexColumn'>
          <div>
            <h3>Design . Build . Launch</h3>

            <h1>Let's Build
            </h1>
            <h3>
              Something Awesome</h3>
          </div>

          <div className='faIcons'>
            <div className='faChild'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>

        </div>
        <div className='footerChild footerColor2'>
          {/* <div className='footerGrid'>
            <div>
              <h6>Overview</h6>
            </div>
            <div>
              <a href='#'>About Us </a>
            </div>
            <div>
              <a href='#'>Services</a>
            </div>
            <div>
              <a href='#'>Portfolio</a>
            </div>
            <div>
              <a href='#'>Blog</a>
            </div>
            <div>
              <a href='#'>Contact Us </a>
            </div>
            <div>
              <a href='#'>Privacy policy </a>
            </div>
            <div>
              <a href='#'>Terms and Conditions </a>
            </div>
            <div>
              <a href='#'>Returns and refunds policy </a>
            </div>
            <div>
              <a href='#'>Shipping policy</a>
            </div>
            <div>
              <a href='#'>Terms and Conditions </a>
            </div>
          </div> */}

          <div className='footerGrid'>
            <div><h6>Web solutions</h6></div>
            <div>
              <a href='#'>UI/UX Designs</a>
            </div>
            <div>
              <a href='#'>Ecommerce Web</a>
            </div>
            <div>
              <a href='#'>News Portal</a>
            </div>
            <div>
              <a href='#'>Personal portfolio</a>
            </div>
            <div>
              <a href='#'>LMS Portal</a>
            </div>
          </div>

          <div className='footerGrid2'>
            <div><h6>Digital Marketing</h6></div>
            <div>
              <a href='#'>PPC</a>
            </div>
            <div>
              <a href='#'>SEO</a>
            </div>
            <div>
              <a href='#'>CRO</a>
            </div>
            <div>
              <a href='#'>Logo Design</a>
            </div>
            <div>
              <a href='#'>Social Media Marketing</a>
            </div>
            <div>
              <a href='#'>Whatsapp Marketing</a>
            </div>
            <div>
              <a href='#'>Email Marketing</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBottom'>

        <p>© Akshay Patil</p>
      </div>
    </>

  )
}

function RecentWork() {
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className='flex center'>
      <div className='recentWork'>
        <div className='flex center'>
          <h2> Recent Work</h2>
        </div>

        <div>

          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

      </div>
    </div>
  )
}



function Portfolio() {

  let urls: any = [
    'https://barcadlyservices.com/wp-content/uploads/2023/08/Screenshot-2023-08-29-123921.png',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/sapce_14-min-jpg-qfs8t3z00gppy8ryeunb3fr5f02meho1mwf6u9dg2o.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/18-jpg-qg3ymaf9b82vpzgfmq88fidnji99itryqk51vy5nds.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/2-1-jpg-qg3ynfs5nxnhwtscx83th7xxoglexic5k8uf04gbs0.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/10-min-jpg-qfs8uuy6qd3xk48h73vb8hv17tg7q7m27k4pzss2hs.webp',
    'https://barcadlyservices.com/wp-content/uploads/2023/08/Screenshot-2023-08-29-123921.png',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/sapce_14-min-jpg-qfs8t3z00gppy8ryeunb3fr5f02meho1mwf6u9dg2o.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/18-jpg-qg3ymaf9b82vpzgfmq88fidnji99itryqk51vy5nds.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/2-1-jpg-qg3ynfs5nxnhwtscx83th7xxoglexic5k8uf04gbs0.webp',
    'https://barcadlyservices.com/wp-content/uploads/elementor/thumbs/10-min-jpg-qfs8uuy6qd3xk48h73vb8hv17tg7q7m27k4pzss2hs.webp',

  ]

  useEffect(() => {
    AOS.init();

  }, [])

  return (
    <>
      <div data-aos='fade-up' className='flex center margin10'>
        <h1>Graphics</h1>
      </div>
      <div className='flex center'>


        <div data-aos='fade-up' className='portfolio'>
          {urls.map((source: any) => {
            return (
              <div className='gridImg'>
                <img
                  src={source}
                />
              </div>

            )
          })}


        </div>

      </div>
    </>
  )
}

function AboutUs() {
  useEffect(() => {
    AOS.init();

  }, [])

  return (
    <div data-aos='fade-up' className='aboutus'>

      <div className='avtar'>
        <img
          src='/avt.jpg'
        />

      </div>
      <h1>About Me</h1>

      <div className='paddingContent'>
        <p><b>I</b> am a jack of all trades, trying to be master of some. I am a web developer and content writer and a voracious reader. I am a web Frontend developer, content writer and a voracious reader. I also enjoy  UX/UI designing and  writing copy for the same.
          <p>In my spare time, I compose music with FL Studio and Ableton Live or contribute on Wikipedia and StackOverflow.</p> </p>

      </div>
    </div>

  )
}

function Contact() {

  return (
    <>

      <div className='aboutus'>
        <h1>Head Office</h1>
      </div>
      <div className='paddingContent'>
        <div className='paddingContent'> <p>3rs floor, Trade Center, Kolhapur Station Rd</p></div>
        <div className='paddingContent'> <p>New Shahupuri, Kolhapur,</p></div>
        <div className='paddingContent'> <p>Kolhapur, Maharashtra. 416001</p></div>
      </div>

    </>
  )
}

function MobileNav({ setShowMobNav }: any) {

  return (
    <div className='mobileNav'
      onClick={() => setShowMobNav(false)}
    >
      <div className='navLink'>

        <div className='mobNavLinks'>
          <NavLink
            className={({ isActive }) => isActive ? 'current' : ''}
            to={'/'}><div><a href=''>Home</a></div></NavLink></div>


        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/services'}><div><a href=''>Services</a></div></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/portfolio'}><a href=''>Portfolio</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/about'}><a href=''>About Us</a></NavLink></div>
        <div className='navLink'> <NavLink
          className={({ isActive }) => isActive ? 'current' : ''}
          to={'/contact'}><a href=''>Contact Us</a></NavLink></div>

        <div className='navLink'> <NavLink to={'/services'}><a href=''>Career</a></NavLink></div>

      </div>

    </div>
  )
}

function ContentFull() {

  return (

    <>
      <div className='contentTitle flex center'>
        <h1>{articles[1].name}  </h1>
      </div>
      <div className='flex center'>

        <div className='contentPost'>
          {articles[1].content}
        </div>
      </div>
    </>
  )
}

function ContentSummary() {

  return (
    <>
      <div data-aos='fade-up' className='flex center margin10'>
        <h1>Content Writing</h1>
      </div>
      <div className='flex center'>


        <div className='summary'>
          <NavLink to={'/article'}>
            <div data-aos='fade-up' className="summaryCard" >
              <div className='cardImg'>
                <img
                  src='/manWalking.jpg'
                />

              </div>
              <div data-aos='fade-up' className='cardContent'>
                <h4>A Night With Flexbox...</h4>
                <p><b>It was a scary night.</b> God of CSS had set the background-color to ‘grey’ and ‘display: none’ to most things. The clock had started yawning A…M. And in such a dark and void night, Flexbox was walking home, alone and hurriedly...</p>
              </div>
              <div>


              </div>

            </div>
          </NavLink>

          <NavLink to={'/article'}>
            <div data-aos='fade-up' className="summaryCard" >
              <div className='cardImg'>
                <img
                  src='/flowers.jpg'
                />
                <div className='category'> 
                  <p>Fiction</p>
                </div>
              </div>
              <div data-aos='fade-up' className='cardContent'>
                <h4>A Night With Flexbox...</h4>
                <p><b>It was a scary night.</b> God of CSS had set the background-color to ‘grey’ and ‘display: none’ to most things. The clock had started yawning A…M. And in such a dark and void night, Flexbox was walking home, alone and hurriedly...</p>
              </div>
              <div>


              </div>

            </div>
          </NavLink>


          <NavLink to={'/services'}>
            <div data-aos='fade-up' className="summaryCard" >
              <div className='cardImg'>
                <img
                  src='/webdevW.png'
                />

              </div>
              <div data-aos='fade-up' className='cardContent'>
                <h4>Web Development</h4>
                <p><b>We know how to convert visitors to customers.</b> We offer a comprehensive range of services including design, development, marketing, and SEO to drive more sales for your company.</p>
              </div>
              <div>


              </div>

            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}
