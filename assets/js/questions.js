let questions = [
    {
      title: 'gato', // 1 cat
      alternatives: ['dog', 'cat', 'bird', 'fish'],
      correctAnswer: 1
    },
    {
      title: 'ave', // 2 bird
      alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
      correctAnswer: 3
    },
    {
      title: 'rata', // 3 rat
      alternatives: ['cat', 'fish', 'rat', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'mosca', // 4 fly
      alternatives: ['fly', 'puma', 'fish', 'dog'],
      correctAnswer: 0
    },
    {
      title: 'perro', // 5 dog
      alternatives: ['cat', 'fish', 'dog', 'bird'],
      correctAnswer: 2
    },
    {
      title: 'pez', // 6 fish
      alternatives: ['lizard', 'hamster', 'fish', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'lagarto', // 7 lizard
      alternatives: ['mouse', 'lizard', 'puma', 'fly'],
      correctAnswer: 1
    },
    {
      title: 'ratón', // 8 mouse
      alternatives: ['hamster', 'shark', 'dog', 'mouse'],
      correctAnswer: 3
    },
    {
      title: 'tiburón', // 9 shark
      alternatives: ['shark', 'lizard', 'bird', 'fly'],
      correctAnswer: 0
    },
    {
        title: 'conejo', // 10 rabbit
        alternatives: ['rabbit', 'horse', 'elephant', 'giraffe'],
        correctAnswer: 0
    },
    {
        title: 'caballo', // 11 horse
        alternatives: ['lion', 'horse', 'turtle', 'bear'],
        correctAnswer: 1
    },
    {
        title: 'jirafa', // 12 giraffe
        alternatives: ['wolf', 'cow', 'giraffe', 'pig'],
        correctAnswer: 2
    },
    {
        title: 'oso', // 13 bear
        alternatives: ['rabbit', 'bear', 'horse', 'elephant'],
        correctAnswer: 1
    },
    {
        title: 'lobo', // 14 wolf
        alternatives: ['giraffe', 'lion', 'wolf', 'turtle'],
        correctAnswer: 2
    },
    {
        title: 'vaca', // 15 cow
        alternatives: ['cow', 'pig', 'rabbit', 'horse'],
        correctAnswer: 0
    },
    {
        title: 'cerdo', // 16 pig
        alternatives: ['bear', 'elephant', 'cow', 'pig'],
        correctAnswer: 3
    },
    {
        title: 'tortuga', // 17 turtle
        alternatives: ['turtle', 'wolf', 'lion', 'rabbit'],
        correctAnswer: 0
    },
    {
        title: 'zorro', // 18 fox
        alternatives: ['fox', 'duck', 'monkey', 'sheep'],
        correctAnswer: 0
      },
      {
        title: 'pato', // 19 duck
        alternatives: ['chicken', 'monkey', 'duck', 'fox'],
        correctAnswer: 2
      },
      {
        title: 'mono', // 20 monkey
        alternatives: ['sheep', 'monkey', 'duck', 'chicken'],
        correctAnswer: 1
      },
      {
        title: 'oveja', // 21 sheep
        alternatives: ['duck', 'sheep', 'chicken', 'monkey'],
        correctAnswer: 1
      },
      {
        title: 'gallina', // 22 chicken
        alternatives: ['fox', 'sheep', 'monkey', 'chicken'],
        correctAnswer: 3
      },
      {
        title: 'ciervo', // 23 deer
        alternatives: ['deer', 'kangaroo', 'raccoon', 'owl'],
        correctAnswer: 0
      },
      {
        title: 'canguro', // 24 kangaroo
        alternatives: ['deer', 'kangaroo', 'raccoon', 'owl'],
        correctAnswer: 1
      },
      {
        title: 'mapache', // 25 raccoon
        alternatives: ['deer', 'kangaroo', 'raccoon', 'owl'],
        correctAnswer: 2
      },
      {
        title: 'búho', // 26 owl
        alternatives: ['deer', 'kangaroo', 'raccoon', 'owl'],
        correctAnswer: 3
      },
      {
        title: 'ardilla', // 27 squirrel
        alternatives: ['squirrel', 'crocodile', 'snake', 'camel'],
        correctAnswer: 0
      },
      {
        title: 'cocodrilo', // 28 crocodile
        alternatives: ['squirrel', 'crocodile', 'snake', 'camel'],
        correctAnswer: 1
      },
      {
        title: 'serpiente', // 29 snake
        alternatives: ['squirrel', 'crocodile', 'snake', 'camel'],
        correctAnswer: 2
      },
      {
        title: 'camello', // 30 camel
        alternatives: ['squirrel', 'crocodile', 'snake', 'camel'],
        correctAnswer: 3
      },
      {
        title: 'cabra', // 31 goat
        alternatives: ['goat', 'donkey', 'goose', 'turkey'],
        correctAnswer: 0
      },
      {
        title: 'burro', // 32 donkey
        alternatives: ['goat', 'donkey', 'goose', 'turkey'],
        correctAnswer: 1
      },
      {
        title: 'ganso', // 33 goose
        alternatives: ['goat', 'donkey', 'goose', 'turkey'],
        correctAnswer: 2
      },
      {
        title: 'pavo', // 34 turkey
        alternatives: ['goat', 'donkey', 'goose', 'turkey'],
        correctAnswer: 3
      },
      {
        title: 'loro', // 35 parrot
        alternatives: ['parrot', 'dove', 'swan', 'ox'],
        correctAnswer: 0
      },
      {
        title: 'paloma', // 36 dove
        alternatives: ['parrot', 'dove', 'swan', 'ox'],
        correctAnswer: 1
      },
      {
        title: 'cisne', // 37 swan
        alternatives: ['parrot', 'dove', 'swan', 'ox'],
        correctAnswer: 2
      },
      {
        title: 'buey', // 38 ox
        alternatives: ['parrot', 'dove', 'swan', 'ox'],
        correctAnswer: 3
      },
      {
        title: 'cebra', // 39 zebra
        alternatives: ['zebra', 'whale', 'octopus', 'shrimp'],
        correctAnswer: 0
      },
      {
        title: 'ballena', // 40 whale
        alternatives: ['zebra', 'whale', 'octopus', 'shrimp'],
        correctAnswer: 1
      },
      {
        title: 'pulpo', // 41 octopus
        alternatives: ['zebra', 'whale', 'octopus', 'shrimp'],
        correctAnswer: 2
      },
      {
        title: 'camarón', // 42 shrimp
        alternatives: ['zebra', 'whale', 'octopus', 'shrimp'],
        correctAnswer: 3
      },
      {
        title: 'foca', // 43 seal
        alternatives: ['seal', 'walrus', 'squid', 'sloth'],
        correctAnswer: 0
      },
      {
        title: 'morsa', // 44 walrus
        alternatives: ['seal', 'walrus', 'squid', 'sloth'],
        correctAnswer: 1
      },
      {
        title: 'calamar', // 45 squid
        alternatives: ['seal', 'walrus', 'squid', 'sloth'],
        correctAnswer: 2
      },
      {
        title: 'perezoso', // 46 sloth
        alternatives: ['seal', 'walrus', 'squid', 'sloth'],
        correctAnswer: 3
      },
      {
        title: 'alce', // 47 moose
        alternatives: ['moose', 'beaver', 'badger', 'vulture'],
        correctAnswer: 0
      },
      {
        title: 'castor', // 48 beaver
        alternatives: ['moose', 'beaver', 'badger', 'vulture'],
        correctAnswer: 1
      },
      {
        title: 'tejón', // 49 badger
        alternatives: ['moose', 'beaver', 'badger', 'vulture'],
        correctAnswer: 2
      },
      {
        title: 'buitre', // 50 vulture
        alternatives: ['moose', 'beaver', 'badger', 'vulture'],
        correctAnswer: 3
      },
      {
        title: 'abeja', // 51 bee
        alternatives: ['bee', 'worm', 'snail', 'cricket'],
        correctAnswer: 0
      },
      {
        title: 'gusano', // 52 worm
        alternatives: ['bee', 'worm', 'snail', 'cricket'],
        correctAnswer: 1
      },
      {
        title: 'caracol', // 53 snail
        alternatives: ['bee', 'worm', 'snail', 'cricket'],
        correctAnswer: 2
      },
      {
        title: 'grillo', // 54 cricket
        alternatives: ['bee', 'worm', 'snail', 'cricket'],
        correctAnswer: 3
      }
  ];