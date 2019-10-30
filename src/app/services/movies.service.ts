import { Injectable } from '@angular/core'
import { IMovie } from './movie.model'
import { IMovies } from './movies.model'
// "node_modules/popper.js/dist/umd/popper.js",
const apikey = "da51ab669d96ca4f1f9aa7cc589baec8"
//const baseUrl = https://api.themoviedb.org/3/
//const allMoviesUrl = https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2
//const searchSample = https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//const getByIdbase = "https://api.themoviedb.org/3/movie/"

@Injectable()

export class MoviesService {
    getMovies(){
        return movies.splice(0,10)
    }
    getMovie(id){
        return movies.find(movie => movie.id === id)
         let movie:IMovie
        // const getByIdbase = "https://api.themoviedb.org/3/movie/"
        // const url = `${getByIdbase}${id}?api_key=${apikey}&&language=en-US`
        // return movie = fetch(url)
        // .then(response => response.json())
        // .then(data => {return data})
        // .catch(error => console.log(error))
    }
}

const movies:IMovies[] = [
    {
        popularity: 52.03,
        vote_count: 19972,
        video: false,
        poster_path: "/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
        id: 155,
        adult: false,
        backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
        original_language: "en",
        original_title: "The Dark Knight",
        genre_ids: [
            28,
            80,
            18,
            53
        ],
        title: "The Dark Knight",
        vote_average: 8.4,
        overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        release_date: new Date("2008-07-18")
    },
    {
        popularity: 71.733,
        vote_count: 30,
        video: false,
        poster_path: "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
        id: 338967,
        adult: false,
        backdrop_path: "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
        original_language: "en",
        original_title: "Zombieland: Double Tap",
        genre_ids: [
            28,
            35,
            27
        ],
        title: "Zombieland: Double Tap",
        vote_average: 7.1,
        overview: "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
        release_date: new Date("2019-10-18")
    },
    {
        popularity: 75.737,
        vote_count: 20,
        video: false,
        poster_path: "/jf2PkR0Yt0ZRMKqtJzwja7JV2Hk.jpg",
        id: 71805,
        adult: false,
        backdrop_path: "/rp5dh6D0MLOIIVHkugv6Z8gBLwg.jpg",
        original_language: "no",
        original_title: "Håkon Håkonsen",
        genre_ids: [
            12,
            10751
        ],
        title: "Shipwrecked",
        vote_average: 6.3,
        overview: "A young Norwegian boy in 1850s England goes to work as a cabin boy and discovers some of his shipmates are actually pirates.",
        release_date: new Date("1990-10-12")
    },
    {
        popularity: 31.429,
        vote_count: 11485,
        video: false,
        poster_path: "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
        id: 321612,
        adult: false,
        backdrop_path: "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
        original_language: "en",
        original_title: "Beauty and the Beast",
        genre_ids: [
            14,
            10749,
            10751
        ],
        title: "Beauty and the Beast",
        vote_average: 6.9,
        overview: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
        release_date: new Date("2017-03-17")
    },
    {
        popularity: 61.647,
        vote_count: 18,
        video: false,
        poster_path: "/vS6TCG4HiUSCyX30f5wDGQDt1k3.jpg",
        id: 428045,
        adult: false,
        backdrop_path: "/5yiCqzmxYv36GGdc05egCMHedbX.jpg",
        original_language: "ru",
        original_title: "Тайна Печати Дракона",
        genre_ids: [
            12,
            14
        ],
        title: "The Mystery of the Dragon’s Seal",
        vote_average: 5,
        overview: "The Russian Czar Peter the Great commissions Jonathan Green, an English traveller, to map the Far East territories of the Russian Empire. Green sets off on yet another long journey, full of unbelievable adventures, which eventually leads him to China. On his way, the famous cartographer makes breath-taking discoveries, meets mysterious creatures, Chinese princesses, deadly masters of oriental martial arts, and even Lun Van, the King of Dragons, himself. What could be more perilous than looking into the eyes of Viy? Only meeting him again… What will prevail this time — the unflinching scepticism of the scientist or ancient black magic, which has already gained influence over the Far East Lands?",
        release_date: new Date("2019-08-16")
    },
    {
        popularity: 39.898,
        vote_count: 29,
        video: false,
        poster_path: "/w1SBqj0fn1j72ST5i1jauWo3swT.jpg",
        id: 537055,
        adult: false,
        backdrop_path: "/evBWuv3S9AOTwEop6goE3xs1MH0.jpg",
        original_language: "en",
        original_title: "Wonder Woman: Bloodlines",
        genre_ids: [
            28,
            16,
            14
        ],
        title: "Wonder Woman: Bloodlines",
        vote_average: 7.1,
        overview: "When Amazon princess Diana of Themyscira chooses to save fighter pilot Steve Trevor, it’s a choice that will change her world and ours. Fulfilling the role of both ambassador as well as protector, Diana earns the name Wonder Woman from the gracious people of Earth. But her heart is as strong as her will as she is determined to help a troubled and embittered young girl whom has fallen in with a deadly organization known only as Villainy, Inc! Get ready for an exciting adventure packed with brutal battles, myth and wonder!",
        release_date: new Date("2019-10-05")
    },
    {
        popularity: 44.007,
        vote_count: 38,
        video: false,
        poster_path: "/al0aa9WAWk25EK6zhx6fbWSc733.jpg",
        id: 614488,
        adult: false,
        backdrop_path: "/nlxA1dYA30bmKQCBCP4DxGQptel.jpg",
        original_language: "fr",
        original_title: "Banlieusards",
        genre_ids: [
            80,
            18
        ],
        title: "Street Flow",
        vote_average: 7.3,
        overview: "Noumouké, from the suburb of Paris, is about to decide which brother's foot steps to follow - the lawyer student Soulaymaan or the gangster Demba.",
        release_date: new Date("2019-10-12")
    },
    {
        popularity: 73.166,
        vote_count: 2167,
        video: false,
        poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
        id: 320288,
        adult: false,
        backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
        original_language: "en",
        original_title: "Dark Phoenix",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Dark Phoenix",
        vote_average: 6.1,
        overview: "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
        release_date: new Date("2019-06-07")
    },
    {
        popularity: 66.442,
        vote_count: 15491,
        video: false,
        poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        id: 299536,
        adult: false,
        backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
        original_language: "en",
        original_title: "Avengers: Infinity War",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Avengers: Infinity War",
        vote_average: 8.3,
        overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        release_date: new Date("2018-04-27")
    },
    {
        popularity: 36.07,
        vote_count: 14375,
        video: false,
        poster_path: "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
        id: 99861,
        adult: false,
        backdrop_path: "/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
        original_language: "en",
        original_title: "Avengers: Age of Ultron",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Avengers: Age of Ultron",
        vote_average: 7.3,
        overview: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        release_date: new Date("2015-05-01")
    },
    {
        popularity: 59.559,
        vote_count: 23427,
        video: false,
        poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        id: 27205,
        adult: false,
        backdrop_path: "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
        original_language: "en",
        original_title: "Inception",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Inception",
        vote_average: 8.3,
        overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        release_date: new Date("2010-07-16")
    },
    {
        popularity: 28.172,
        vote_count: 6959,
        video: false,
        poster_path: "/3BUmvNKdPLxraqYRyniixn34UjN.jpg",
        id: 812,
        adult: false,
        backdrop_path: "/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
        original_language: "en",
        original_title: "Aladdin",
        genre_ids: [
            12,
            16,
            14,
            10749,
            10751
        ],
        title: "Aladdin",
        vote_average: 7.6,
        overview: "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
        release_date: new Date("1992-11-25")
    },
    {
        popularity: 55.325,
        vote_count: 18985,
        video: false,
        poster_path: "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
        id: 118340,
        adult: false,
        backdrop_path: "/kHex2XdOmGtazk1VfJjp4bl7BIc.jpg",
        original_language: "en",
        original_title: "Guardians of the Galaxy",
        genre_ids: [
            28,
            12,
            878
        ],
        title: "Guardians of the Galaxy",
        vote_average: 7.9,
        overview: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        release_date: new Date("2014-08-01")
    },
    {
        popularity: 61.019,
        vote_count: 29,
        video: false,
        poster_path: "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
        id: 568012,
        adult: false,
        backdrop_path: "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
        original_language: "ja",
        original_title: "ワンピーススタンピード",
        genre_ids: [
            28,
            12,
            16
        ],
        title: "One Piece: Stampede",
        vote_average: 8.3,
        overview: "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
        release_date: new Date("2019-10-24")
    },
    {
        popularity: 46.734,
        vote_count: 630,
        video: false,
        poster_path: "/4WH6AZd473lRZ3hUp8TYiv2LfZW.jpg",
        id: 511987,
        adult: false,
        backdrop_path: "/lm4xH0YwFbVvTgdtau1thNK5S6J.jpg",
        original_language: "en",
        original_title: "Crawl",
        genre_ids: [
            28,
            18,
            27,
            53
        ],
        title: "Crawl",
        vote_average: 6.1,
        overview: "When a huge hurricane hits her hometown in Florida, Haley ignores evacuation orders to look for her father. After finding him badly wounded, both are trapped by the flood. With virtually no time to escape the storm, they discover that rising water levels are the least of their problems.",
        release_date: new Date("2019-07-12")
    },
    {
        popularity: 32.665,
        vote_count: 10167,
        video: false,
        poster_path: "/xWlaTLnD8NJMTT9PGOD9z5re1SL.jpg",
        id: 49521,
        adult: false,
        backdrop_path: "/jYLh4mdOqkt30i7LTFs3o02UcGF.jpg",
        original_language: "en",
        original_title: "Man of Steel",
        genre_ids: [
            28,
            12,
            14,
            878
        ],
        title: "Man of Steel",
        vote_average: 6.5,
        overview: "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
        release_date: new Date("2013-06-14")
    },
    {
        popularity: 32.591,
        id: 78,
        video: false,
        vote_count: 7990,
        vote_average: 7.9,
        title: "Blade Runner",
        release_date: new Date("1982-06-25"),
        original_language: "en",
        original_title: "Blade Runner",
        genre_ids: [
            878,
            18,
            53
        ],
        backdrop_path: "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
        adult: false,
        overview: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        poster_path: "/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg"
    },
    {
        popularity: 53.424,
        vote_count: 11022,
        video: false,
        poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
        id: 245891,
        adult: false,
        backdrop_path: "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
        original_language: "en",
        original_title: "John Wick",
        genre_ids: [
            28,
            53
        ],
        title: "John Wick",
        vote_average: 7.2,
        overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
        release_date: new Date("2014-10-24")
    },
    {
        popularity: 58.073,
        vote_count: 8686,
        video: false,
        poster_path: "/4FYu1AAu14tuBU0lns0hbKiHUcH.jpg",
        id: 102651,
        adult: false,
        backdrop_path: "/tO4xw0P4mdia3EcS6pHkox3cOIy.jpg",
        original_language: "en",
        original_title: "Maleficent",
        genre_ids: [
            28,
            12,
            14,
            10749,
            10751
        ],
        title: "Maleficent",
        vote_average: 7.1,
        overview: "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
        release_date: new Date("2014-05-30")
    },
    {
        popularity: 46.825,
        vote_count: 5377,
        video: false,
        poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        id: 324857,
        adult: false,
        backdrop_path: "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
        original_language: "en",
        original_title: "Spider-Man: Into the Spider-Verse",
        genre_ids: [
            28,
            12,
            16,
            35,
            878
        ],
        title: "Spider-Man: Into the Spider-Verse",
        vote_average: 8.4,
        overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
        release_date: new Date("2018-12-14")
    }
]