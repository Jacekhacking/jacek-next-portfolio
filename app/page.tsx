import Image from 'next/image';
import Nav from './components/navigation/Nav';
// import styles from './scss/pages/_HomePage.scss';

export default function Home() {
  return (
    <section className="home_wrapper">
      <Nav />
      <h2 className="about_text">Hi, I'm Jacek!</h2>
    </section>
  );
}
