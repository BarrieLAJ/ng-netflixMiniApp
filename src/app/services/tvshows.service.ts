import { Injectable } from '@angular/core'
const apikey = "da51ab669d96ca4f1f9aa7cc589baec8"
//const baseUrl = https://api.themoviedb.org/3/
//const allMoviesUrl = https://api.themoviedb.org/3/discover/movie?api_key=da51ab669d96ca4f1f9aa7cc589baec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2
//const searchSample = https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//const getByIdbase = "https://api.themoviedb.org/3/movie/"

@Injectable()

export class TvShowsService {
    getTvshows(){
        return tvshows.splice(0,10)
    }
    getTvshow(id){
        return tvshows.find(tvshow => tvshow.id === id) 
        // let tvshow = {}
        // const getByIdbase = "https://api.themoviedb.org/3/tv/"
        // const url = `${getByIdbase}${id}?api_key=${apikey}&&language=en-US`
        // return tvshow = fetch(url)
        // .then(response => response.json())
        // .then(data => {return data})
        // .catch(error => console.log(error))
    }
}

const tvshows = [
        {
            "original_name": "Arrow",
            "genre_ids": [
                80,
                18,
                9648,
                10759
            ],
            "name": "Arrow",
            "popularity": 371.293,
            "origin_country": [
                "US"
            ],
            "vote_count": 2704,
            "first_air_date": "2012-10-10",
            "backdrop_path": "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
            "original_language": "en",
            "id": 1412,
            "vote_average": 5.8,
            "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
            "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
        },
        {
            "original_name": "Fear the Walking Dead",
            "genre_ids": [
                18,
                27
            ],
            "name": "Fear the Walking Dead",
            "popularity": 320.013,
            "origin_country": [
                "US"
            ],
            "vote_count": 1063,
            "first_air_date": "2015-08-23",
            "backdrop_path": "/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
            "original_language": "en",
            "id": 62286,
            "vote_average": 6.3,
            "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
            "poster_path": "/lZMb3R3e5vqukPbeDMeyYGf2ZNG.jpg"
        },
        {
            "original_name": "The Flash",
            "genre_ids": [
                18,
                10765
            ],
            "name": "The Flash",
            "popularity": 289.333,
            "origin_country": [
                "US"
            ],
            "vote_count": 2914,
            "first_air_date": "2014-10-07",
            "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
            "original_language": "en",
            "id": 60735,
            "vote_average": 6.7,
            "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
            "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
        },
        {
            "original_name": "Riverdale",
            "genre_ids": [
                18,
                9648
            ],
            "name": "Riverdale",
            "popularity": 220.356,
            "origin_country": [
                "US"
            ],
            "vote_count": 669,
            "first_air_date": "2017-01-26",
            "backdrop_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
            "original_language": "en",
            "id": 69050,
            "vote_average": 7.2,
            "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
            "poster_path": "/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg"
        },
        {
            "original_name": "Law & Order: Special Victims Unit",
            "genre_ids": [
                80,
                18
            ],
            "name": "Law & Order: Special Victims Unit",
            "popularity": 205.275,
            "origin_country": [
                "US"
            ],
            "vote_count": 701,
            "first_air_date": "1999-09-20",
            "backdrop_path": "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
            "original_language": "en",
            "id": 2734,
            "vote_average": 6.5,
            "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
            "poster_path": "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
        },
        {
            "original_name": "Supernatural",
            "genre_ids": [
                18,
                9648,
                10765
            ],
            "name": "Supernatural",
            "popularity": 237.473,
            "origin_country": [
                "US"
            ],
            "vote_count": 1967,
            "first_air_date": "2005-09-13",
            "backdrop_path": "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
            "original_language": "en",
            "id": 1622,
            "vote_average": 7.4,
            "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
            "poster_path": "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
        },
        {
            "original_name": "The Simpsons",
            "genre_ids": [
                16,
                35
            ],
            "name": "The Simpsons",
            "popularity": 198.353,
            "origin_country": [
                "US"
            ],
            "vote_count": 2189,
            "first_air_date": "1989-12-17",
            "backdrop_path": "/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg",
            "original_language": "en",
            "id": 456,
            "vote_average": 7.1,
            "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
            "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
        },
        {
            "original_name": "僕のヒーローアカデミア",
            "genre_ids": [
                16,
                35,
                10759
            ],
            "name": "My Hero Academia",
            "popularity": 250.436,
            "origin_country": [
                "JP"
            ],
            "vote_count": 184,
            "first_air_date": "2016-04-03",
            "backdrop_path": "/r1jOpRyqP5pKkvZvaiCXVJ5RYOa.jpg",
            "original_language": "ja",
            "id": 65930,
            "vote_average": 7.9,
            "overview": "In a world where eighty percent of the population has some kind of super-powered Quirk, Izuku was unlucky enough to be born completely normal. But that won’t stop him from enrolling in a prestigious hero academy. Now, he’ll get his first taste of brutal rivalry from other schools as he braves the cutthroat, no-holds-barred provisional license exam.",
            "poster_path": "/47h1ReX6SSqwiTaz3kCC14f0vzt.jpg"
        },
        {
            "original_name": "Batwoman",
            "genre_ids": [
                10759,
                10765
            ],
            "name": "Batwoman",
            "popularity": 192.53,
            "origin_country": [
                "US"
            ],
            "vote_count": 71,
            "first_air_date": "2019-10-06",
            "backdrop_path": "/spc5mNkW2daK1ob7Z7jqNkSlKS2.jpg",
            "original_language": "en",
            "id": 89247,
            "vote_average": 6.6,
            "overview": "Armed with a great passion for social justice and with a great facility to always say what she thinks, Kate Kane is known in the streets of Gotham as Batwoman, a lesbian highly trained to fight crime that resurfaces in the city. However, before becoming a savior, she must fight the demons that prevent her from being the symbol of the hope of a corrupt city.",
            "poster_path": "/jnaimWkIVSD9IInmZPyLYarSvvc.jpg"
        },
        {
            "original_name": "Family Guy",
            "genre_ids": [
                16,
                35
            ],
            "name": "Family Guy",
            "popularity": 199.663,
            "origin_country": [
                "US"
            ],
            "vote_count": 1677,
            "first_air_date": "1999-01-31",
            "backdrop_path": "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
            "original_language": "en",
            "id": 1434,
            "vote_average": 6.5,
            "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
            "poster_path": "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
        },
        {
            "original_name": "The Blacklist",
            "genre_ids": [
                80,
                18,
                9648
            ],
            "name": "The Blacklist",
            "popularity": 165.135,
            "origin_country": [
                "US"
            ],
            "vote_count": 1056,
            "first_air_date": "2013-09-23",
            "backdrop_path": "/fHwiAqIKragaCbNJo9Qs4lrccIN.jpg",
            "original_language": "en",
            "id": 46952,
            "vote_average": 6.9,
            "overview": "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
            "poster_path": "/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg"
        },
        {
            "original_name": "Doom Patrol",
            "genre_ids": [
                10759,
                10765
            ],
            "name": "Doom Patrol",
            "popularity": 170.442,
            "origin_country": [
                "US"
            ],
            "vote_count": 213,
            "first_air_date": "2019-02-15",
            "backdrop_path": "/sAzw6I1G9JUxm86KokIDdQeWtaq.jpg",
            "original_language": "en",
            "id": 79501,
            "vote_average": 6.4,
            "overview": "The Doom Patrol’s members each suffered horrible accidents that gave them superhuman abilities — but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence — and to protect Earth from what they find.",
            "poster_path": "/nVN7Dt0Xr78gnJepRsRLaLYklbY.jpg"
        },
        {
            "original_name": "Breaking Bad",
            "genre_ids": [
                18
            ],
            "name": "Breaking Bad",
            "popularity": 158.092,
            "origin_country": [
                "US"
            ],
            "vote_count": 3565,
            "first_air_date": "2008-01-20",
            "backdrop_path": "/hbgPoI0GBrXJfGjYNV2fMQU0xou.jpg",
            "original_language": "en",
            "id": 1396,
            "vote_average": 8.4,
            "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
            "poster_path": "/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg"
        },
        {
            "original_name": "Grey's Anatomy",
            "genre_ids": [
                18
            ],
            "name": "Grey's Anatomy",
            "popularity": 165.934,
            "origin_country": [
                "US"
            ],
            "vote_count": 1068,
            "first_air_date": "2005-03-27",
            "backdrop_path": "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
            "original_language": "en",
            "id": 1416,
            "vote_average": 6.4,
            "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
            "poster_path": "/jnsvc7gCKocXnrTXF6p03cICTWb.jpg"
        },
        {
            "original_name": "South Park",
            "genre_ids": [
                16,
                35
            ],
            "name": "South Park",
            "popularity": 158.91,
            "origin_country": [
                "US"
            ],
            "vote_count": 1164,
            "first_air_date": "1997-08-13",
            "backdrop_path": "/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg",
            "original_language": "en",
            "id": 2190,
            "vote_average": 7.8,
            "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
            "poster_path": "/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg"
        },
        {
            "original_name": "Gotham",
            "genre_ids": [
                80,
                18,
                14
            ],
            "name": "Gotham",
            "popularity": 147.733,
            "origin_country": [
                "US"
            ],
            "vote_count": 1185,
            "first_air_date": "2014-09-22",
            "backdrop_path": "/mKBP1OCgCG0jw8DwVYlnYqVILtc.jpg",
            "original_language": "en",
            "id": 60708,
            "vote_average": 6.9,
            "overview": "Before there was Batman, there was GOTHAM. \n\nEveryone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker? ",
            "poster_path": "/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg"
        },
        {
            "original_name": "Sesame Street",
            "genre_ids": [
                16,
                35,
                10751
            ],
            "name": "Sesame Street",
            "popularity": 135.767,
            "origin_country": [
                "US"
            ],
            "vote_count": 90,
            "first_air_date": "1969-11-10",
            "backdrop_path": "/6HswtHbletDHrR8B84U5KWkXheQ.jpg",
            "original_language": "en",
            "id": 502,
            "vote_average": 7.4,
            "overview": "On a special inner city street, the inhabitants—human and muppet—teach preschoolers basic educational and social concepts using comedy, cartoons, games, and songs.",
            "poster_path": "/rNknh7XQUWvm4j9WeuhUJhT9NP4.jpg"
        },
        {
            "original_name": "ハンターｘハンター",
            "genre_ids": [
                16,
                35,
                10759
            ],
            "name": "Hunter x Hunter",
            "popularity": 154.811,
            "origin_country": [
                "JP"
            ],
            "vote_count": 152,
            "first_air_date": "2011-10-02",
            "backdrop_path": "/ye4oayd3csx8psElvvQPdO2fgdD.jpg",
            "original_language": "ja",
            "id": 46298,
            "vote_average": 8.3,
            "overview": "Twelve-year-old Gon Freecss one day discovers that the father he had always been told was dead was alive and well. His Father, Ging, is a Hunter—a member of society's elite with a license to go anywhere or do almost anything. Gon, determined to follow in his father's footsteps, decides to take the Hunter Examination and eventually find his father to prove himself as a Hunter in his own right. But on the way, he learns that there is more to becoming a Hunter than previously thought, and the challenges that he must face are considered the toughest in the world.",
            "poster_path": "/yWBcBIO9OrF3E85C5Arols6QNnG.jpg"
        },
        {
            "original_name": "Rick and Morty",
            "genre_ids": [
                16,
                35,
                10759,
                10765
            ],
            "name": "Rick and Morty",
            "popularity": 167.967,
            "origin_country": [
                "US"
            ],
            "vote_count": 1399,
            "first_air_date": "2013-12-02",
            "backdrop_path": "/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg",
            "original_language": "en",
            "id": 60625,
            "vote_average": 8.5,
            "overview": "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
            "poster_path": "/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg"
        },
        {
            "original_name": "NCIS: Los Angeles",
            "genre_ids": [
                80,
                18,
                9648,
                10759
            ],
            "name": "NCIS: Los Angeles",
            "popularity": 154.855,
            "origin_country": [
                "US"
            ],
            "vote_count": 387,
            "first_air_date": "2009-09-22",
            "backdrop_path": "/j4ltPl0cHMd16UO80vbxFx1Td1w.jpg",
            "original_language": "en",
            "id": 17610,
            "vote_average": 6.8,
            "overview": "The exploits of the Los Angeles–based Office of Special Projects (OSP), an elite division of the Naval Criminal Investigative Service that specializes in undercover assignments.",
            "poster_path": "/p0doUtM8RhXcAwHs6VmMZMQKpai.jpg"
        }
    ]

