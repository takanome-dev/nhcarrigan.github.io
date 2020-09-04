export interface ProjectInt {
  title: string;
  liveUrl: string;
  codeUrl: string;
  tech: string[];
  description: string;
}

export const Projects: ProjectInt[] = [
  {
    title: 'Tour of Heroes',
    liveUrl: 'https://www.nhcarrigan.com/angular-tour-of-heroes',
    codeUrl: 'https://github.com/nhcarrigan/angular-tour-of-heroes',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    description: 'My first Angular app!',
  },
  {
    title: 'Pokedex',
    liveUrl: 'https://www.nhcarrigan.com/Pokedex',
    codeUrl: 'https://github.com/nhcarrigan/Pokedex',
    tech: ['TypeScript', 'HTML', 'CSS'],
    description:
      'A Pokemon themed web-app. Connects to an API to fetch data and render it in a readable format.',
  },
  {
    title: 'Tic-Tac-Toe',
    liveUrl: 'https://www.nhcarrigan.com/Tic-Tac-Toe',
    codeUrl: 'https://github.com/nhcarrigan/Tic-Tac-Toe',
    tech: ['TypeScript', 'HTML', 'CSS'],
    description:
      'A Tic-Tac-Toe game. Basic logic has been implemented to try to prevent the player from winning.',
  },
  {
    title: 'Weather App',
    liveUrl: 'https://www.nhcarrigan.com/Weather-App',
    codeUrl: 'https://github.com/nhcarrigan/Weather-App',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      'A weather app. Allows the user to fetch their weather based on location or by inputting coordinates.',
  },
  {
    title: 'Magic: The Gathering - Card Search',
    liveUrl: 'https://www.nhcarrigan.com/mtg-search',
    codeUrl: 'https://github.com/nhcarrigan/mtg-search',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      'A Magic: The Gathering themed web app. Allows the user to search for a card by name, filtered optionally by card set.',
  },
  {
    title: 'Magic: The Gathering - Element Battle',
    liveUrl: 'https://www.nhcarrigan.com/mtg-element-battle',
    codeUrl: 'https://github.com/nhcarrigan/mtg-element-battle',
    tech: ['TypeScript', 'HTML', 'CSS'],
    description:
      "A Magic: The Gathering themed 'Rock Paper Scissors' clone. Determines the winner of each round and tracks the scores.",
  },
  {
    title: 'Choose Your Own Adventure',
    liveUrl: 'https://www.nhcarrigan.com/text-adventure',
    codeUrl: 'https://github.com/nhcarrigan/text-adventure',
    tech: ['HTML', 'CSS'],
    description:
      'A text-themed web app designed to simulate the experience of reading a Choose Your Own Adventure book.',
  },
  {
    title: 'Mini Projects',
    liveUrl: 'https://www.nhcarrigan.com/mini-projects',
    codeUrl: 'https://github.com/nhcarrigan/mini-projects',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description: 'A collection of various smaller web-apps and projects',
  },
  {
    title: 'React Test',
    liveUrl: 'https://www.nhcarrigan.com/react-test',
    codeUrl: 'https://github.com/nhcarrigan/react-test',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    description: 'A collection of smaller projects created using React.',
  },
];
