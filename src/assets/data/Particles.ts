/* eslint-disable @typescript-eslint/naming-convention */

import { IOptions, RecursivePartial } from 'tsparticles';

/* eslint-disable id-blacklist */
export const particles: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: '#3a3240',
    },
  },
  fpsLimit: 30,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: false,
        mode: 'bubble',
      },
      onHover: {
        enable: false,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: '#dfc0fa',
    },
    links: {
      color: '#dfc0fa',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 2000,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'image',
      image: {
        src: '/assets/img/fairy.svg',
        width: 62,
        height: 50,
      },
    },
    size: {
      random: true,
      value: 20,
    },
  },
  detectRetina: true,
};
