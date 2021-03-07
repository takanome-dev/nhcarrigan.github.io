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
    image: 'project1.png',
    liveUrl: 'https://beccalyria.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/Becca-Lyria',
    tech: ['TypeScript', 'node.js', 'MongoDB', 'discord.js'],
    description:
      'A Discord bot built on the discord.js library with TypeScript. Includes a database connection to MongoDB, multiple API calls, and a number of available features. Documentation page built with Angular.',
  },
  {
    title: 'BattleSnake',
    image: 'project2.png',
    liveUrl: 'https://play.battlesnake.com/u/nhcarrigan/becca-lyria/',
    codeUrl: 'https://github.com/nhcarrigan/battlesnake',
    tech: ['TypeScript', 'node', 'express', 'chai'],
    description:
      'A TypeScript-powered web server that interacts with the Battlesnake client. Uses Mocha and Chai for unit/functional testing.',
  },
  {
    title: 'Timezone Calculator',
    image: 'project3.png',
    liveUrl: 'https://www.nhcarrigan.com/timezone-chart/',
    codeUrl: 'https://github.com/nhcarrigan/timezone-chart',
    tech: ['TypeScript', 'Angular', 'Karma'],
    description: `A web application that takes an event's start and end time and converts it to the user's local timezone. Uses Karma for testing.`,
  },
  {
    title: 'Discord Rich Presence',
    image: 'project4.png',
    liveUrl: 'http://chat.nhcarrigan.com',
    codeUrl: 'https://github.com/nhcarrigan/discord-rpc',
    tech: ['TypeScript', 'node'],
    description:
      'A client-side integration for interacting with Discord. This tool can be configured by the user to change the displayed values, and must be run locally.',
  },
  {
    title: 'SendGrid Email Tool',
    image: 'project5.png',
    liveUrl: 'https://github.com/nhcarrigan/sendgrid-email-blast',
    codeUrl: 'https://github.com/nhcarrigan/sendgrid-email-blast',
    tech: ['TypeScript', 'node'],
    description:
      'A CLI wizard build with TypeScript. Prompts the user through a series of questions for sending emails through the Twilio SendGrid API. Built for freeCodeCamp.',
  },
];
