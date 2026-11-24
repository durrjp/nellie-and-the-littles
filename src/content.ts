// Site copy, based on the Shopify storefront export in src/assets/content/.
// Edit text here rather than in the page components.

export const TAGLINE = 'Made to chew, meant to love.'

export const CONTACT = {
  email: 'nellieandthelittles@gmail.com',
  location: 'Nashville, TN',
  instagram: 'nellieandthelittles',
  hours: 'Mon-Fri, 9 AM - 4 PM CST',
}

export const PRODUCT = {
  name: 'Nellie the Elephant™ Teether',
  intro: [
    'Meet Nellie the Elephant — a sweet little companion designed for tiny hands and teething gums.',
    'Nellie’s adorable elephant shape features a variety of raised textures and details for little ones to explore while they chew, grasp, and play. Made from silicone with an easy-to-hold design, Nellie is perfectly sized for little hands and is ready to tag along through all those teething moments — at home or on the go.',
  ],
  features: [
    'Soft, chewable silicone',
    'Multiple textures for little gums to explore',
    'Easy for small hands to grasp and hold',
    'One-piece design',
    'BPA-free',
    'Designed for ages 3 months+',
    'Adorable elephant design that’s just as cute as it is functional',
  ],
  signoff: 'From my heart to your home. I can’t wait for your little to have a Nellie.',
  // Collapsible "Product Details & Specifications" panel on the Meet Nellie page
  details: {
    intro:
      'Meet Nellie the Elephant — a sweet little companion designed for tiny hands, curious mouths, and everyday comfort.',
    specs: [
      ['Material', 'Silicone'],
      ['Dimensions', 'Approximately 4.0" × 4.0" × 0.71"'],
      ['Product weight', 'Approximately 2.7 oz (76.6 g)'],
      ['Retail packaging dimensions', '5.62" × 4.59" × 0.88"'],
      ['Retail packaged weight', 'Approximately 4.08 oz (115.6 g)'],
      ['Design', 'Easy-to-grasp elephant shape'],
      ['Construction', 'Designed without openings that trap water'],
    ] as [string, string][],
    care: 'Wash before first use. Follow the product’s validated cleaning instructions. Always inspect before use and discontinue use if damaged.',
    safety: 'Nellie has undergone third-party product safety testing.',
  },
  safety:
    'Nellie the Elephant is intended for use as a teething toy. Always inspect before each use and discontinue use at the first sign of damage or weakness.',
}

export const FOUNDER = {
  name: 'Jessica Adams, FNP-C',
  role: 'Creator of Nellie and the Littles',
  intro:
    'Hi, I’m Jessica — a Family Nurse Practitioner with a passion for caring for others. I created Nellie with the hope of bringing a little extra comfort and joy to babies and their families, while creating something that feels like more than just a teether — a sweet little companion to love.',
  // Short line used on the home page
  highlight:
    'I designed Nellie with intention: to be more than a teether — to be a tiny companion for little wild hearts.',
  // Jessica's letter on the About page
  letter: [
    'When I first dreamed up Nellie, I knew I wanted to create something more than just another baby teether. I envisioned a sweet little companion that could bring comfort, familiarity, and a sense of security to babies as they grow—something that felt a little more like a first lovey.',
    'With my background in healthcare, I’ve always believed that the smallest details can make the biggest difference. I wanted Nellie to combine thoughtful design, quality materials, and safety with something equally important: an emotional connection.',
    'From her sweet elephant features to the textures designed for tiny hands and teething gums, every detail was created with love and intention. My hope is that Nellie becomes more than just a teether, but a familiar little friend your baby reaches for during life’s everyday moments.',
    'What started as a simple idea has grown into something incredibly special to me, and I’m so excited to share Nellie with you and your little ones.',
    'Thank you for supporting my small business and allowing Nellie to become a little part of your family’s story.',
  ],
}

// Each answer is a list of blocks: a string is a paragraph, an array of
// [label, value] pairs is a spec list.
export type FaqBlock = string | [string, string][]

