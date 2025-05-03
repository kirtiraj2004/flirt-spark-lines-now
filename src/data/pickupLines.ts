export interface PickupLine {
  id: string;
  text: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  locked: boolean;
  description: string;
}

export const categories: Category[] = [
  {
    id: "funny",
    name: "Funny",
    emoji: "😂",
    color: "bg-funny",
    locked: false,
    description: "Make them laugh with these hilarious lines"
  },
  {
    id: "hot",
    name: "Hot",
    emoji: "🔥",
    color: "bg-hot",
    locked: true,
    description: "Spicy lines to turn up the heat"
  },
  {
    id: "cute",
    name: "Cute",
    emoji: "❤️",
    color: "bg-cute",
    locked: false,
    description: "Sweet lines that melt hearts"
  },
  {
    id: "savage",
    name: "Savage",
    emoji: "🗡️",
    color: "bg-savage",
    locked: false,
    description: "Bold lines for the fearless flirter"
  },
  {
    id: "cheesy",
    name: "Cheesy",
    emoji: "🧀",
    color: "bg-cheesy",
    locked: false,
    description: "So cheesy they might just work"
  },
  {
    id: "hookup",
    name: "Hookup",
    emoji: "😏",
    color: "bg-hookup",
    locked: true,
    description: "Direct lines for those special moments"
  },
  {
    id: "love",
    name: "Love",
    emoji: "💌",
    color: "bg-love",
    locked: false,
    description: "Romantic lines for deeper connections"
  },
  {
    id: "instagram",
    name: "Instagram",
    emoji: "🎬",
    color: "bg-instagram",
    locked: false,
    description: "Perfect captions for your posts"
  },
  {
    id: "genz",
    name: "Gen-Z",
    emoji: "🤙",
    color: "bg-genz",
    locked: false,
    description: "Internet meme-inspired pickup lines"
  }
];

