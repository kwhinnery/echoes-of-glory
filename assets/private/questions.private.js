/*
Str Range: 0 - 7
Dex Range: 0 - 5
Con Range: -1 - 4
Int Range: 0 - 5
Wis Range: 0 - 5
Cha Range: -2 - 6
*/
exports.QUESTIONS = [
  {
    text: `You come to a river. Do you a.) 🏊‍♀️ swim across b.) 🧊 wait until it freezes over c.) 🚣‍♀️ cross in a boat d.) 😉 convince someone to carry you across?`,
    bonuses: {
      a: {
        strength: 2,
        dexterity: 0,
        constitution: 2,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      b: {
        strength: 0,
        dexterity: 0,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
      },
      c: {
        strength: 1,
        dexterity: 0,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 0,
      },
      d: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 2,
        wisdom: 0,
        charisma: 2,
      },
    }
  },

  {
    text: `The door is locked. Do you a.) ✊ knock b.) 🥷 pick the lock c.) 🕵️‍♀️ find a way around d.) 💪 kick it down?`,
    bonuses: {
      a: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 2,
        wisdom: 3,
        charisma: 0,
      },
      b: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 2,
        wisdom: 0,
        charisma: 0,
      },
      c: {
        strength: 0,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 0,
        charisma: 0,
      },
      d: {
        strength: 2,
        dexterity: -1,
        constitution: 1,
        intelligence: -1,
        wisdom: 0,
        charisma: 0,
      },
    }
  },

  {
    text: `Your crush sits down next to you. Do you a.) 👋 smile and wave b.) 😎 seem aloof c.) 😱 freak out and leave d.) 😆 crack a joke?`,
    bonuses: {
      a: {
        strength: 0,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 3,
      },
      b: {
        strength: 0,
        dexterity: 0,
        constitution: 3,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      c: {
        strength: 0,
        dexterity: 5,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: -1,
      },
      d: {
        strength: 0,
        dexterity: 1,
        constitution: 1,
        intelligence: 3,
        wisdom: 0,
        charisma: 3,
      },
    }
  },

  {
    text: `You are challenged to a duel. Do you a.) 😡 immediately accept b.) 👩‍⚖️ verbally deescalate c.) 🚶‍♀️ silently depart d.) 😨 apologize profusely?`,
    bonuses: {
      a: {
        strength: 3,
        dexterity: 1,
        constitution: 1,
        intelligence: 0,
        wisdom: -1,
        charisma: 0,
      },
      b: {
        strength: 0,
        dexterity: 0,
        constitution: -1,
        intelligence: 2,
        wisdom: 2,
        charisma: 0,
      },
      c: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 0,
        wisdom: 2,
        charisma: 0,
      },
      d: {
        strength: -2,
        dexterity: 1,
        constitution: -2,
        intelligence: 0,
        wisdom: 0,
        charisma: -2,
      },
    }
  },

  {
    text: `The test is tomorrow. Do you a.) 📚 cram solo all night b.) 🎮 play Tetris c.) 😴 get some sleep d.) 👯‍♀️ find a study buddy?`,
    bonuses: {
      a: {
        strength: 0,
        dexterity: 0,
        constitution: 3,
        intelligence: 3,
        wisdom: -1,
        charisma: 0,
      },
      b: {
        strength: 0,
        dexterity: 4,
        constitution: 0,
        intelligence: -1,
        wisdom: 0,
        charisma: 0,
      },
      c: {
        strength: 0,
        dexterity: 0,
        constitution: 2,
        intelligence: 0,
        wisdom: 2,
        charisma: 0,
      },
      d: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 2,
        wisdom: 2,
        charisma: 1,
      },
    }
  },

  {
    text: `You play tabletop role-playing game. You are a.) ⚔️ a fighter b.) 🪄 a mage c.) 🥷 a rogue d.) 🚑 a healer.`,
    bonuses: {
      a: {
        strength: 4,
        dexterity: 0,
        constitution: 4,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      b: {
        strength: -2,
        dexterity: 0,
        constitution: 0,
        intelligence: 4,
        wisdom: 0,
        charisma: 0,
      },
      c: {
        strength: 0,
        dexterity: 4,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 2,
      },
      d: {
        strength: 1,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 4,
        charisma: 0,
      },
    }
  },
];

