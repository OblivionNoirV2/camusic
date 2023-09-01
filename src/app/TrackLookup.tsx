import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

//images 

import AE from './assets/AE.jpeg'

interface TrackObject {
    description: ReactNode; //so I can add links
    iframe_src?: string;
    title: string; //so I can automatically update the 
    //latest release
    release_date: string; //dd/mm//yyyy
    image?: StaticImageData;
    year: number; //for organizing
    sc_link?: string;


}
//string = title
export const TrackMap: Map<number, TrackObject> = new Map(
    [

        [
            1, {
                description: (
                    <>
                        I wanted to create a simple, catchy synthwave
                        track that evokes a vision of a perhaps dark but
                        thriving underground future world, and I think this
                        accomplishes that pretty well.
                    </>
                ),
                //iframe_src: "https://open.spotify.com/embed/track/4Z6Q3Z2nmgF08TYmN0XYmi?utm_source=generator",
                title: "Neon Underground",
                release_date: "4/26/2023",
                year: 2023,
                iframe_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1523324827&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            }
        ],
        [
            2, {
                description: (
                    <>
                        The goal here was to make, essentially, a gothic
                        boss theme. I imagine a sort of dance between
                        light and dark listening to this, madness and
                        peace. Dance to the death under the moonlight,
                        that sort of thing.
                    </>

                ),
                //iframe_src: "https://open.spotify.com/embed/track/73XeMyEg7uBEkdBkoCvuX7?utm_source=generator",
                title: "Twilight Imperium",
                release_date: "5/11/2023",
                year: 2023,
                iframe_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1536938128&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            }
        ],
        [
            3, {
                description: (
                    <>
                        This track was inspired by the general sense of
                        doom and fear around emerging AI technology
                        around this time. The idea was to create an
                        atmosphere that signaled the end of a
                        technological utopia, utopia become dystopia,
                        with a sense of finality and loneliness - nostalgia for the past. I'm considering making a whole album with this concept.
                    </>
                ),
                //iframe_src: "https://open.spotify.com/embed/track/4kxdr5ei4XLYpHP3p5JAn0?utm_source=generator",
                title: "Artificial Eden",
                release_date: "6/7/2023",
                year: 2023,
                iframe_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1558778587&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"

            }
        ],
        [
            4, {
                description: (
                    <>
                        This one sure pulls on the heartstrings. I wanted to make a simple, emotionally charged piano track, like Gwyn's theme from Dark Souls. I wrote that gorgeous main melody right off the bat and knew I had something special in the works.
                        I think it sounds very nostalgic, melancholy with a touch of hope.
                    </>
                ),
                title: "Memory of the Stars",
                release_date: "8/26/2023",
                year: 2023,
                iframe_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601788314&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"

            }
        ],
        [
            5, {
                description: (
                    <>
                        I asked myself, what would insanity sound like in epic music form?
                        This track is evil, chaotic
                        and sounds like fighting an eldritch beast to save the world or something.
                    </>
                ),
                title: "Abyssal Lunacy",
                release_date: "9/1/2023",
                year: 2023,
                iframe_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1606066524&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            }
        ]


    ]
)

