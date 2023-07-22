'use client'
import anime from 'animejs/lib/anime.es.js';
import Link from 'next/link';
import spotify_img from './assets/spotify.png';
import soundcloud_img from './assets/soundcloud.png';
import youtube_img from './assets/youtube.png';
import twitter_img from './assets/twitter.png';
import github_img from './assets/github.png';
import ca_logo from './assets/ca_logo_nobg.png';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { link } from 'fs';

//make it one big scrolldown like the pertubator site

//big and stretched out
//perhaps use that animejs rippling grid effect instead of the h1?
const Title = () => {
  return (
    <section >
      <h1 className='page-title text-8xl flex justify-center 
    w-full mx-auto tracking-widest'>
        crystal abyss
      </h1>
      <hr className='opacity-20 -z-1 max-w-4xl justify-center 
      flex mx-auto mb-32'></hr>
    </section>

  )
}
//uses a hash lookup for tracks
const CurrentDescription = () => {
  return (
    <p>
      temp
    </p>
  )

}
//or upcoming, whatever fits
const LatestRelease = () => {

  const [isDescShown, setIsDescShown] = useState(true);

  return (
    <div className='glass-pre'>
      <section className='glass release'>
        <figure>
          <h1></h1>
          <iframe
            src="https://open.spotify.com/embed/track/4kxdr5ei4XLYpHP3p5JAn0?utm_source=generator" width="100%" height="352" frameBorder="0"
            allowFullScreen
            allow="autoplay; 
        clipboard-write; 
        encrypted-media; 
        fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
          <p>description</p>
        </figure>
      </section>
    </div>
  )
}

interface ListenProps {
  title: string;
  link_name?: string;
  img_src: StaticImageData;
}

interface ImageProps {
  img_src: StaticImageData;
  alt: string;
}

const ImageComponent: React.FC<ImageProps> = ({
  img_src, alt }) => {
  return (
    <Image src={img_src} alt={alt}
      className='image-c max-w-sm w-24 mr-4 rounded-xl' />

  )
}

const ListenComponent: React.FC<ListenProps> = ({ link_name, img_src, title }) => {
  return (
    <li className='flex text-2xl'>
      {link_name ?
        <a href={link_name} target='_blank'>
          <ImageComponent img_src={img_src} alt={`${title} logo`} />
        </a> :
        <ImageComponent img_src={img_src} alt={`${title} logo`} />
      }

      {
        link_name ?
          <div className='items-center my-auto'>
            <a href={link_name} target='_blank' >
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

interface SocialsProps {
  title: string;
  img_src: StaticImageData;
  link_name: string
}
const SocialsComponent: React.FC<SocialsProps> = ({ title, link_name, img_src }) => {
  return (
    <li className='flex text-2xl'>
      <a href={link_name} target='_blank'>
        <ImageComponent img_src={img_src} alt={`${title} logo`} />
      </a>
      <a href={link_name}>
        <h1>{title}</h1>
      </a>
    </li>
  )
}
const Socials = () => {


  return (
    <section className='glass-pre'>
      <div className='glass staggered'>
        <Header text='Follow me here' />
        <ul className='space-y-8'>
          <SocialsComponent
            title='Twitter'
            link_name='https://twitter.com/ca_music_'
            img_src={twitter_img}
          />
          <SocialsComponent
            title='Github'
            link_name='https://github.com/OblivionNoirV2'
            img_src={github_img} />
        </ul>
      </div>
    </section>
  )
}


//list streaming services
//the div wrapped around creates the displaced border
const Listen = () => {
  return (
    <div className='glass-pre'>
      <section className='glass'>
        <Header text='Listen' />
        <ul className='space-y-8'>
          <ListenComponent
            link_name='https://open.spotify.com/artist/5OKSxZy691sNwb7rMoA08L'
            img_src={spotify_img}
            title='Spotify'
          />
          <ListenComponent
            link_name='https://soundcloud.com/user-727553192'
            img_src={soundcloud_img}
            title='Soundcloud' />
          <ListenComponent
            link_name='https://www.youtube.com/channel/UCLF1VI-aiW0Q76jwAIprxFg'
            img_src={youtube_img}
            title='YouTube'
          />
        </ul>
      </section>
    </div>
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
    <>
      <div className='glass-pre'>
        <section className='glass'>
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
            Dark and beautiful with a story in mind is how I compose. Thanks for visiting my site and I hope you like what you hear!
          </p>
        </section>
      </div>
    </>
  )
}
export default function Home() {

  useEffect(() => {
    const animation = anime({
      targets: '.glass-pre',
      translateY: -80,
      autoplay: false, //only run when in view
    });

    const element = document.querySelector('.glass-pre');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animation.play();
        }
      });
    }, {
      threshold: 1.0
    });

    if (element) {
      observer.observe(element);
    }

    //Clean up observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <main className='w-full space-y-16 '>
      <Title />

      <section className='justify-center mx-auto max-w-2xl space-y-16'>
        <LatestRelease />
        <Listen />
        <Socials />
        <About />
        <Image src={ca_logo} alt="crystal abyss logo"
          className='rounded-2xl max-w-[16rem] mx-auto' />
        <br></br>
      </section>
      <script src="anime.min.js" async></script>

    </main>
  );
}


//flower petals circling a sphere, use elipse svg
