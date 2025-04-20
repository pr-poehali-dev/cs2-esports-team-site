
import { TeamProps } from "@/components/TeamCard";

export const teams: TeamProps[] = [
  {
    id: "navi",
    name: "Natus Vincere",
    logo: "/placeholder.svg",
    country: "Украина",
    countryCode: "UA",
    rank: 1,
    achievements: [
      { title: "PGL Major Stockholm 2021", year: 2021 },
      { title: "BLAST Premier World Final 2023", year: 2023 },
      { title: "ESL Pro League Season 14", year: 2021 }
    ],
    players: [
      { name: "Александр Костылев", nickname: "s1mple", role: "AWPer" },
      { name: "Валерий Ваховский", nickname: "b1t", role: "Rifler" },
      { name: "Алексей Столяров", nickname: "Perfecto", role: "Support" },
      { name: "Иван Шевцов", nickname: "iM", role: "Rifler" },
      { name: "Юрий Сухарев", nickname: "jL", role: "IGL" }
    ]
  },
  {
    id: "vitality",
    name: "Team Vitality",
    logo: "/placeholder.svg",
    country: "Франция",
    countryCode: "FR",
    rank: 2,
    achievements: [
      { title: "IEM Katowice 2023", year: 2023 },
      { title: "BLAST Premier Fall Final 2022", year: 2022 },
      { title: "ESL Pro League Season 16", year: 2022 }
    ],
    players: [
      { name: "Матье Эрбо", nickname: "ZywOo", role: "AWPer" },
      { name: "Дэн Маデеска", nickname: "apEX", role: "IGL" },
      { name: "Лоран Аяр", nickname: "flameZ", role: "Rifler" },
      { name: "Шакиб Ахмед", nickname: "Spinx", role: "Rifler" },
      { name: "Эмиль Хоффман", nickname: "Magisk", role: "Lurker" }
    ]
  },
  {
    id: "faze",
    name: "FaZe Clan",
    logo: "/placeholder.svg",
    country: "Международная",
    countryCode: "INTL",
    rank: 3,
    achievements: [
      { title: "PGL Major Antwerp 2022", year: 2022 },
      { title: "IEM Cologne 2022", year: 2022 },
      { title: "ESL Pro League Season 15", year: 2022 }
    ],
    players: [
      { name: "Хвецца Франковский", nickname: "broky", role: "AWPer" },
      { name: "Финн Андерсен", nickname: "karrigan", role: "IGL" },
      { name: "Рассел Ван Дулкен", nickname: "Twistzz", role: "Rifler" },
      { name: "Робин Рённквист", nickname: "ropz", role: "Lurker" },
      { name: "Давид Чернянский", nickname: "frozen", role: "Rifler" }
    ]
  },
  {
    id: "g2",
    name: "G2 Esports",
    logo: "/placeholder.svg",
    country: "Международная",
    countryCode: "INTL",
    rank: 4,
    achievements: [
      { title: "IEM Katowice 2022 (финалист)", year: 2022 },
      { title: "PGL Major Stockholm 2021 (финалист)", year: 2021 },
      { title: "BLAST Premier World Final 2022", year: 2022 }
    ],
    players: [
      { name: "Никола Ковач", nickname: "NiKo", role: "Rifler" },
      { name: "Илья Осипов", nickname: "m0NESY", role: "AWPer" },
      { name: "Расмус Нильсен", nickname: "HooXi", role: "IGL" },
      { name: "Неманья Исакович", nickname: "huNter", role: "Rifler" },
      { name: "Джастин Саваж", nickname: "jks", role: "Support" }
    ]
  },
  {
    id: "spirit",
    name: "Team Spirit",
    logo: "/placeholder.svg",
    country: "Россия",
    countryCode: "RU",
    rank: 5,
    achievements: [
      { title: "PGL Major Copenhagen 2024", year: 2024 },
      { title: "ESL Pro League Season 19", year: 2024 },
      { title: "IEM Rio 2023", year: 2023 }
    ],
    players: [
      { name: "Борис Воробьев", nickname: "magixx", role: "Rifler" },
      { name: "Дмитрий Соколов", nickname: "sh1ro", role: "AWPer" },
      { name: "Павел Огороднов", nickname: "Patsi", role: "Rifler" },
      { name: "Даниил Соткин", nickname: "donk", role: "Rifler" },
      { name: "Денис Бурнышев", nickname: "chopper", role: "IGL" }
    ]
  },
  {
    id: "ence",
    name: "ENCE",
    logo: "/placeholder.svg",
    country: "Финляндия",
    countryCode: "FI",
    rank: 6,
    achievements: [
      { title: "ESL Pro League Season 17 (финалист)", year: 2023 },
      { title: "IEM Dallas 2023", year: 2023 },
      { title: "BLAST Premier Spring Final 2023", year: 2023 }
    ],
    players: [
      { name: "Павел Конюшевский", nickname: "dycha", role: "Rifler" },
      { name: "Гай Иланген", nickname: "NertZ", role: "Rifler" },
      { name: "Альвару Векуй", nickname: "SunPayus", role: "AWPer" },
      { name: "Матс Гиппсон", nickname: "Sayf", role: "Rifler" },
      { name: "Марко Нимен", nickname: "valde", role: "IGL" }
    ]
  }
];

export const getTeamById = (id: string): TeamProps | undefined => {
  return teams.find(team => team.id === id);
};
