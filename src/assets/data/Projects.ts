/* eslint-disable max-len */
export interface ProjectInt {
  title: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
  description: string;
  tech: string[];
}

export const projects: ProjectInt[] = [
  {
    title: 'Becca Lyria',
    image: 'project1.jpg',
    liveUrl: 'https://beccalyria.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/Becca-Lyria',
    tech: ['TypeScript', 'node.js', 'MongoDB', 'discord.js'],
    description:
      'A Discord bot built on the discord.js library with TypeScript. Includes a database connection to MongoDB, multiple API calls, and a number of available features. Documentation page built with Angular.',
  },
  {
    title: 'Message Board',
    image: 'project2.jpg',
    liveUrl: 'http://forum.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/forum',
    tech: ['TypeScript', 'MongoDB', 'node.js', 'Express', 'HTML', 'CSS'],
    description:
      'A message board allowing users to create posts and reply to topics. Still in alpha.',
  },
  {
    title: 'Social Media Database',
    image: 'project3.png',
    liveUrl: 'http://socialdb.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/social-db',
    tech: ['TypeScript', 'node.js', 'Express', 'MongoDB + Mongoose'],
    description:
      'An app that allows users to create a virtual business card to share all of their social media profiles at one time.',
  },
  {
    title: 'Counting Cards',
    image: 'project4.jpg',
    liveUrl: 'https://www.nhcarrigan.com/counting-cards',
    codeUrl: 'https://github.com/nhcarrigan/counting-cards',
    tech: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Offers three different levels of difficulty for learning how to count cards in Blackjack.',
  },
  {
    title: 'TSProGen',
    image: 'project5.png',
    liveUrl: 'https://www.npmjs.com/package/tsprogen',
    codeUrl: 'https://github.com/nhcarrigan/TSProGen',
    tech: ['TypeScript', 'node'],
    description:
      'A command-line interface tool for generating the initial file structure of a TypeScript node.js project.',
  },
];
