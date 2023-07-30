
interface AlbumDetails {
    description: string;
    release_date: string; //Either a dd/mm//yyyy date or "upcoming"
}

export const AlbumMap: Map<string, AlbumDetails> = new Map
    (
        [
            [
                "Artificial Eden", {
                    description: "",
                    release_date: "Upcoming"

                }
            ]

        ]
    )