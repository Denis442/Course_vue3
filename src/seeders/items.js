import Wizard from "../assets/img/wizard.png"
import Archer from "../assets/img/archer.png"
import Goblin from "../assets/img/goblin.png"
import barbarian from "../assets/img/barbarian.png"
import giant from "../assets/img/giant.png"
export default [
    {
        id: 1,
        alias: 'archer',
        title: 'Archer',
        descr: 'The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.',
        img: Archer,
        link: '/archer',
        lvl: 4,
        info: [{
            title: 'training',
            value: '25s'
          },
          {
            title: 'speed',
            value: '24'
          },
          {
            title: 'cost',
            value: '300'
          }
        ]
    },
    {
        id: 2,
        alias: 'wizard',
        title: 'Wizard',
        descr: 'The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!',
        img: Wizard,
        lvl: 5,
        link: '/wizard',
        info: [{
            title: 'training',
            value: '5m'
        },
        {
            title: 'speed',
            value: '16'
        },
        {
            title: 'cost',
            value: '3800'
        }
        ]
    },
    {
        id: 3,
        alias: 'goblin',
        title: 'Goblin',
        descr: 'These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.',
        img: Goblin,
        lvl: 5,
        link: '/goblin',
        info: [{
            title: 'training',
            value: '30s'
          },
          {
            title: 'speed',
            value: '32'
          },
          {
            title: 'cost',
            value: '100'
          }
        ]
    },
    {
        id: 4,
        alias: 'barbarian',
        title: 'The Barbarian',
        descr: 'The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.',
        img: barbarian ,
        lvl: 2,
        link: '/barbarian',
        info: [{
            title: 'training',
            value: '20s'
          },
          {
            title: 'speed',
            value: '16'
          },
          {
            title: 'cost',
            value: '150'
          }
        ]
      },
      {
        id: 5,
        alias: 'giant',
        title: 'The Giant',
        descr: 'Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you will see their fury unleashed!',
        img: giant,
        lvl: 4,
        link: '/giant',
        info: [{
            title: 'training',
            value: '2m'
          },
          {
            title: 'speed',
            value: '12'
          },
          {
            title: 'cost',
            value: '2250'
          }
        ]
      },
]