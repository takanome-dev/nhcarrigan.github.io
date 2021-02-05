export interface SponsorInt {
  name: string;
  date: string;
  link: string;
}

export interface SponsorsDataInt {
  platinum: SponsorInt[];
  gold: SponsorInt[];
  silver: SponsorInt[];
  bronze: SponsorInt[];
}

export const sponsorsList = {
  platinum: [
    {
      name: 'None yet',
      date: 'Be the first!',
      link:
        'https://github.com/sponsors/nhcarrigan/sponsorships?sponsor=nhcarrigan&tier_id=47504',
    },
  ],
  gold: [
    {
      name: 'None yet',
      date: 'Be the first!',
      link:
        'https://github.com/sponsors/nhcarrigan/sponsorships?sponsor=nhcarrigan&tier_id=47503',
    },
  ],
  silver: [
    {
      name: 'None yet',
      date: 'Be the first!',
      link:
        'https://github.com/sponsors/nhcarrigan/sponsorships?sponsor=nhcarrigan&tier_id=47502',
    },
  ],
  bronze: [
    {
      name: 'Eddie Jaoude',
      date: '5 February 2021',
      link:
        'https://github.com/eddiejaoude',
    },
  ],
};
