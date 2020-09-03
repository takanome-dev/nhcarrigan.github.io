export interface FeaturedInt {
  title: string;
  image: string; //TODO: Figure out formatting for link.
  liveUrl: string;
  codeUrl: string;
  description: string;
}

export const Featured: FeaturedInt[] = [
  {
    title: 'Discord Bot',
    image: 'discord.jpg',
    liveUrl: 'https://www.nhcarrigan.com/discord-bot-documentation',
    codeUrl: 'https://github.com/nhcarrigan/discord-bot',
    description:
      'A Discord bot built on the discord.js library with TypeScript. Includes a database connection to MongoDB, multiple API calls, and a number of available features.',
  },
  {
    title: 'Message Board',
    image: 'forum.jpg',
    liveUrl: 'http://forum.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/forum',
    description:
      'A full-stack application built with MongoDB, node.js, Express, and TypeScript. Still in alpha.',
  },
  {
    title: 'Counting Cards',
    image: 'cards.jpg',
    liveUrl: 'https://www.nhcarrigan.com/counting-cards',
    codeUrl: 'https://github.com/nhcarrigan/counting-cards',
    description:
      'A basic webapp built with JavaScript. Offers three different levels of difficulty for learning how to count cards in Blackjack.',
  },
  {
    title: 'Smash a Bug',
    image: 'bug.jpg',
    liveUrl: 'https://www.nhcarrigan.com/smash-a-bug',
    codeUrl: 'https://github.com/nhcarrigan/counting-cards',
    description:
      "A 'whack-a-mole' clone built with JavaScript. Uses logic to determine when the player has successfully smashed a bug, tracks when the goal is met.",
  },
  {
    title: 'National Parks Search Page',
    image: 'parks.jpg',
    liveUrl: 'http://parks.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/park-search',
    description:
      'Searches the National Parks API and returns formatted data. Uses TypeScript for the front and back end, and jQuery to send the AJAX requests.',
  },
];
