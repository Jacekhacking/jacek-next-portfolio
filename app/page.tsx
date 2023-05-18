import Image from 'next/image';
import Nav from './components/navigation/Nav';
// import styles from './scss/pages/_HomePage.scss';

export default function Home() {
  return (
    <section className="home-wrapper">
      <Nav />
      <h2 className="about-text">Hi, I'm Jacek!</h2>
      <p>A Software Developer from Salt Lake City, Utah!</p>
    </section>
  );
}
