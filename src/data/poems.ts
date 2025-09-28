export interface Poem {
  id: string;
  title: string;
  content: string[];
  author?: string;
}
// poem data. All of the poems will be fetched from here.
// All written by Adriaan Dimate.
export const poems: Poem[] = [
  {
    id: "hard-times",
    title: "Hard Times",
    content: [
      "From the rising of the sun to its setting low,",
      "You always wake up early, ready to work",
      "Always on the steering wheel, never letting go",
      "Rain or shine, never a moment to rest.",
      "",
      "May it be a holiday or a working day,",
      "You always stay on the road, far away from home,",
      "Always for the future, a better life to pave,",
      "You never complain, for sacrifice is your way.",
      "",
      "Sick or not, healthy or weak, you still go,",
      "Ready to provide for a future that is always unknown,",
      "May it be for me, for my mom, or for our home,",
      "You always think of us first, always before your own.",
      "",
      "And with it, it's timne for you to rest,",
      "For this day is your day, a day for you to be blessed,",
      "A day to be with us, a special day to say,",
      "For another year has passed, and you're still strong as ever."
    ]
  },
  {
    id: "at-childbirth",
    title: "At Childbirth",
    content: [
      "When I first came, I saw your face,",
      "So full of joy, so full of grace,",
      "You held me close, you held me tight,",
      "And promised to love me with all your might.",
      "",
      "Through all the nights spent awake,",
      "Thinking of every step I would take,",
      "You were always there, by our side,",
      "Serving as the pillar of our family pride.",
      "",
      "And now, as I grow and learn each day,",
      "I still see your love in every way,",
      "From the little things to the big and grand,",
      "You always loved, guided, and helped me stand."
    ]
  },
  {
    id: "being-stubborn",
    title: "An Apology",
    content: [
      "Always stubborn, always strong,",
      "I almost always never listened, wrong or right,",
      "But you never gave up, you stayed so long,",
      "Guiding me through every fight.",
      "",
      "You taught me lessons, big and small,",
      "With patience, love, and endless care,",
      "You stood by me through every fall,",
      "Showing me the way, always there.",
      "",
      "So here's my thanks, for all you do,",
      "For being my rock, my guiding star,",
      "I love you more than words can say,",
      "and I hope to make you proud each day.",
      "",
      "I'm sorry for the times I made you blue,",
      "For being stubborn, not seeing your view,",
      "But know this truth, so deep and true,",
      "I love you, Dad, through and through."
    ]
  },
  {
    id: "poem-from-mom",
    title: "A poem from Mom",
    content: [
      "A father's love is strong and true,",
      "A bond that lasts a lifetime through,",
      "He guides us with a steady hand,",
      "And helps us grow to understand.",
      "",
      "Even if I always am not around,",
      "Always at work, always in Qatar,",
      "You always step up, always hold the ground,",
      "Staying by my  side, never letting go.",
      "",
      "You always make sure we're okay,",
      "Providing for us every single day,",
      "You work so hard, you never rest,",
      "To give us all that we need and best.",
      "",
      "So here's to you, dear husband of mine,",
      "The man I swore to be together in front of God",
      "Thank you for being the best dad and husband,",
      "I love you more than words can say."
    ]
  },
  {
    id: "dads-hands",
    title: "Dad's Hands",
    content: [
      "I remember your hands so strong,",
      "That helped me learn right from wrong,",
      "They built me forts and fixed my toys,",
      "And clapped for all my little joys.",
      "",
      "Those same hands work so hard each day,",
      "To give us love in every way,",
      "And when I'm scared, they hold me tight,",
      "Making everything feel right."
    ]
  },
  {
    id: "happy birthday",
    title: "My Dad, My Friend",
    content: [
      "You're more than just my father dear,",
      "You're someone I hold close and near,",
      "A friend who listens, understands,",
      "And always lends a helping hand.",
      "",
      "We laugh together, sometimes cry,",
      "You answer every 'how' and 'why',",
      "Through all of life's winding bends,",
      "You're my dad, and best of friends."
    ]
  }
];