export const pickupLines: PickupLine[] = [
  // Funny Lines
  { id: "funny-1", text: "Are you a parking ticket? Because you've got FINE written all over you.", category: "funny" },
  { id: "funny-2", text: "If you were a vegetable, you'd be a cute-cumber!", category: "funny" },
  { id: "funny-3", text: "Are you made of copper and tellurium? Because you're Cu-Te.", category: "funny" },
  { id: "funny-4", text: "Do you have a name, or can I call you mine?", category: "funny" },
  { id: "funny-5", text: "I'm not a photographer, but I can picture us together.", category: "funny" },
  { id: "funny-6", text: "Are you a bank loan? Because you have my interest.", category: "funny" },
  { id: "funny-7", text: "Is your name Google? Because you have everything I've been searching for.", category: "funny" },
  { id: "funny-8", text: "Do you like Star Wars? Because Yoda one for me!", category: "funny" },
  { id: "funny-9", text: "If you were a fruit, you'd be a fine-apple.", category: "funny" },
  { id: "funny-10", text: "Are you a time traveler? Because I see you in my future.", category: "funny" },
  { id: "funny-11", text: "Are you a parking ticket? Because you've got FINE written all over you.", category: "funny" },
  { id: "funny-12", text: "Did it hurt when you fell from heaven? Because you must be an angel.", category: "funny" },
  { id: "funny-13", text: "Is your name WiFi? Because I'm feeling a connection.", category: "funny" },
  { id: "funny-14", text: "Are you from Tennessee? Because you're the only 10 I see!", category: "funny" },
  { id: "funny-15", text: "Do you believe in love at first swipe, or should I refresh your screen?", category: "funny" },
  { id: "funny-16", text: "I was wondering if you had an extra heart, because mine was just stolen.", category: "funny" },
  { id: "funny-17", text: "Are you a campfire? Because you're hot and I want s'more.", category: "funny" },
  { id: "funny-18", text: "Do you have a Band-Aid? Because I just scraped my knee falling for you.", category: "funny" },
  { id: "funny-19", text: "If you were a burger at McDonald's, you'd be the McGorgeous.", category: "funny" },
  { id: "funny-20", text: "Is your name Chapstick? Because you're da balm!", category: "funny" },

  // Hot Lines
  { id: "hot-1", text: "Is it hot in here or is it just you?", category: "hot" },
  { id: "hot-2", text: "You're so hot you make the sun jealous.", category: "hot" },
  { id: "hot-3", text: "I'm not usually into weather forecasts, but you can expect a few inches tonight.", category: "hot" },
  { id: "hot-4", text: "I should call the fire department, because you're smoking hot.", category: "hot" },
  { id: "hot-5", text: "Is your name summer? Because you're hot as hell.", category: "hot" },
  { id: "hot-6", text: "My doctor says I'm lacking vitamin U.", category: "hot" },
  { id: "hot-7", text: "Are you a campfire? Because you're hot and I want s'more.", category: "hot" },
  { id: "hot-8", text: "I'm trying to decide if you're hotter with clothes on or off.", category: "hot" },
  { id: "hot-9", text: "You must be a broom, because you just swept me off my feet.", category: "hot" },
  { id: "hot-10", text: "Is your name winter? Because you'll be coming soon.", category: "hot" },
  { id: "hot-11", text: "Are you a magician? Because whenever I look at you, everyone else disappears.", category: "hot" },
  { id: "hot-12", text: "Do you know what my shirt is made of? Boyfriend/girlfriend material.", category: "hot" },
  { id: "hot-13", text: "I seem to have lost my phone number... Can I have yours?", category: "hot" },
  { id: "hot-14", text: "If I could rearrange the alphabet, I'd put U and I together.", category: "hot" },
  { id: "hot-15", text: "Is this seat taken? Or should I sit on your face?", category: "hot" },
  { id: "hot-16", text: "You're like fine wine - the more I see you, the better you look.", category: "hot" },
  { id: "hot-17", text: "I'm not a weatherman, but you can expect several inches tonight.", category: "hot" },
  { id: "hot-18", text: "Is your name Ariel? Because we mermaid for each other.", category: "hot" },
  { id: "hot-19", text: "Are you a loan? Because you have my interest.", category: "hot" },
  { id: "hot-20", text: "Do you believe in fate? Or should I walk by again?", category: "hot" },

  // Cute Lines
  { id: "cute-1", text: "If kisses were snowflakes, I'd send you a blizzard.", category: "cute" },
  { id: "cute-2", text: "You're the reason why even the stars shine at night.", category: "cute" },
  { id: "cute-3", text: "If I were a cat, I'd spend all nine lives with you.", category: "cute" },
  { id: "cute-4", text: "You must be a magician, because whenever I look at you, everyone else disappears.", category: "cute" },
  { id: "cute-5", text: "Are you a dictionary? Because you add meaning to my life.", category: "cute" },
  { id: "cute-6", text: "I think there's something wrong with my eyes—I can't take them off you.", category: "cute" },
  { id: "cute-7", text: "If you were a flower, you'd be a daisy—beautiful and bright.", category: "cute" },
  { id: "cute-8", text: "Is your name Ariel? Because we mermaid for each other.", category: "cute" },
  { id: "cute-9", text: "You know what's on the menu? Me-n-u.", category: "cute" },
  { id: "cute-10", text: "If you were a vegetable, you'd be a sweet potato.", category: "cute" },
  { id: "cute-11", text: "Are you a camera? Because every time I look at you, I smile.", category: "cute" },
  { id: "cute-12", text: "Do you have a map? Because I just got lost in your eyes.", category: "cute" },
  { id: "cute-13", text: "Is your name Google? Because you've got everything I'm searching for.", category: "cute" },
  { id: "cute-14", text: "If you were a star, you'd be the brightest in the sky.", category: "cute" },
  { id: "cute-15", text: "Are you made of grapes? Because you're fine as wine.", category: "cute" },
  { id: "cute-16", text: "Is your name Wifi? Because I'm really feeling a connection.", category: "cute" },
  { id: "cute-17", text: "Do you have a pencil? Because I want to erase your past and write our future.", category: "cute" },
  { id: "cute-18", text: "I must be a snowflake, because I've fallen for you.", category: "cute" },
  { id: "cute-19", text: "If you were a song, you'd be the best track on the album.", category: "cute" },
  { id: "cute-20", text: "Is your dad an artist? Because you're a masterpiece.", category: "cute" },

  // Savage Lines
  { id: "savage-1", text: "Are you a tower? Because Eiffel for you.", category: "savage" },
  { id: "savage-2", text: "I'm not saying you're hot, but you might be the reason for global warming.", category: "savage" },
  { id: "savage-3", text: "Is your name Wi-Fi? Because I'm feeling a strong connection.", category: "savage" },
  { id: "savage-4", text: "I'm new in town. Could you give me directions to your apartment?", category: "savage" },
  { id: "savage-5", text: "They say nothing lasts forever. Want to be my nothing?", category: "savage" },
  { id: "savage-6", text: "I'd say God bless you, but it looks like he already did.", category: "savage" },
  { id: "savage-7", text: "If I could rearrange the alphabet, I'd put 'U' and 'I' together.", category: "savage" },
  { id: "savage-8", text: "Are you an interior decorator? Because when I saw you, the entire room became beautiful.", category: "savage" },
  { id: "savage-9", text: "There must be something wrong with my eyes—I can't take them off you.", category: "savage" },
  { id: "savage-10", text: "If beauty were time, you'd be an eternity.", category: "savage" },
  { id: "savage-11", text: "Let me tie your shoes, because I don't want you falling for anyone else.", category: "savage" },
  { id: "savage-12", text: "Are you a bank loan? Because you have my interest.", category: "savage" },
  { id: "savage-13", text: "Do you have a name or can I call you mine?", category: "savage" },
  { id: "savage-14", text: "I'm not photographer, but I can picture us together.", category: "savage" },
  { id: "savage-15", text: "Are you from Tennessee? Because you're the only ten I see.", category: "savage" },
  { id: "savage-16", text: "I was blinded by your beauty; I'm going to need your name and phone number for insurance purposes.", category: "savage" },
  { id: "savage-17", text: "If you were a fruit, you'd be a fine-apple.", category: "savage" },
  { id: "savage-18", text: "Are you a parking ticket? Because you've got 'fine' written all over you.", category: "savage" },
  { id: "savage-19", text: "Do you believe in love at first sight, or should I walk by again?", category: "savage" },
  { id: "savage-20", text: "I'm not a mathematician, but I'm pretty good with numbers. Tell you what, give me yours and watch what I can do with it.", category: "savage" },

  // Cheesy Lines
  { id: "cheesy-1", text: "Do you have a map? I just got lost in your eyes.", category: "cheesy" },
  { id: "cheesy-2", text: "Are you a magician? Because whenever I look at you, everyone else disappears.", category: "cheesy" },
  { id: "cheesy-3", text: "Do you believe in love at first sight, or should I walk by again?", category: "cheesy" },
  { id: "cheesy-4", text: "If you were a triangle, you'd be acute one.", category: "cheesy" },
  { id: "cheesy-5", text: "Are you French? Because Eiffel for you.", category: "cheesy" },
  { id: "cheesy-6", text: "Do you have a Band-Aid? Because I just scraped my knee falling for you.", category: "cheesy" },
  { id: "cheesy-7", text: "Is your dad a baker? Because you're a cutie pie.", category: "cheesy" },
  { id: "cheesy-8", text: "Are you a camera? Because every time I look at you, I smile.", category: "cheesy" },
  { id: "cheesy-9", text: "Do you have a sunburn, or are you always this hot?", category: "cheesy" },
  { id: "cheesy-10", text: "Is your name Ariel? Because we mermaid for each other.", category: "cheesy" },
  { id: "cheesy-11", text: "If you were a vegetable, you'd be a cute-cumber!", category: "cheesy" },
  { id: "cheesy-12", text: "Are you a bank loan? Because you have my interest.", category: "cheesy" },
  { id: "cheesy-13", text: "Is your name Google? Because you've got everything I'm searching for.", category: "cheesy" },
  { id: "cheesy-14", text: "I hope you know CPR, because you take my breath away.", category: "cheesy" },
  { id: "cheesy-15", text: "Are you a campfire? Because you're hot and I want s'more.", category: "cheesy" },
  { id: "cheesy-16", text: "If you were a fruit, you'd be a fine-apple.", category: "cheesy" },
  { id: "cheesy-17", text: "I'm not a photographer, but I can picture us together.", category: "cheesy" },
  { id: "cheesy-18", text: "My doctor says I'm lacking vitamin U.", category: "cheesy" },
  { id: "cheesy-19", text: "If I could rearrange the alphabet, I'd put 'U' and 'I' together.", category: "cheesy" },
  { id: "cheesy-20", text: "Is there an airport nearby, or is that just my heart taking off?", category: "cheesy" },

  // Hookup Lines
  { id: "hookup-1", text: "Let's skip the small talk and go straight to your place.", category: "hookup" },
  { id: "hookup-2", text: "Are you a light switch? Because you turn me on.", category: "hookup" },
  { id: "hookup-3", text: "Do you have a mirror in your pocket? Because I can see myself in your pants.", category: "hookup" },
  { id: "hookup-4", text: "Is it just me, or is there some chemistry between us?", category: "hookup" },
  { id: "hookup-5", text: "I've been wondering, do your lips taste as good as they look?", category: "hookup" },
  { id: "hookup-6", text: "Is that a mirror in your pocket? Because I can see myself in your pants.", category: "hookup" },
  { id: "hookup-7", text: "I'm not a weatherman, but you can expect a few inches tonight.", category: "hookup" },
  { id: "hookup-8", text: "Wanna play house? You can be the door and I'll slam you all night.", category: "hookup" },
  { id: "hookup-9", text: "Let's commit the perfect crime: I'll steal your heart and you'll steal mine.", category: "hookup" },
  { id: "hookup-10", text: "My lips are like skittles. Wanna taste the rainbow?", category: "hookup" },
  { id: "hookup-11", text: "Are your parents bakers? Because you're a cutie pie.", category: "hookup" },
  { id: "hookup-12", text: "Is your body from McDonald's? Because I'm lovin' it.", category: "hookup" },
  { id: "hookup-13", text: "I'm not feeling myself today. Can I feel you instead?", category: "hookup" },
  { id: "hookup-14", text: "Your lips look lonely. Would they like to meet mine?", category: "hookup" },
  { id: "hookup-15", text: "Do you like sales? Clothes are 100% off at my place.", category: "hookup" },
  { id: "hookup-16", text: "Let's play house - you be the door and I'll slam you all night.", category: "hookup" },
  { id: "hookup-17", text: "Want to play a game? Rock, paper, me on top of you?", category: "hookup" },
  { id: "hookup-18", text: "You must be tired because you've been running through my mind all night.", category: "hookup" },
  { id: "hookup-19", text: "If I told you I worked for UPS, would you let me handle your package?", category: "hookup" },
  { id: "hookup-20", text: "Your body is 70% water and I'm thirsty.", category: "hookup" },

  // Love Lines
  { id: "love-1", text: "If I had a star for every time you brightened my day, I'd have a galaxy in my hand.", category: "love" },
  { id: "love-2", text: "If loving you was a job, I'd be the most dedicated worker of all time.", category: "love" },
  { id: "love-3", text: "I never believed in love at first sight until I saw you.", category: "love" },
  { id: "love-4", text: "I fell in love the way you fall asleep: slowly, and then all at once.", category: "love" },
  { id: "love-5", text: "In a sea of people, my eyes will always search for you.", category: "love" },
  { id: "love-6", text: "I've fallen for you like autumn leaves falling from trees.", category: "love" },
  { id: "love-7", text: "If I know what love is, it is because of you.", category: "love" },
  { id: "love-8", text: "Every time I see you, I fall in love all over again.", category: "love" },
  { id: "love-9", text: "You're the first thing I think about when I wake up and the last thing before I fall asleep.", category: "love" },
  { id: "love-10", text: "You're not just a star in my sky, you're my whole universe.", category: "love" },
  { id: "love-11", text: "If you were a movie, I'd watch you over and over again.", category: "love" },
  { id: "love-12", text: "Your smile is the sunrise that brightens my day.", category: "love" },
  { id: "love-13", text: "I could walk a thousand miles just to be with you.", category: "love" },
  { id: "love-14", text: "Your love is the only infinity I believe in.", category: "love" },
  { id: "love-15", text: "When I look into your eyes, I see the mirror of my soul.", category: "love" },
  { id: "love-16", text: "Meeting you was fate, becoming your friend was a choice, but falling in love with you was beyond my control.", category: "love" },
  { id: "love-17", text: "Every beat of my heart belongs to you.", category: "love" },
  { id: "love-18", text: "I don't need paradise because I found you.", category: "love" },
  { id: "love-19", text: "If my heart was a canvas, you'd be the only colors I see.", category: "love" },
  { id: "love-20", text: "In all the world, there is no heart for me like yours.", category: "love" },

  // Instagram Lines
  { id: "instagram-1", text: "Living my best life, one smile at a time. ✨", category: "instagram" },
  { id: "instagram-2", text: "Not all who wander are lost, but I did find my way to your profile. 🧭", category: "instagram" },
  { id: "instagram-3", text: "Catching flights, not feelings. Unless it's for you. ✈️", category: "instagram" },
  { id: "instagram-4", text: "Less perfection, more authenticity. Just like our connection. 💫", category: "instagram" },
  { id: "instagram-5", text: "Sunset chaser, dream catcher, and now, your heart's keeper. 🌅", category: "instagram" },
  { id: "instagram-6", text: "Sometimes you gotta look back at your past and smile at how far you've come. 🚶‍♀️", category: "instagram" },
  { id: "instagram-7", text: "Be a flamingo in a flock of pigeons. 🦩", category: "instagram" },
  { id: "instagram-8", text: "Life isn't perfect, but your outfit can be. 👗", category: "instagram" },
  { id: "instagram-9", text: "Living on caffeine and compliments. ☕", category: "instagram" },
  { id: "instagram-10", text: "Too glam to give a damn. But for you, I might. ✨", category: "instagram" },
  { id: "instagram-11", text: "Making memories one day at a time. 📸", category: "instagram" },
  { id: "instagram-12", text: "Adventure awaits, but so does your message. 🌄", category: "instagram" },
  { id: "instagram-13", text: "Lost in the right direction. Found by the right person? 🗺️", category: "instagram" },
  { id: "instagram-14", text: "Wild heart, can't be tamed. Unless you try. 🌟", category: "instagram" },
  { id: "instagram-15", text: "Ocean breeze, salty air, sun-kissed hair. Just missing you there. 🏝️", category: "instagram" },
  { id: "instagram-16", text: "Chasing dreams and you. Catch me if you can. 🏃‍♀️", category: "instagram" },
  { id: "instagram-17", text: "Coffee in one hand, confidence in the other. 💪", category: "instagram" },
  { id: "instagram-18", text: "Good vibes only. Better vibes when you're around. ✌️", category: "instagram" },
  { id: "instagram-19", text: "Smile more, worry less. Date me, stress less. 😊", category: "instagram" },
  { id: "instagram-20", text: "Creating my own sunshine. Want to share the rays? ☀️", category: "instagram" },

  // Gen-Z Lines
  { id: "genz-1", text: "Are you a Skibidi toilet? Because you got my head spinning.", category: "genz" },
  { id: "genz-2", text: "Tralalelo tralala... is the sound my heart makes when I see you.", category: "genz" },
  { id: "genz-3", text: "Roses are mid, violets are cap, swipe right on me, no cap.", category: "genz" },
  { id: "genz-4", text: "You must be the viral audio everyone's using, because I can't get you out of my head.", category: "genz" },
  { id: "genz-5", text: "Are you a TikTok? Because you got me scrolling for hours.", category: "genz" },
  { id: "genz-6", text: "I'd slide into your DMs like 'It's giving... chemistry'", category: "genz" },
  { id: "genz-7", text: "Not to be basic, but you're giving main character energy.", category: "genz" },
  { id: "genz-8", text: "I know this is rizz-less behavior, but you're low-key fine.", category: "genz" },
  { id: "genz-9", text: "Let's be like a trending sound - inseparable for weeks.", category: "genz" },
  { id: "genz-10", text: "You must be the GYATT in GYATT dayum!", category: "genz" },
  { id: "genz-11", text: "Is your name Sigma? Because you're giving top-tier energy.", category: "genz" },
  { id: "genz-12", text: "Let me cook for you fr fr, no cap, bussin' dinner.", category: "genz" },
  { id: "genz-13", text: "Are you a Skibidi toilet camera man? Because you just captured my heart.", category: "genz" },
  { id: "genz-14", text: "You must be a skill issue because I keep falling for you.", category: "genz" },
  { id: "genz-15", text: "POV: I just asked you out and you said yes.", category: "genz" },
  { id: "genz-16", text: "Not me catching feelings faster than a trending sound.", category: "genz" },
  { id: "genz-17", text: "OK but the way you exist? Literally so slay.", category: "genz" },
  { id: "genz-18", text: "This might be cheugy, but would you be the Griddy to my Rizz?", category: "genz" },
  { id: "genz-19", text: "You're giving 'material gworl' energy and I'm here for it.", category: "genz" },
  { id: "genz-20", text: "Let's be like the Ohio meme - everywhere together.", category: "genz" }
];
