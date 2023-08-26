
interface AlbumDetails {
    description: string;
    release_date: string; //Either a dd/mm//yyyy date or "upcoming"
    album_link?: string;
}

export const AlbumMap: Map<string, AlbumDetails> = new Map
    (
        [
            [
                "Artificial Eden", {
                    description: "The concept behind this album is a world driven to its own death by its own technology. Hence the name, a world that displays itself as a perfect Eden but it's all fake. It's an experimental combination of traditional orchestration and darksynth for an epic, futuristic sound. ",
                    release_date: "Upcoming"

                }
            ]

        ]
    )