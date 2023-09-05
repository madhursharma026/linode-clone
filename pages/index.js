import HeaderNavbar from './components/Header/HeaderNavbar';
import Footer from './components/Homepage/Footer';
import Section1 from './components/Homepage/Section1';
import Section2 from './components/Homepage/Section2';
import Section3 from './components/Homepage/Section3';
import Section4 from './components/Homepage/Section4';
import Section5 from './components/Homepage/Section5';
import Section6 from './components/Homepage/Section6';
import Section7 from './components/Homepage/Section7';
import Section8 from './components/Homepage/Section8';
import Section9 from './components/Homepage/Section9';

export default function Home() {
  return (
    <div style={{ background: '#FAFAFC' }}>
      <HeaderNavbar />
      <div style={{ marginTop: '70px' }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Footer />
      </div>
    </div>
  )
}
