export interface FeaturedInt {
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  description: string;
  tech: string[];
}

export const Featured: FeaturedInt[] = [
  {
    title: 'Discord Bot',
    image: 'discord.jpg',
    liveUrl: 'https://www.nhcarrigan.com/discord-bot-documentation',
    codeUrl: 'https://github.com/nhcarrigan/discord-bot',
    tech: ['TypeScript', 'node.js', 'MongoDB', 'discord.js'],
    description:
      'A Discord bot built on the discord.js library with TypeScript. Includes a database connection to MongoDB, multiple API calls, and a number of available features.',
  },
  {
    title: 'Message Board',
    image: 'forum.jpg',
    liveUrl: 'http://forum.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/forum',
    tech: ['TypeScript', 'MongoDB', 'node.js', 'Express', 'HTML', 'CSS'],
    description:
      'A messaage board allowing users to create posts and reply to topics. Still in alpha.',
  },
  {
    title: 'Counting Cards',
    image: 'cards.jpg',
    liveUrl: 'https://www.nhcarrigan.com/counting-cards',
    codeUrl: 'https://github.com/nhcarrigan/counting-cards',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Offers three different levels of difficulty for learning how to count cards in Blackjack.',
  },
  {
    title: 'Smash a Bug',
    image: 'bug.jpg',
    liveUrl: 'https://www.nhcarrigan.com/smash-a-bug',
    codeUrl: 'https://github.com/nhcarrigan/counting-cards',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      "A 'whack-a-mole' clone. Uses logic to determine when the player has successfully smashed a bug, tracks when the goal is met.",
  },
  {
    title: 'National Parks Search Page',
    image: 'parks.jpg',
    liveUrl: 'http://parks.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/park-search',
    tech: ['TypeScript', 'jQuery', 'HTML', 'CSS'],
    description:
      'Searches the National Parks API and returns formatted data. Uses TypeScript for the front and back end, and jQuery to send the AJAX requests.',
  },
];
