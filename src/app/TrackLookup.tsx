import React from "react";
import { ReactNode } from "react";
interface TrackObject {
    description: ReactNode; //so I can add links
    iframe_src: string;
    title: string //so I can automatically update the 
    //latest release
}
//string = title
export const TrackMap: Map<number, TrackObject> = new Map(
    [
        [
            1, {
                description: (
                    <>
                        The goal here was to make, essentially, a gothic
                        boss theme. I imagine a sort of dance between
                        light and dark listening to this, madness and
                        peace. Dance to the death under the moonlight,
                        that sort of thing.
                    </>

                ),
                iframe_src: "https://open.spotify.com/embed/track/73XeMyEg7uBEkdBkoCvuX7?utm_source=generator",
                title: "Twilight Imperium"
            }
        ],
        [
            2, {
                description: (
                    <>
                        I wanted to create a simple, catchy synthwave
                        track that evokes a vision of a perhaps dark but
                        thriving underground future world, and I think this
                        accomplishes that pretty well.
                    </>
                ),
                iframe_src: "https://open.spotify.com/embed/track/4Z6Q3Z2nmgF08TYmN0XYmi?utm_source=generator",
                title: "Neon Underground"
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
                        with a sense of finality and loneliness - nostalgia for the past.
                    </>
                ),
                iframe_src: "https://open.spotify.com/embed/track/4kxdr5ei4XLYpHP3p5JAn0?utm_source=generator",
                title: "Artificial Eden"
            }
        ]


    ]
)