export const FAQS: { question: string; answer: FaqBlock[] }[] = [
  {
    question: 'What is Nellie made of?',
    answer: [
      'Nellie is thoughtfully crafted from 100% food-grade silicone, designed to be gentle on little gums and easy for tiny hands to hold.',
      'Nellie is also BPA-free, PVC-free, and phthalate-free.',
    ],
  },
  {
    question: 'Is Nellie safe for my baby?',
    answer: [
      'Your little one’s safety is our top priority!',
      'Nellie has undergone independent third-party laboratory testing and passed applicable CPSIA and ASTM F963 safety tests, including evaluations for mechanical safety, lead, heavy metals, and phthalates.',
      'Nellie’s manufacturer has also documented passing results under FDA 21 CFR 177.2600, a standard for rubber materials intended for repeated food contact.',
      'We maintain a Children’s Product Certificate (CPC) documenting compliance with applicable children’s product safety requirements.',
      'As with any baby product, always use Nellie under adult supervision. Inspect before each use and discontinue use immediately if any signs of damage appear.',
    ],
  },
  {
    question: 'What age is Nellie recommended for?',
    answer: [
      'Nellie is designed for babies 3 months and older, making her a sweet little companion throughout the teething stages.',
      'Every baby develops at their own pace, and adult supervision is always recommended.',
    ],
  },
  {
    question: 'How do I clean Nellie?',
    answer: [
      'Keeping Nellie clean is simple!',
      'Wash with mild soap and warm water before first use and after each use. Rinse thoroughly and allow to air dry.',
      'Nellie is also dishwasher safe on the top rack only.',
    ],
  },
  {
    question: 'Can Nellie be chilled or frozen?',
    answer: [
      'Yes! Nellie is freezer safe, so she can be chilled in the refrigerator or freezer for a little extra teething comfort.',
      'After taking Nellie out of the freezer, let her sit for a few minutes before giving her to your little one, as extremely cold, hard surfaces may be uncomfortable for sensitive gums.',
    ],
  },
  {
    question: 'What are Nellie’s product specifications?',
    answer: [
      'Nellie was thoughtfully designed to be lightweight and easy for little hands to grasp.',
      [
        ['Material', '100% food-grade silicone'],
        ['Dimensions', 'Approximately 4.0 × 4.0 × 0.71 inches'],
        ['Weight', 'Approximately 2.7 oz (76.6 g)'],
        ['Recommended age', '3 months and up'],
        ['Design', 'Elephant-shaped silicone teether'],
        ['Packaging', 'Individually packaged in a retail box'],
      ],
    ],
  },
  {
    question: 'Where do you ship?',
    answer: [
      'We currently ship throughout the United States.',
      'Shipping options and estimated delivery costs are displayed at checkout.',
    ],
  },
  {
    question: 'How long will my order take to arrive?',
    answer: [
      'We work hard to get Nellie on her way to you as quickly as possible!',
      'Once your order ships, you’ll receive a confirmation email with tracking information so you can follow Nellie’s journey to your home.',
      'Delivery times vary depending on your location and the shipping service selected.',
    ],
  },
  {
    question: 'Do you accept returns?',
    answer: [
      'We want you to love your Nellie!',
      'If you’re not completely satisfied with your purchase, please contact us within 30 days of delivery.',
      'For hygiene and safety reasons, returns must be unused and in their original packaging, except where otherwise required by law.',
      'If your Nellie arrives damaged or defective, please contact us so we can help make things right.',
    ],
  },
  {
    question: 'Can I purchase Nellie as a gift?',
    answer: [
      'Absolutely! Nellie makes a sweet and thoughtful gift for baby showers, new arrivals, and little ones beginning their teething journey.',
      'Each Nellie arrives in her own retail packaging, ready to bring a little extra comfort and joy.',
    ],
  },
  {
    question: 'How can I contact Nellie & the Littles?',
    answer: [
      'We’d love to hear from you!',
      'Whether you have a question about Nellie, need assistance with an order, or simply want to share your little one’s experience, please visit our Contact page.',
      'You can also follow along and tag us on Instagram @nellieandthelittles.',
      'We love seeing Nellie become part of your little one’s everyday adventures!',
    ],
  },
]

// Closing note at the bottom of the FAQ page
export const FAQ_SIGNOFF = {
  lines: ['Made to chew, meant to love.', 'From my heart, to your home.'],
  signature: 'XO, Jessica',
}