exports.ARCHETYPES = [
  {
    text: `🥇🥈🥉 Sounds like you've got some fortitude and you're not afraid to use it, just like the turn-of-the-century competitors in the Plunge for Distance. Last contested in 1904, you jump into a pool of water aiming for maximum dive depth.`,
    stats: ['dexterity', 'constitution']
  },
  {
    text: `🥇🥈🥉 Seems like you can judge a situation pretty well and react accordingly. Have you considered competitive Dueling Pistol? Last contested in 1906, competitors fired single shot pistols at a dummy dressed in a stylish period frock.`,
    stats: ['dexterity', 'charisma']
  },
  {
    text: `🥇🥈🥉 Well look at you! With your strength, speed, and balance, maybe you should take a look at competitive Club Swinging. Last contested in 1932, you rhythmically swing two bowling pin-shaped clubs, often adorned with ribbons.`,
    stats: ['dexterity', 'strength']
  },
  {
    text: `🥇🥈🥉 Sounds like you might be a fast learner with good motor skills. If you also like the water, we recommend Solo Synchronized Swimming. Last contested in 1992, you need to synchronously swim with... yourself, I guess?`,
    stats: ['dexterity', 'intelligence']
  },
  {
    text: `🥇🥈🥉 With reflexes and foresight like you've got, you might want to try out Jeu de Paume. Last contested in 1908, this sport of French aristocrats is played with wooden raquets and hard cork balls.`,
    stats: ['dexterity', 'wisdom']
  },
  {
    text: `🥇🥈🥉 You seem like someone who could guide a ship to safety, even if it was going super fast. Perhaps motor boating is the sport for you! Last contested in 1908, it was eliminated from the big games because it was not an athletic competition.`,
    stats: ['constitution', 'wisdom']
  },
  {
    text: `🥇🥈🥉 Woah, you've got energy! With your vital force, you may want to go from playground to professional with competitive Tug of War. Last contested in 1920, this schoolyard test of wills with a rope was played between two teams of eight, ending after one team pulled the other six feet.`,
    stats: ['constitution', 'strength']
  },
  {
    text: `🥇🥈🥉 You sound durable in both mind and body-- maybe even durable enough for the challenge of skijoring! A demonstration sport last contested in 1928, this sport requires the athlete to be pulled by an animal on skis (in this case, a horse).`,
    stats: ['constitution', 'intelligence']
  },
  {
    text: `🥇🥈🥉 You've got strength of body and strength of character! Have you considered sumo wrestling? First seen as a demonstration sport in 1964, these matches end after pushing your opponent outside a 15-foot ring.`,
    stats: ['constitution', 'charisma']
  },
  {
    text: `🥇🥈🥉 You sound patient and reasonable. Maybe angling is the sport for you! An unofficial competition from 1900, approximately 600 anglers fished for gold in the river Seine.`,
    stats: ['strength', 'intelligence']
  },
  {
    text: `🥇🥈🥉 Someone as strong and self-discipliend as you might want to try Korfball. Last contested in 1928, Korfball is most frequently played by a mixed team of 4 men and 4 women, and resembles an outdoor fusion of basketball and football (soccer).`,
    stats: ['strength', 'wisdom']
  },
  {
    text: `🥇🥈🥉 You've got fortitude and motivation to spare! If it were the turn of the 20th century, you might try competitive fire fighting. Last contested unofficially in 1900, professional and volunteer competitors were required to extinguish a fire and perform a rescue.`,
    stats: ['strength', 'charisma']
  },
  {
    text: `🥇🥈🥉 You learn quickly and have great empathy. You might enjoy partnering with a bird friend in competitive Pigeon Racing! An unofficial competition from 1900, 7,721 pigeons were released from 48 teams.`,
    stats: ['wisdom', 'intelligence']
  },
  {
    text: `🥇🥈🥉 With your foresight and strength of character, you could be a great fit for the Stone Throw. Last contested in 1906, this competition differed from the modern shotput by allowing any style of throwing.`,
    stats: ['wisdom', 'charisma']
  },
  {
    text: `🥇🥈🥉 You're a charismatic, intelligent creator who should try your hand at the Arts Competition. Discontinued in 1954, artists competed with architecture, literature, music, painting, and sculpture inspired by sport.`,
    stats: ['intelligence', 'charisma']
  },
];
