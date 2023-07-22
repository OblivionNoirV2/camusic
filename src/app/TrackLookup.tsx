interface TrackObject {
    description: string;
    iframe_src: string;
    title: string //so I can automatically update the 
    //latest release
}
//string = title
export const TrackMap: Map<number, TrackObject> = new Map(
    [
        [
            1, {
                description: "temp1",
                iframe_src: "temp",
                title: "Twilight Imperium"
            }
        ],
        [
            2, {
                description: "temp2",
                iframe_src: "temp",
                title: "Neon Underground"
            }
        ],
        [
            3, {
                description: "temp3",
                iframe_src: "temp",
                title: "Artificial Eden"
            }
        ]


    ]
)