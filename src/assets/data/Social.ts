export const Social: SocialInt[] = [
  {
    site: 'Resume',
    url: '../../assets/files/Resume.pdf',
    icon: 'fas fa-file',
  },
  {
    site: 'freeCodeCamp Forum',
    url: 'https://forum.freecodecamp.org/u/nhcarrigan',
    icon: 'fab fa-free-code-camp',
  },
  {
    site: 'GitHub',
    url: 'https://github.com/nhcarrigan',
    icon: 'fab fa-github-square',
  },
  {
    site: 'Facebook',
    url: 'https://www.facebook.com/nhcarrigan',
    icon: 'fab fa-facebook-square',
  },
  {
    site: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nhcarrigan',
    icon: 'fab fa-linkedin',
  },
  {
    site: 'Twitter',
    url: 'https://www.twitter.com/nhcarrigan',
    icon: 'fab fa-twitter',
  },
  {
    site: 'Steam',
    url: 'https://steamcommunity.com/id/nhcarrigan',
    icon: 'fab fa-steam',
  },
  {
    site: 'Keybase',
    url: 'https://keybase.io/nhcarrigan',
    icon: 'fab fa-keybase'
  }
];

export interface SocialInt {
  site: string;
  url: string;
  icon: string;
}
