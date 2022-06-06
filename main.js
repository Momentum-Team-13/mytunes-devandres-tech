document.addEventListener('DOMContentLoaded', () => {
  const BASE_API_URL = 'https://itunes.apple.com'
  const MEDIA = 'music'
  const form = document.querySelector('#form')
  const formResults = document.querySelector('#formResults')
  const musicPlayer = document.querySelector('#musicPlayer')

  const data = [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1443077417,
      trackId: 1443077424,
      artistName: 'Drake, Kanye West, Lil Wayne & Eminem',
      collectionName: 'More Than a Game (Music Inspired By the Film)',
      trackName: 'Forever',
      collectionCensoredName: 'More Than a Game (Music Inspired By the Film)',
      trackCensoredName: 'Forever',
      collectionArtistId: 885401,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/forever/1443077417?i=1443077424&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/forever/1443077417?i=1443077424&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/63/e6/ba/63e6ba21-57fc-cba5-f5ed-dc5751809399/mzaf_8134582539552961600.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ee/1c/a4/ee1ca4b6-9afd-d92b-a4ef-19ed5b3463ea/00602527157719.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ee/1c/a4/ee1ca4b6-9afd-d92b-a4ef-19ed5b3463ea/00602527157719.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/ee/1c/a4/ee1ca4b6-9afd-d92b-a4ef-19ed5b3463ea/00602527157719.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2009-05-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 2,
      trackTimeMillis: 357347,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Soundtrack',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440643139,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'The Motto (feat. Lil Wayne) [Bonus Track]',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'The Motto (feat. Lil Wayne) [Bonus Track]',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-motto-feat-lil-wayne-bonus-track/1440642493?i=1440643139&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-motto-feat-lil-wayne-bonus-track/1440642493?i=1440643139&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/4f/a4/064fa42b-8b9e-a59d-83b6-ec579bf5abbb/mzaf_3816250353681043183.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-11-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 19,
      trackTimeMillis: 181560,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642738,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Take Care (feat. Rihanna)',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Take Care (feat. Rihanna)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/take-care-feat-rihanna/1440642493?i=1440642738&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/take-care-feat-rihanna/1440642493?i=1440642738&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/58/ad/51/58ad51ab-f8b1-d780-adcd-c4fd999786bc/mzaf_10001172154329955832.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-11-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 5,
      trackTimeMillis: 277387,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829611,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Started From the Bottom',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Started From the Bottom',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/started-from-the-bottom/1440829462?i=1440829611&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/started-from-the-bottom/1440829462?i=1440829611&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/79/72/72/797272db-41b1-e86d-89bf-77948ab059cf/mzaf_4796307796453719504.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-02-01T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 3,
      trackTimeMillis: 173922,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841384,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'One Dance (feat. Wizkid & Kyla)',
      collectionCensoredName: 'Views',
      trackCensoredName: 'One Dance (feat. Wizkid & Kyla)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/one-dance-feat-wizkid-kyla/1440841363?i=1440841384&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/one-dance-feat-wizkid-kyla/1440841363?i=1440841384&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/78/52/09/785209ca-6bb3-a1ad-46fb-95c666901be2/mzaf_2492916175806967955.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-05T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 12,
      trackTimeMillis: 173985,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829630,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: "Hold On, We're Going Home (feat. Majid Jordan)",
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: "Hold On, We're Going Home (feat. Majid Jordan)",
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hold-on-were-going-home-feat-majid-jordan/1440829462?i=1440829630&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/hold-on-were-going-home-feat-majid-jordan/1440829462?i=1440829630&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e1/9b/b6/e19bb624-9cd8-021b-f771-e51629057774/mzaf_13878644440815306616.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-08-07T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 8,
      trackTimeMillis: 231193,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 5869117,
      collectionId: 1440712312,
      trackId: 1440712320,
      artistName: 'Lil Wayne & Drake',
      collectionName: 'I Am Not a Human Being',
      trackName: 'Right Above It (feat. Drake)',
      collectionCensoredName: 'I Am Not a Human Being',
      trackCensoredName: 'Right Above It (feat. Drake)',
      collectionArtistName: 'Lil Wayne',
      artistViewUrl: 'https://music.apple.com/us/artist/lil-wayne/5869117?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/right-above-it-feat-drake/1440712312?i=1440712320&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/right-above-it-feat-drake/1440712312?i=1440712320&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c4/be/bb/c4bebb96-2903-deaf-fa9b-25cae361ab06/mzaf_5144033695063442122.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/e8/e0/a3/e8e0a3dd-2789-41d9-3993-b0909820a265/10UMGIM24995.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/e8/e0/a3/e8e0a3dd-2789-41d9-3993-b0909820a265/10UMGIM24995.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/e8/e0/a3/e8e0a3dd-2789-41d9-3993-b0909820a265/10UMGIM24995.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2010-08-17T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 13,
      trackNumber: 7,
      trackTimeMillis: 271947,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440842556,
      trackId: 1440843974,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Hotline Bling',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Hotline Bling',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hotline-bling/1440842556?i=1440843974&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/hotline-bling/1440842556?i=1440843974&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/75/ff/75/75ff75c6-7624-89f3-c0ef-8643c9eec8f0/mzaf_7065017955627239561.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2015-07-31T12:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 20,
      trackTimeMillis: 267024,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440842320,
      trackId: 1440843184,
      artistName: 'Drake & Future',
      collectionName: 'What a Time To Be Alive',
      trackName: 'Jumpman',
      collectionCensoredName: 'What a Time To Be Alive',
      trackCensoredName: 'Jumpman',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/jumpman/1440842320?i=1440843184&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/jumpman/1440842320?i=1440843184&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/80/a4/52/80a45200-8ffa-f23d-fd6f-2d4650e84701/mzaf_1470354459565208681.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4b/9c/db/4b9cdb40-effb-141c-aa20-9ebeabb1b97f/00602547616661.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4b/9c/db/4b9cdb40-effb-141c-aa20-9ebeabb1b97f/00602547616661.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4b/9c/db/4b9cdb40-effb-141c-aa20-9ebeabb1b97f/00602547616661.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-09-20T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 9,
      trackTimeMillis: 205879,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642731,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Headlines',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Headlines',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/headlines/1440642493?i=1440642731&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/headlines/1440642493?i=1440642731&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7d/8d/ef/7d8def46-edbc-e2e6-12d0-322c8f0993a6/mzaf_300727651408745133.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-08-09T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 3,
      trackTimeMillis: 235987,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1452017773,
      trackId: 1452017954,
      artistName: 'Drake',
      collectionName: 'So Far Gone',
      trackName: 'Best I Ever Had',
      collectionCensoredName: 'So Far Gone',
      trackCensoredName: 'Best I Ever Had',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/best-i-ever-had/1452017773?i=1452017954&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/best-i-ever-had/1452017773?i=1452017954&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/61/af/bf/61afbfa6-340b-6705-0d23-409a6ee0e208/mzaf_14055869175067557426.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/b0/35/7eb0353b-8f25-32dd-5f5e-71d9ed700247/00602577524004.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/b0/35/7eb0353b-8f25-32dd-5f5e-71d9ed700247/00602577524004.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/b0/35/7eb0353b-8f25-32dd-5f5e-71d9ed700247/00602577524004.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2009-02-13T08:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 10,
      trackTimeMillis: 257690,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440643122,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'HYFR (Hell Ya Fucking Right) [feat. Lil Wayne]',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'HYFR (Hell Ya F*****g Right) [feat. Lil Wayne]',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hyfr-hell-ya-f-g-right-feat-lil-wayne/1440642493?i=1440643122&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/hyfr-hell-ya-f-g-right-feat-lil-wayne/1440642493?i=1440643122&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4b/9d/9f/4b9d9f54-9eac-476c-fe60-c1f33f71b69a/mzaf_6084570330282689845.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-11-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 16,
      trackTimeMillis: 206627,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841390,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Too Good (feat. Rihanna)',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Too Good (feat. Rihanna)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/too-good-feat-rihanna/1440841363?i=1440841390&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/too-good-feat-rihanna/1440841363?i=1440841390&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9b/5d/53/9b5d530c-041f-e5b3-6f3c-fdb0b1b412e0/mzaf_7407755506667623313.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 16,
      trackTimeMillis: 263371,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642755,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Make Me Proud (feat. Nicki Minaj)',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Make Me Proud (feat. Nicki Minaj)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/make-me-proud-feat-nicki-minaj/1440642493?i=1440642755&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/make-me-proud-feat-nicki-minaj/1440642493?i=1440642755&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dc/df/07/dcdf071f-4eef-2ec0-3c82-cbd6f33e6d93/mzaf_17393072007214234200.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-10-16T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 10,
      trackTimeMillis: 219880,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829877,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'All Me (feat. 2 Chainz & Big Sean)',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'All Me (feat. 2 Chainz & Big Sean)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/all-me-feat-2-chainz-big-sean/1440829462?i=1440829877&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/all-me-feat-2-chainz-big-sean/1440829462?i=1440829877&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fc/e0/fd/fce0fd16-25cb-24df-924a-8b2dd7ce6b86/mzaf_5140881260977529113.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 15,
      trackTimeMillis: 271580,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642743,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Marvins Room',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Marvins Room',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/marvins-room/1440642493?i=1440642743&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/marvins-room/1440642493?i=1440642743&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/59/4c/5b/594c5ba2-2a58-da75-07cb-b58bd7c83098/mzaf_15745435262088985468.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-06-28T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 6,
      trackTimeMillis: 347227,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841382,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Controlla',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Controlla',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/controlla/1440841363?i=1440841382&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/controlla/1440841363?i=1440841382&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ec/83/ad/ec83ad1e-0800-c13e-a92b-7ce8c08fbdf6/mzaf_2346355847443588355.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 11,
      trackTimeMillis: 245228,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841385,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Grammys (feat. Future)',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Grammys (feat. Future)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/grammys-feat-future/1440841363?i=1440841385&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/grammys-feat-future/1440841363?i=1440841385&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/c3/76/5ac37679-134d-319a-9d2e-a3b714b11c3a/mzaf_5518891973280180508.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 13,
      trackTimeMillis: 220435,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841369,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: '9',
      collectionCensoredName: 'Views',
      trackCensoredName: '9',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/9/1440841363?i=1440841369&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/9/1440841363?i=1440841369&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f3/5f/d5/f35fd5c5-4e0a-2590-2cb9-d95b5857b467/mzaf_9267754831599513776.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 2,
      trackTimeMillis: 255794,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829761,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'The Language',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'The Language',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-language/1440829462?i=1440829761&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-language/1440829462?i=1440829761&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/e4/9f/4ee49fa5-9943-6389-3623-9bba33092444/mzaf_12757748461193745058.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 10,
      trackTimeMillis: 224390,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440839718,
      trackId: 1440839943,
      artistName: 'Drake',
      collectionName: "If You're Reading This It's Too Late",
      trackName: 'Energy',
      collectionCensoredName: "If You're Reading This It's Too Late",
      trackCensoredName: 'Energy',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/energy/1440839718?i=1440839943&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/energy/1440839718?i=1440839943&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/34/4e/32344e2a-7689-8c2e-b6e3-f161d538c9cc/mzaf_7167837577944994139.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-02-13T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 2,
      trackTimeMillis: 181928,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440762388,
      trackId: 1440762795,
      artistName: 'Drake',
      collectionName: 'Thank Me Later',
      trackName: 'Find Your Love',
      collectionCensoredName: 'Thank Me Later',
      trackCensoredName: 'Find Your Love',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/find-your-love/1440762388?i=1440762795&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/find-your-love/1440762388?i=1440762795&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/86/73/cc/8673cc33-0e13-5950-86d3-74800dfbe136/mzaf_5876953672416177332.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2010-05-05T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 13,
      trackTimeMillis: 208947,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841376,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Redemption',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Redemption',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/redemption/1440841363?i=1440841376&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/redemption/1440841363?i=1440841376&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b3/17/34/b3173424-37ea-6651-a730-7688349c7e7f/mzaf_14983813029746332410.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 7,
      trackTimeMillis: 333950,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841389,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Pop Style',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Pop Style',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/pop-style/1440841363?i=1440841389&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/pop-style/1440841363?i=1440841389&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/80/cf/92/80cf9239-5296-5eb1-d959-aca6f98f77e4/mzaf_4926197662230948857.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-05T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 15,
      trackTimeMillis: 212949,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642735,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Crew Love (feat. The Weeknd)',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Crew Love (feat. The Weeknd)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/crew-love-feat-the-weeknd/1440642493?i=1440642735&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/crew-love-feat-the-weeknd/1440642493?i=1440642735&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dd/a4/73/dda47321-a9da-27e6-9fec-49a30d85dec8/mzaf_5910665381930654671.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-11-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 4,
      trackTimeMillis: 208813,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829777,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Pound Cake / Paris Morton Music 2 (feat. JAY Z)',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Pound Cake / Paris Morton Music 2 (feat. JAY Z)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/pound-cake-paris-morton-music-2-feat-jay-z/1440829462?i=1440829777&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/pound-cake-paris-morton-music-2-feat-jay-z/1440829462?i=1440829777&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/48/e4/02/48e40243-16f8-c57a-dccb-1901441fa3f2/mzaf_4754269508107463204.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 13,
      trackTimeMillis: 433811,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841725,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Fire & Desire',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Fire & Desire',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/fire-desire/1440841363?i=1440841725&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/fire-desire/1440841363?i=1440841725&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b8/3a/48/b83a48d9-6a2a-7889-8b59-fa80faa28bfe/mzaf_3165706594392333169.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 18,
      trackTimeMillis: 238144,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440839718,
      trackId: 1440839878,
      artistName: 'Drake',
      collectionName: "If You're Reading This It's Too Late",
      trackName: 'Legend',
      collectionCensoredName: "If You're Reading This It's Too Late",
      trackCensoredName: 'Legend',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/legend/1440839718?i=1440839878&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/legend/1440839718?i=1440839878&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e9/be/35/e9be350d-587d-1b29-9fe7-1e499439d956/mzaf_3446303946276804240.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-02-13T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 1,
      trackTimeMillis: 241859,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841730,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Hotline Bling',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Hotline Bling',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hotline-bling/1440841363?i=1440841730&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/hotline-bling/1440841363?i=1440841730&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c7/b1/f3/c7b1f35a-8d24-735b-5923-1fb52fc7647e/mzaf_12441003627825640809.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2015-07-31T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 20,
      trackTimeMillis: 267024,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841727,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Views',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Views',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/views/1440841363?i=1440841727&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/views/1440841363?i=1440841727&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ac/ab/47/acab47a8-b4af-03e2-834c-819b8ff57002/mzaf_14218273629027025564.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 19,
      trackTimeMillis: 311962,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841375,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Weston Road Flows',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Weston Road Flows',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/weston-road-flows/1440841363?i=1440841375&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/weston-road-flows/1440841363?i=1440841375&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/63/7b/77/637b7710-2171-0363-887b-e8148acf2b59/mzaf_7409999445906152679.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 6,
      trackTimeMillis: 253520,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440642493,
      trackId: 1440642637,
      artistName: 'Drake',
      collectionName: 'Take Care (Deluxe Version)',
      trackName: 'Shot for Me',
      collectionCensoredName: 'Take Care (Deluxe Version)',
      trackCensoredName: 'Shot for Me',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/shot-for-me/1440642493?i=1440642637&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/shot-for-me/1440642493?i=1440642637&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/02/57/bd/0257bd65-e66f-5ff2-97a0-f2e25f73ffd3/mzaf_12119150442135178399.plus.aac.p.m4a',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2011-11-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 2,
      trackTimeMillis: 224720,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440839718,
      trackId: 1440840128,
      artistName: 'Drake',
      collectionName: "If You're Reading This It's Too Late",
      trackName: '6 God',
      collectionCensoredName: "If You're Reading This It's Too Late",
      trackCensoredName: '6 God',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/6-god/1440839718?i=1440840128&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/6-god/1440839718?i=1440840128&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/36/6a/cb/366acbe2-73dc-5a07-fa36-b15af920a031/mzaf_10445949877880764190.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-02-13T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 7,
      trackTimeMillis: 180667,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829873,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Come Thru',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Come Thru',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/come-thru/1440829462?i=1440829873&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/come-thru/1440829462?i=1440829873&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/80/21/19/80211909-86ff-aa4c-9aae-fd16e4ca2e2a/mzaf_11422827558458668716.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 14,
      trackTimeMillis: 236826,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440839718,
      trackId: 1440840107,
      artistName: 'Drake',
      collectionName: "If You're Reading This It's Too Late",
      trackName: 'Know Yourself',
      collectionCensoredName: "If You're Reading This It's Too Late",
      trackCensoredName: 'Know Yourself',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/know-yourself/1440839718?i=1440840107&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/know-yourself/1440839718?i=1440840107&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/30/d7/10/30d71043-f06a-0c23-9948-d644259e85ec/mzaf_13140690846769276750.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-02-13T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 4,
      trackTimeMillis: 275841,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841374,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Hype',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Hype',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hype/1440841363?i=1440841374&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/hype/1440841363?i=1440841374&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/99/98/f49998c3-0ff6-22a7-6926-8e0cd204e2ae/mzaf_11633683542249290884.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 5,
      trackTimeMillis: 209408,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841370,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'U With Me?',
      collectionCensoredName: 'Views',
      trackCensoredName: 'U With Me?',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/u-with-me/1440841363?i=1440841370&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/u-with-me/1440841363?i=1440841370&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/be/6e/34/be6e3490-778c-1625-ddad-67c2b560c10e/mzaf_6306013013033681346.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 3,
      trackTimeMillis: 297371,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841387,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Childs Play',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Childs Play',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/childs-play/1440841363?i=1440841387&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/childs-play/1440841363?i=1440841387&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/48/99/58/489958dd-5178-7742-820b-2579eec37f0c/mzaf_4231745128696824585.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 14,
      trackTimeMillis: 241400,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841378,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'With You (feat. PARTYNEXTDOOR)',
      collectionCensoredName: 'Views',
      trackCensoredName: 'With You (feat. PARTYNEXTDOOR)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/with-you-feat-partynextdoor/1440841363?i=1440841378&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/with-you-feat-partynextdoor/1440841363?i=1440841378&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/27/29/9a/27299a5f-f3e2-45a2-3469-f96af89b4343/mzaf_9546360051621784221.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 8,
      trackTimeMillis: 195058,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841380,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Still Here',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Still Here',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/still-here/1440841363?i=1440841380&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/still-here/1440841363?i=1440841380&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7d/c0/e4/7dc0e4b6-c7d4-73e4-2134-6275ef0a0336/mzaf_7659431698776438216.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 10,
      trackTimeMillis: 189846,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829615,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Wu-Tang Forever',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Wu-Tang Forever',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/wu-tang-forever/1440829462?i=1440829615&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/wu-tang-forever/1440829462?i=1440829615&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fa/c7/53/fac75360-8ccb-796c-123d-1f7be882df73/mzaf_12141065515699239282.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 4,
      trackTimeMillis: 217803,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829772,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Too Much',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Too Much',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/too-much/1440829462?i=1440829772&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/too-much/1440829462?i=1440829772&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/70/1e/ce701e2b-13e4-f86d-9eb4-cfc3b65e0176/mzaf_2769802987554479696.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 12,
      trackTimeMillis: 261860,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1445314084,
      trackId: 1445314162,
      artistName: 'Drake',
      collectionName: '0 To 100 / The Catch Up - Single',
      trackName: '0 To 100 / The Catch Up',
      collectionCensoredName: '0 To 100 / The Catch Up - Single',
      trackCensoredName: '0 To 100 / The Catch Up',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/0-to-100-the-catch-up/1445314084?i=1445314162&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/0-to-100-the-catch-up/1445314084?i=1445314162&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/e4/60/f0e4600a-4829-79cd-06ba-f955b7dcb1de/mzaf_5164549777884507220.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/18/30/d4/1830d40a-9fce-0089-cf52-c74978669f72/00602537976423.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/18/30/d4/1830d40a-9fce-0089-cf52-c74978669f72/00602537976423.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/18/30/d4/1830d40a-9fce-0089-cf52-c74978669f72/00602537976423.rgb.jpg/100x100bb.jpg',
      collectionPrice: 1.29,
      trackPrice: 1.29,
      releaseDate: '2014-07-15T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 275227,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841371,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Feel No Ways',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Feel No Ways',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/feel-no-ways/1440841363?i=1440841371&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/feel-no-ways/1440841363?i=1440841371&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0d/05/00/0d050083-08e4-b92c-6f4a-c1f2cfcca561/mzaf_16829802047810312840.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 4,
      trackTimeMillis: 240656,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829622,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Worst Behavior',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Worst Behavior',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/worst-behavior/1440829462?i=1440829622&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/worst-behavior/1440829462?i=1440829622&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/25/a5/56/25a556fb-2f36-3d17-9871-cb8cbdaeb073/mzaf_11143717090441092310.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 6,
      trackTimeMillis: 270525,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440762388,
      trackId: 1440762701,
      artistName: 'Drake',
      collectionName: 'Thank Me Later',
      trackName: 'Up All Night (feat. Nicki Minaj)',
      collectionCensoredName: 'Thank Me Later',
      trackCensoredName: 'Up All Night (feat. Nicki Minaj)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/up-all-night-feat-nicki-minaj/1440762388?i=1440762701&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/up-all-night-feat-nicki-minaj/1440762388?i=1440762701&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/86/97/b2/8697b2f0-0b19-11e1-c379-ebd1da8a58ed/mzaf_4023492111636077033.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2010-06-14T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 6,
      trackTimeMillis: 234333,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440841363,
      trackId: 1440841379,
      artistName: 'Drake',
      collectionName: 'Views',
      trackName: 'Faithful (feat. Pimp C & dvsn)',
      collectionCensoredName: 'Views',
      trackCensoredName: 'Faithful (feat. Pimp C & dvsn)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/faithful-feat-pimp-c-dvsn/1440841363?i=1440841379&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/faithful-feat-pimp-c-dvsn/1440841363?i=1440841379&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/df/9f/fb/df9ffbe7-aaef-a6f6-1a1d-79eef3cadbc9/mzaf_121181868627714550.plus.aac.p.m4a',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2016-04-29T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 20,
      trackNumber: 9,
      trackTimeMillis: 290141,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829472,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'Tuscan Leather',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'Tuscan Leather',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/tuscan-leather/1440829462?i=1440829472&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/tuscan-leather/1440829462?i=1440829472&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e9/c8/87/e9c88755-e496-2129-b421-de71bc50bbfb/mzaf_10634628837259481437.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 1,
      trackTimeMillis: 366395,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440829462,
      trackId: 1440829626,
      artistName: 'Drake',
      collectionName: 'Nothing Was the Same (Deluxe)',
      trackName: 'From Time (feat. Jhene Aiko)',
      collectionCensoredName: 'Nothing Was the Same (Deluxe)',
      trackCensoredName: 'From Time (feat. Jhene Aiko)',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/from-time-feat-jhene-aiko/1440829462?i=1440829626&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/from-time-feat-jhene-aiko/1440829462?i=1440829626&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8c/10/52/8c105294-8068-c1d1-835e-d81fbff6458f/mzaf_12679993433380760398.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '2013-09-23T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 7,
      trackTimeMillis: 322154,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 271256,
      collectionId: 1440839718,
      trackId: 1440840036,
      artistName: 'Drake',
      collectionName: "If You're Reading This It's Too Late",
      trackName: '10 Bands',
      collectionCensoredName: "If You're Reading This It's Too Late",
      trackCensoredName: '10 Bands',
      artistViewUrl: 'https://music.apple.com/us/artist/drake/271256?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/10-bands/1440839718?i=1440840036&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/10-bands/1440839718?i=1440840036&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/29/46/492946ca-044b-79d7-f202-9e1f75556102/mzaf_4154619110638104088.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2015-02-13T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 3,
      trackTimeMillis: 177743,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
  ]

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    // const userInput = document.querySelector('#formInput').value
    // const response = await fetch(
    //   `${BASE_API_URL}/search?media=${MEDIA}&term=${userInput}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )

    // const data = await response.json()
    renderSearchResults(data)
  })

  formResults.addEventListener('click', (e) => {
    console.log(e.target.dataset)
    removeAllChildNodes(musicPlayer)

    const audioEl = document.createElement('audio')
    audioEl.appendChild(document.createElement('source')).src =
      e.target.dataset.previewUrl
    audioEl.controls = true
    audioEl.autoplay = true

    musicPlayer.appendChild(audioEl)
    musicPlayer.appendChild(
      document.createElement('p')
    ).innerText = `Now Playing: ${e.target.dataset.songInfo}`
  })

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  const renderSearchResults = (data) => {
    removeAllChildNodes(formResults)

    formResults.appendChild(document.createElement('h2')).innerText =
      'Search Results:'
    data.forEach((result) => {
      const formResultItem = document.createElement('div')
      const imageEl = document.createElement('img')
      imageEl.src = result.artworkUrl100
      imageEl.dataset.previewUrl = result.previewUrl
      imageEl.dataset.songInfo = `${result.trackName} - ${result.artistName}`
      formResultItem.appendChild(imageEl)
      formResultItem.appendChild(document.createElement('h3')).innerText =
        result.trackName
      formResultItem.appendChild(document.createElement('h2')).innerText =
        result.artistName

      formResults.appendChild(formResultItem)
    })
  }
})
