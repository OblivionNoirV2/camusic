import anime from 'animejs/lib/anime.es.js';
import Link from 'next/link';

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
//component so I can use it for multiple albums in the future
const Tracklist = (tracks: string[]) => {

}
//whatever I'm currently working on goes here

const CurrentProject = () => {
  return (
    <figure>
      <h4>Upcoming Album</h4>
      <h1>Artificial Eden</h1>
      <img></img>
    </figure>
  )
}
const PastReleases = () => {
  //for later...

}
interface ListenProps {
  link_name?: string;
  img_src: string;
}

const ListenComponent: React.FC<ListenProps> = ({ link_name, img_src }) => {
  return (
    <li>
      {
        link_name ?
          <a href=''>

          </a> : <div>Coming soon</div>
      }
      <img></img>
    </li>
  )
}
//list streaming services
const Listen = () => {
  <ul>
    <ListenComponent
      img_src=''
      link_name='https://soundcloud.com/user-727553192' />
  </ul>

}
const About = () => {
  return (
    <p>
      Crystal Abyss is a music project by me, Benjamin Donahue.
      Music has always been a deep love of mine since I was little,
      so...here I am fullfilling one of my biggest dreams. I take a lot
      of inspiration from video game music, composers such as
      <a href='https://open.spotify.com/track/4aPltIjGkJx26Y9cBHu14U?si=66d4d060c0ec4fec'> Yoko Shimomura </a>
      and <a href='https://open.spotify.com/track/65CefKbmaG0ZkumWSFKbxC?si=7c7af95103094401'>Yuka Kitamura </a>
      being a couple of my biggest inspirations along with
      other artists like <a href='https://open.spotify.com/track/6rMRUcrL63WNnhMPYew7pA?si=17d1a83abb8d437f'>MGLA </a> and
      <a href='https://open.spotify.com/track/4m4Yj2z7CG1LUNbcg1uOP3?si=bd5d217dd6614e89'> Perturbator. </a>
      Dark and beautiful with a story in mind is how I compose.
      This site doesn't have much now but it will grow in the future.
    </p>
  )
}
export default function Home() {
  return (
    <main className='w-full'>
      <section>
        <Title />

      </section>
      <section>

      </section>
      <section>

      </section>
      <section className='justify-center mx-auto max-w-xl'>
        <About />
      </section>




      <script src="anime.min.js"></script>
    </main>
  );
}


//flower petals circling a sphere, use elipse svg
