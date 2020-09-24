import faker from 'faker'

export const initialNotes = [
  {
    content: 'Good things came in small sizes for Coca-Cola last quarter. The company reported sales that topped forecasts, thanks in part to a double-digit increase in volume for its 7.5-ounce mini cans. The smaller-sized cans appeal to more health-conscious consumers who are increasingly watching what they drink and eat but may not want to switch to diet sodas that contain artificial sweeteners and other chemicals. The word "diet" did not appear once in the companys earnings release and was not mentioned on the conference call with analysts on Friday morning either.',
    folder: 'random',
    id: 124111251,
    editDate: faker.date.past()
  },
  {
    content: 'Richard Phillips Feynman was an American theoretical physicist, known for his work in the path integral formulation of quantum mechanics, the theory of quantum electrodynamics, and the physics of the superfluidity of supercooled liquid helium, as well as in particle physics for which he proposed the parton model. For contributions to the development of quantum electrodynamics, Feynman received the Nobel Prize in Physics in 1965 jointly with Julian Schwinger and Shinichirō Tomonaga.',
    folder: 'people',
    id: 7458457334,
    editDate: faker.date.past()
  },
  {
    content: 'Shunsuke Nakamura (Nakamura Shunsuke, born 24 June 1978) is a Japanese professional footballer who plays as an attacking midfielder for Yokohama FC in J2 League. He is the first and only person to have been named J.League Most Valuable Player more than once, receiving the award in 2000 and 2013. He is well known for his vision, touch, bending shots and free kick-taking abilities; Steve Perryman once remarked that Nakamura "could open a tin of beans with his left foot"',
    folder: 'people',
    id: 908623682,
    editDate: faker.date.past()
  },
  {
    content: 'The Tamám Shud case, also known as the Mystery of the Somerton Man, is an unsolved case of an unidentified man found dead at 6:30 am, 1 December 1948, on the Somerton Park beach, just south of Adelaide, South Australia. The case is named after the Persian phrase tamám shud, meaning "ended" or "finished," which was printed on a scrap of paper found months later in the fob pocket of the mans trousers. The scrap had been torn from the final page of a copy of Rubaiyat of Omar Khayyám, authored by 12th-century poet, Omar Khayyám. Tamám was misspelt as Tamán in many early reports, and this error has often been repeated, leading to confusion about the name in the media.',
    folder: 'people',
    id: 239852398888,
    editDate: faker.date.past()
  },
  {
    content: 'Japan Airlines Flight 123 was a scheduled domestic Japan Airlines passenger flight from Tokyos Haneda Airport to Osaka International Airport, Japan. On August 12, 1985, a Boeing 747SR operating this route suffered a sudden decompression twelve minutes into the flight and crashed in the area of Mount Takamagahara, Ueno, Gunma Prefecture, 100 kilometres (62 miles; 54 nautical miles) from Tokyo thirty-two minutes later. The crash site was on Osutaka Ridge, near Mount Osutaka.',
    folder: 'random',
    id: 3484989999999933321,
    editDate: faker.date.past()
  },
  {
    content: '81-717/714 is a metro car designed in the Soviet Union in the mid-1970s. The cars were made from 1976 to 2010 by Metrovagonmash and the I. E. Yegorov Vagonmash factories of Mytishchi and Saint Petersburg, respectively. Production is still ongoing for specific models and/or modernizations.',
    folder: 'random',
    id: 34493898249333,
    editDate: faker.date.past()
  },
  {
    content: 'Dens Park, officially known as Kilmac Stadium at Dens Park for sponsorship reasons, is a football stadium on Dens Road in Dundee, Scotland, which is the home of Scottish Championship club Dundee and has a capacity of 11,506. Tannadice Park, the home of rivals Dundee United, is just 300 metres away.',
    folder: 'places',
    id: 3449389822223,
    editDate: faker.date.past()
  },
  {
    content: 'Tamka, or ulica Tamka, is a street in the Powiśle district of Warsaw, Poland. The street runs downhill from central Warsaw toward the Vistula River and connects ulica Świętokrzyska with the Świętokrzyski Bridge. The streets name originates from a small dam (Polish: tama) that once dammed a stream that formerly flowed along the course of the present street.',
    folder: 'places',
    id: 15128519222,
    editDate: faker.date.past()
  }
]

export const initialFolders = [
  {
    name: 'Notes',
    url: 'notes'
  },
  {
    name: 'Places',
    url: 'places'
  },
  {
    name: 'Random',
    url: 'random'
  },
  {
    name: 'People',
    url: 'people'
  }
]