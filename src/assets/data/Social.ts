/* eslint-disable max-len */
export const social: SocialInt[] = [
  {
    site: 'Resume',
    url: '../../assets/files/Resume.pdf',
    icon: 'fas fa-file',
    description: 'View my past and current work history',
  },
  {
    site: 'Discord Server',
    url: 'http://chat.nhcarrigan.com',
    icon: 'fab fa-discord',
    description:
      'My Discord server is a lovely little community where people have a safe and welcoming environment to chat and hang out. We talk about programming, gaming, and other random topics.',
  },
  {
    site: 'freeCodeCamp Forum',
    url: 'https://forum.freecodecamp.org/u/nhcarrigan',
    icon: 'fab fa-free-code-camp',
    description:
      'On the freeCodeCamp forum, I help foster and encourage our community members as they move down their development path.',
  },
  {
    site: 'GitHub',
    url: 'https://github.com/nhcarrigan',
    icon: 'fab fa-github-square',
    description:
      'GitHub holds all of my code, for both personal and work projects.',
  },
  {
    site: 'Facebook',
    url: 'https://www.facebook.com/nhcarrigan',
    icon: 'fab fa-facebook-square',
    description:
      'I primarily use Facebook to stay connected with those I know outside of the internet.',
  },
  {
    site: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nhcarrigan',
    icon: 'fab fa-linkedin',
    description:
      'LinkedIn is used to track my professional accomplishments and successes.',
  },
  {
    site: 'Twitter',
    url: 'https://www.twitter.com/nhcarrigan',
    icon: 'fab fa-twitter',
    description:
      'Twitter contains various random bits of my development journey: things I have learned, problems I have encountered, etc.',
  },
  {
    site: 'YouTube',
    url: 'https://www.youtube.com/channel/UCjzzWNrF-9LOudszZR82dWQ',
    icon: 'fab fa-youtube',
    description:
      'My YouTube channel is used for streaming programming related videos.',
  },
  {
    site: 'Twitch',
    url: 'https://twitch.tv/nhcarrigan',
    icon: 'fab fa-twitch',
    description:
      'I stream video games and social events to Twitch, on occasion.',
  },
  {
    site: 'Steam',
    url: 'https://steamcommunity.com/id/nhcarrigan',
    icon: 'fab fa-steam',
    description: `Add me on Steam if you'd like to play games together.`,
  },
  {
    site: 'Keybase',
    url: 'https://keybase.io/nhcarrigan',
    icon: 'fab fa-keybase',
    description: 'Identity verification and authentication.',
  },
];

export interface SocialInt {
  site: string;
  url: string;
  icon: string;
  description: string;
}
