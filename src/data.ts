export type Stat =
	| 'heart'
	| 'intelligence'
	| 'strength'
	| 'agility'
	| 'charisma';

export type Skill =
	| 'stealth'
	| 'driving'
	| 'firearms'
	| 'martial arts'
	| 'persuasion'
	| 'seduction'
	| 'security'
	| 'street smarts'
	| 'writing'
	| 'business'
	| 'disguise'
	| 'computers'
	| 'psychology'
	| 'science'
	| 'teaching'
	| 'tailoring'
	| 'law'
	| 'art'
	| 'music'
	| 'first aid'
	| 'dodge'
	| 'street smarts'
	| 'religion';

export type Answer = {
	text: string;
	result: string;
	stats?: { [key in Stat]?: number };
	skills?: { [key in Skill]?: number };
	extra?: string[];
};

export type Question = {
	text: string;
	answers: Answer[];
};

export const questions: Question[] = [
	// A - American torture of prisoners in Iraq was revealed on national TV.
	// +2 Agility, June 30th
	// B - Ronald Reagan died.
	// +2 Strength, September 5th
	// C - Firefox was released, challenging Microsoft's dominance over web browsers.
	// +2 Intelligence, November 9th
	// D - Kenyan democracy activist Wangari Maathai received the Nobel Peace Prize.
	// +2 Charisma, October 8th
	// E - Massachusetts became the first State to legalize same-sex marriage.
	// +2 Heart, May 17th
	{
		text: 'In the moments after I was born in 2004...',
		answers: [
			{
				text: 'American torture of prisoners in Iraq was revealed on national TV.',
				result: '+2 Agility, June 30th',
				stats: { agility: 2 },
				// extra: ["June 30th"],
			},
			{
				text: 'Ronald Reagan died.',
				result: '+2 Strength, September 5th',
				stats: { strength: 2 },
				// extra: ["September 5th"],
			},
			{
				text: "Firefox was released, challenging Microsoft's dominance over web browsers.",
				result: '+2 Intelligence, November 9th',
				stats: { intelligence: 2 },
				// extra: ["November 9th"],
			},
			{
				text: 'Kenyan democracy activist Wangari Maathai received the Nobel Peace Prize.',
				result: '+2 Charisma, October 8th',
				stats: { charisma: 2 },
				// extra: ["October 8th"],
			},
			{
				text: 'Massachusetts became the first State to legalize same-sex marriage.',
				result: '+2 Heart, May 17th',
				stats: { heart: 2 },
				// extra: ["May 17th"],
			},
		],
	},
	// As a kid, when I was bad...
	// A - my parents threw away my toys. I started to hide what I cared about.
	// +1 Stealth, +1 Agility
	// B - my father beat me. I learned to take a punch earlier than most.
	// +1 Martial Arts, +1 Strength
	// C - I was locked in my room, where I studied quietly by myself, alone.
	// +1 Computers, +1 Intelligence
	// D - I was never punished. I was good at lying. Their innocent little angel.
	// +1 Disguise, +1 Charisma
	// E - I was grounded from electronics. I spent a lot of time drawing.
	// +1 Art, +1 Heart
	{
		text: 'As a kid, when I was bad...',
		answers: [
			{
				text: 'My parents threw away my toys. I started to hide what I cared about.',
				result: '+1 Stealth, +1 Agility',
				stats: { agility: 1 },
				skills: { stealth: 1 },
			},
			{
				text: 'My father beat me. I learned to take a punch earlier than most.',
				result: '+1 Martial Arts, +1 Strength',
				stats: { strength: 1 },
				skills: { 'martial arts': 1 },
			},
			{
				text: 'I was locked in my room, where I studied quietly by myself, alone.',
				result: '+1 Computers, +1 Intelligence',
				stats: { intelligence: 1 },
				skills: { computers: 1 },
			},
			{
				text: 'I was never punished. I was good at lying. Their innocent little angel.',
				result: '+1 Disguise, +1 Charisma',
				stats: { charisma: 1 },
				skills: { disguise: 1 },
			},
			{
				text: 'I was grounded from electronics. I spent a lot of time drawing.',
				result: '+1 Art, +1 Heart',
				stats: { heart: 1 },
				skills: { art: 1 },
			},
		],
	},

	// In elementary school...
	// A - I was mischevious, and always up to something.
	// +1 Disguise, +1 Agility

	// B - I was unruly and often fought with other children.
	// +1 Martial Arts, +1 Strength

	// C - I was the head of the class, and I worked very hard.
	// +1 Writing, +1 Intelligence

	// D - I was the class clown. I even had some friends.
	// +1 Persuasion, +1 Charisma

	// E - I was a daydreamer. What is, what was, what could be.
	// +1 Art, +1 Heart

	{
		text: 'In elementary school...',
		answers: [
			{
				text: 'I was mischevious, and always up to something.',
				result: '+1 Disguise, +1 Agility',
				stats: { agility: 1 },
				skills: { disguise: 1 },
			},
			{
				text: 'I was unruly and often fought with other children.',
				result: '+1 Martial Arts, +1 Strength',
				stats: { strength: 1 },
				skills: { 'martial arts': 1 },
			},
			{
				text: 'I was the head of the class, and I worked very hard.',
				result: '+1 Writing, +1 Intelligence',
				stats: { intelligence: 1 },
				skills: { writing: 1 },
			},
			{
				text: 'I was the class clown. I even had some friends.',
				result: '+1 Persuasion, +1 Charisma',
				stats: { charisma: 1 },
				skills: { persuasion: 1 },
			},
			{
				text: 'I was a daydreamer. What is, what was, what could be.',
				result: '+1 Art, +1 Heart',
				stats: { heart: 1 },
				skills: { art: 1 },
			},
		],
	},

	// When I turned 10, my parents divorced.
	// A - Acrimoniously. I once tripped over the paperwork!
	// +1 Law, +1 Agility
	// B - Violently.
	// +1 Martial Arts, +1 Strength
	// C - My studies suffered, but I continued working.
	// +1 Computers, +1 Intelligence
	// D - This was when I began to understand that words were weapons.
	// +1 Psychology, +1 Charisma
	// E - I kept a journal online. It still hurts to read the old entries.
	// +1 Writing, +1 Heart

	{
		text: 'When I turned 10, my parents divorced.',
		answers: [
			{
				text: 'Acrimoniously. I once tripped over the paperwork!',
				result: '+1 Law, +1 Agility',
				stats: { agility: 1 },
				skills: { law: 1 },
			},
			{
				text: 'Violently.',
				result: '+1 Martial Arts, +1 Strength',
				stats: { strength: 1 },
				skills: { 'martial arts': 1 },
			},
			{
				text: 'My studies suffered, but I continued working.',
				result: '+1 Computers, +1 Intelligence',
				stats: { intelligence: 1 },
				skills: { computers: 1 },
			},
			{
				text: 'This was when I began to understand that words were weapons.',
				result: '+1 Psychology, +1 Charisma',
				stats: { charisma: 1 },
				skills: { psychology: 1 },
			},
			{
				text: 'I kept a journal online. It still hurts to read the old entries.',
				result: '+1 Writing, +1 Heart',
				stats: { heart: 1 },
				skills: { writing: 1 },
			},
		],
	},

	// In middle school...
	// A - I broke into lockers and was into punk rock.
	// +2 Security, +1 Agility, Punk Jacket
	// B - I was obsessed with Japanese swords and started lifting weights.
	// +2 Martial Arts, +1 Strength, Katana and Wakizashi
	// C - I created my own chess engine. I had no friends.
	// +2 Computers, +1 Intelligence
	// D - I joined the drama club, but they never had enough roles for me.
	// +2 Disguise, +1 Charisma
	// E - I tried starting a band. I had to play all the instruments myself.
	// +2 Music, +1 Heart

	{
		text: 'In middle school...',
		answers: [
			{
				text: 'I broke into lockers and was into punk rock.',
				result: '+2 Security, +1 Agility, Punk Jacket',
				stats: { agility: 1 },
				skills: { security: 2 },
				extra: ['Punk Jacket'],
			},
			{
				text: 'I was obsessed with Japanese swords and started lifting weights.',
				result: '+2 Martial Arts, +1 Strength, Katana and Wakizashi',
				stats: { strength: 1 },
				skills: { 'martial arts': 2 },
				extra: ['Katana and Wakizashi'],
			},
			{
				text: 'I created my own chess engine. I had no friends.',
				result: '+2 Computers, +1 Intelligence',
				stats: { intelligence: 1 },
				skills: { computers: 2 },
			},
			{
				text: 'I joined the drama club, but they never had enough roles for me.',
				result: '+2 Disguise, +1 Charisma',
				stats: { charisma: 1 },
				skills: { disguise: 2 },
			},
			{
				text: 'I tried starting a band. I had to play all the instruments myself.',
				result: '+2 Music, +1 Heart',
				stats: { heart: 1 },
				skills: { music: 2 },
			},
		],
	},

	// Things were getting really bad...
	// A - when I stole my first car. I got a few blocks before I totaled it.
	// +2 Security, +1 Driving
	// B - and I went to live with my dad. I learned gun safety the hard way.
	// +2 Firearms, +1 First Aid
	// C - and I tried being a teacher's assistant. It just made me a target.
	// +2 Teaching, +1 Science
	// D- so I ran for class president. The campaign was a disaster.
	// +2 Persuasion, +1 Writing
	// E - and I went completely goth. I had no friends and made my own clothes.
	// +2 Tailoring, +1 Disguise, Black Formalwear

	{
		text: 'Things were getting really bad...',
		answers: [
			{
				text: 'when I stole my first car. I got a few blocks before I totaled it.',
				result: '+2 Security, +1 Driving',
				skills: { security: 2, driving: 1 },
			},
			{
				text: 'and I went to live with my dad. I learned gun safety the hard way.',
				result: '+2 Firearms, +1 First Aid',
				skills: { firearms: 2, 'first aid': 1 },
			},
			{
				text: "and I tried being a teacher's assistant. It just made me a target.",
				result: '+2 Teaching, +1 Science',
				skills: { teaching: 2, science: 1 },
			},
			{
				text: 'so I ran for class president. The campaign was a disaster.',
				result: '+2 Persuasion, +1 Writing',
				skills: { persuasion: 2, writing: 1 },
			},
			{
				text: 'and I went completely goth. I had no friends and made my own clothes.',
				result: '+2 Tailoring, +1 Disguise, Black Formalwear',
				skills: { tailoring: 2, disguise: 1 },
				extra: ['Black Formalwear'],
			},
		],
	},

	// Well, I knew it had reached a crescendo when...

	// A - I stole a cop car when I was only 14. I went to juvie for 6 months.
	// +1 Driving, +1 Security, +1 Street Smarts

	// B - my step mom shot her ex-husband, my dad, with a shotgun. She got off.
	// +1 Firearms, +1 Dodge, +1 Law

	// C - I got caught hacking my grades. But they made it so fucking easy!
	// +3 Computers

	// D - I resorted to controlling people. I built my own clique of outcasts.
	// +2 Persuasion, +1 Street Smarts

	// E - I got caught making out with another boy. So God hated me for that?
	// +2 Seduction, +1 Religion

	{
		text: 'Well, I knew it had reached a crescendo when...',
		answers: [
			{
				text: 'I stole a cop car when I was only 14. I went to juvie for 6 months.',
				result: '+1 Driving, +1 Security, +1 Street Smarts',
				skills: { driving: 1, security: 1, 'street smarts': 1 },
			},
			{
				text: 'my step mom shot her ex-husband, my dad, with a shotgun. She got off.',
				result: '+1 Firearms, +1 Dodge, +1 Law',
				skills: { firearms: 1, dodge: 1, law: 1 },
			},
			{
				text: 'I got caught hacking my grades. But they made it so fucking easy!',
				result: '+3 Computers',
				skills: { computers: 3 },
			},
			{
				text: 'I resorted to controlling people. I built my own clique of outcasts.',
				result: '+2 Persuasion, +1 Street Smarts',
				skills: { persuasion: 2, 'street smarts': 1 },
			},
			{
				text: 'I got caught making out with another boy. So God hated me for that?',
				result: '+2 Seduction, +1 Religion',
				skills: { seduction: 2, religion: 1 },
			},
		],
	},

	// I was only 15 when I ran away, and...
	// A - I started robbing houses: rich people only. I was fed up with their crap.
	// +2 Security, +1 Stealth, +1 Agility
	// B - I hung out with thugs and beat the shit out of people.
	// +2 Martial Arts, +1 Street Smarts, +1 Strength
	// C - I learned what it took to survive. When to move on, where to hide.
	// +2 Street Smarts, +1 Stealth, +1 Intelligence
	// D - I volunteered for a left-wing candidate. He didn't even come close.
	// +2 Persuasion, +1 Law, +1 Charisma
	// E - I let people pay me for sex. I needed the money to survive.
	// +2 Seduction, +1 Street Smarts, +1 Heart

	{
		text: 'I was only 15 when I ran away, and...',
		answers: [
			{
				text: 'I started robbing houses: rich people only. I was fed up with their crap.',
				result: '+2 Security, +1 Stealth, +1 Agility',
				stats: { agility: 1 },
				skills: { security: 2, stealth: 1 },
			},
			{
				text: 'I hung out with thugs and beat the shit out of people.',
				result: '+2 Martial Arts, +1 Street Smarts, +1 Strength',
				stats: { strength: 1 },
				skills: { 'martial arts': 2, 'street smarts': 1 },
			},
			{
				text: 'I learned what it took to survive. When to move on, where to hide.',
				result: '+2 Street Smarts, +1 Stealth, +1 Intelligence',
				stats: { intelligence: 1 },
				skills: { 'street smarts': 2, stealth: 1 },
			},
			{
				text: "I volunteered for a left-wing candidate. He didn't even come close.",
				result: '+2 Persuasion, +1 Law, +1 Charisma',
				stats: { charisma: 1 },
				skills: { persuasion: 2, law: 1 },
			},
			{
				text: 'I let people pay me for sex. I needed the money to survive.',
				result: '+2 Seduction, +1 Street Smarts, +1 Heart',
				stats: { heart: 1 },
				skills: { seduction: 2, 'street smarts': 1 },
			},
		],
	},

	// Life went on.
	// On my 18th birthday...
	// A - I stole a sports car. The owner must have been pissed!
	// +1 Driving, Sports Car
	// B - I bought myself an assault rifle. An AK-102. Fully automatic.
	// +1 Firearms, AK-102
	// C - I celebrated. I'd saved a thousand bucks!
	// +1 Business, $1000
	// D - I started wearing a security uniform to explore major buildings downtown.
	// +1 Disguise, Security Uniform, Downtown Maps
	// E - I went to a party and met a cool law student.
	// We've been dating since.
	// +1 Seduction, Sleeper Lawyer

	{
		text: 'Life went on. On my 18th birthday...',
		answers: [
			{
				text: 'I stole a sports car. The owner must have been pissed!',
				result: '+1 Driving, Sports Car',
				skills: { driving: 1 },
				extra: ['Sports Car'],
			},
			{
				text: 'I bought myself an assault rifle. An AK-102. Fully automatic.',
				result: '+1 Firearms, AK-102',
				skills: { firearms: 1 },
				extra: ['AK-102'],
			},
			{
				text: "I celebrated. I'd saved a thousand bucks!",
				result: '+1 Business, $1000',
				skills: { business: 1 },
				extra: ['$1000'],
			},
			{
				text: 'I started wearing a security uniform to explore major buildings downtown.',
				result: '+1 Disguise, Security Uniform, Downtown Maps',
				skills: { disguise: 1 },
				extra: ['Security Uniform', 'Downtown Maps'],
			},
			{
				text: 'I went to a party and met a cool law student.',
				result: '+1 Seduction, Sleeper Lawyer',
				skills: { seduction: 1 },
				extra: ['Sleeper Lawyer'],
			},
		],
	},

	// For the last year or so, I've been...
	// A - stealing from Corporations. I know they're hiding the truth.
	// +3 Agility, +1 Intelligence, +2 Security Stealth Computers and Disguise
	// B - a violent gang leader. Nothing can change me, or stand in my way.
	// +3 Agility and Strength, +3 Firearms and Martial Arts, 4 Gang Members
	// C - taking college courses. I'm starting to understand what needs to be done.
	// +4 Int, +2 Science Computers Writing and Teaching, +1 Business and Law
	// D - writing my manifesto and refining my image. I'm ready to change the world.
	// +3 Charisma, +1 Intelligence, +2 Persuasion, +1 Law and Writing, +50 juice
	// E - surviving alone, just like everyone else. But we can't go on like this.
	// +4 Heart, +1 Intelligence Strength Agility and Charisma
	{
		text: "For the last year or so, I've been...",
		answers: [
			{
				text: "stealing from Corporations. I know they're hiding the truth.",
				result:
					'+3 Agility, +1 Intelligence, +2 Security Stealth Computers and Disguise',
				stats: { agility: 3, intelligence: 1 },
				skills: { security: 2, stealth: 2, computers: 2, disguise: 2 },
			},
			{
				text: 'a violent gang leader. Nothing can change me, or stand in my way.',
				result:
					'+3 Agility and Strength, +3 Firearms and Martial Arts, 4 Gang Members',
				stats: { strength: 3, agility: 3 },
				skills: { 'martial arts': 3, firearms: 3 },
				extra: ['4 Gang Members'],
			},
			{
				text: "taking college courses. I'm starting to understand what needs to be done.",
				result:
					'+4 Int, +2 Science Computers Writing and Teaching, +1 Business and Law',
				stats: { intelligence: 4 },
				skills: {
					science: 2,
					computers: 2,
					writing: 2,
					teaching: 2,
					business: 1,
					law: 1,
				},
			},
			{
				text: "writing my manifesto and refining my image. I'm ready to change the world.",
				result:
					'+3 Charisma, +1 Intelligence, +2 Persuasion, +1 Law and Writing, +50 juice',
				stats: { charisma: 3, intelligence: 1 },
				skills: { persuasion: 2, law: 1, writing: 1 },
				extra: ['50 Juice'],
			},
			{
				text: "surviving alone, just like everyone else. But we can't go on like this.",
				result: '+4 Heart, +1 Intelligence Strength Agility and Charisma',
				stats: {
					heart: 4,
					intelligence: 1,
					strength: 1,
					agility: 1,
					charisma: 1,
				},
			},
		],
	},
];
