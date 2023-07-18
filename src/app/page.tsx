import anime from 'animejs/lib/anime.es.js';
import Link from 'next/link';
import spotify_img from './assets/spotify.png';
import soundcloud_img from './assets/soundcloud.png';
import { StaticImageData } from 'next/image';

import Image from 'next/image';

//make it one big scrolldown like the pertubator site


//big and stretched out
const Title = () => {
  return (
    <h1 className='page-title text-8xl flex justify-center 
    w-full mx-auto tracking-widest'>
      crystal abyss
    </h1>
  )

}

//use spotify api
const LatestRelease = () => {
  return (
    <figure>
      <h1></h1>
      <img></img> {/*can I get the album cover too? */}
    </figure>
  )
}

interface ListenProps {
  title: string;
  link_name?: string;
  img_src: StaticImageData;
}

const ListenComponent: React.FC<ListenProps> = ({ link_name, img_src, title }) => {
  return (
    <li className='flex text-2xl'>
      <Image src={img_src} alt='streaming service logo'
        className='max-w-sm w-24 mr-4' />
      {
        link_name ?
          <div className='items-center my-auto'>
            <a href={link_name} >
              {title}
            </a>
          </div> :
          <div className='items-center my-auto'>
            <div>Coming soon</div>
          </div>
      }

    </li>
  )
}
const Discography = () => {

}
const Socials = () => {

}
//list streaming services
const Listen = () => {
  return (
    <section>
      <Header text='Listen' />
      <ul className='space-y-8'>
        <ListenComponent
          img_src={spotify_img}
          title='Spotify'
        />
        <ListenComponent
          link_name='https://soundcloud.com/user-727553192'
          img_src={soundcloud_img}
          title='Soundcloud' />
      </ul>
    </section>
  )
}


const Header: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h1 className='text-4xl'>{text}</h1>
      <hr className='mb-4'></hr>
    </>

  )
}
const About = () => {
  return (
    <section>
      <Header text='A bit about me' />
      <p className='text-xl leading-relaxed'>
        Crystal Abyss is a music project by me, Benjamin Donahue.
        Music has always been a deep love of mine since I was little,
        so...here I am fullfilling one of my biggest dreams. I take a lot
        of inspiration from video game music, composers such as
        <a href='https://open.spotify.com/track/4aPltIjGkJx26Y9cBHu14U?si=66d4d060c0ec4fec' target='_blank'> Yoko Shimomura </a>
        and <a href='https://open.spotify.com/track/65CefKbmaG0ZkumWSFKbxC?si=7c7af95103094401' target='_blank'>Yuka Kitamura </a>
        being a couple of my biggest inspirations along with
        other artists like <a href='https://open.spotify.com/track/6rMRUcrL63WNnhMPYew7pA?si=17d1a83abb8d437f' target='_blank'>MGLA </a> and
        <a href='https://open.spotify.com/track/4m4Yj2z7CG1LUNbcg1uOP3?si=bd5d217dd6614e89' target='_blank'> Perturbator. </a>
        Dark and beautiful with a story in mind is how I compose. Thanks for visiting my site!
      </p>
    </section>
  )
}
export default function Home() {
  return (
    <main className='w-full space-y-16 '>
      <Title />
      <section className='justify-center mx-auto max-w-2xl space-y-16 '>
        <Listen />

        <About />


      </section>




      <script src="anime.min.js"></script>
    </main>
  );
}


//flower petals circling a sphere, use elipse svg
