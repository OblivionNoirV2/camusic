"use client"
import React, { useEffect, useState } from "react";
import { TrackMap } from "../TrackLookup";
import Link from "next/link";


const YearHeadingTemplate: React.FC<{ year: number }> = ({ year }) => {
    return (
        <>
            <h1 className="text-3xl mt-16">{year}</h1>
            <hr className="w-1/2 mb-4" />
        </>

    )

}
const DiscogPage = () => {
    const tracks_as_list = Array.from(TrackMap.values());
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log(tracks_as_list);
    }, []);
    //search term changes the map list to adjust what's shown
    //Checks for year or titles
    const filtered_tracks = tracks_as_list.filter(track => {
        return track.year.toString().includes(searchTerm) || track.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <main className="flex justify-center">
            <section className="flex flex-col items-center max-w-2xl">
                <h1 className="text-5xl">Discography</h1>
                <hr className="w-full bg-white" />

                <p className="text-2xl mt-4 mb-4">
                    Here you can find a complete list of all my songs by year, with release dates and commentary from me.
                </p>
                <h4>Search by year or song title...</h4>
                <input
                    type="text"
                    placeholder="Enter a year or song title..."
                    className="w-1/2 my-2"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <h4>Or browse below &#8595;</h4>

                <YearHeadingTemplate year={2023} />

                {
                    filtered_tracks.map((track, index) => {
                        return (
                            track.year === 2023 &&
                            <div key={index} className="mt-8">
                                <h1 className="text-lg">{track.title}</h1>
                                <hr className="w-1/3"></hr>
                                <p>{track.description}</p>
                                <div className=" iframe-pre">

                                    <iframe width="100%" height="66" className="mt-2"
                                        src={track.iframe_src}>
                                    </iframe>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="mt-6 border-white border-[.05rem] p-4 rounded-2xl image-c">
                    <Link href="/">
                        Back to home
                    </Link>
                </button>
            </section>
        </main>
    )
}

export default DiscogPage;
