import{ Injectable } from '@angular/core';

@Injectable()


export class VideoListService{
    VisibleVideos = [];
    getVideos(){
        return this.VisibleVideos = VIDEO.slice(0);
    }

    getVideo(id:number){
        return VIDEO.slice(0).find(video => video.id == id)
    }

}

const VIDEO = [

	{
		"id": 1,
		"category": "BIBLE_DOC",
		"presentor": "DOUG_BACHELOR",
		"topic": "PROPHECY",
		"title": "Nepali Christian The Bride, Beast, & Babylon – (दुलही,पशु र बेबीलोन)",
		"url": "https://img.youtube.com/vi/0tyRis6Md6A/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 2,
		"category": "BIBLE_DOC",
		"presentor": "SDA_CHURCH",
		"topic": "CREATION",
		"title": "The Creation – The Earth is a Witness (सृष्टि – पृथ्वी साक्षी छ )",
		"url": "https://img.youtube.com/vi/rWuRl2AS2BA/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 3,
		"category": "BIBLE_DOC",
		"presentor": "DOUG_BACHELOR",
		"topic": "SIN",
		"title": "Cosmic Conflict (ब्रहमाण्डीय द्वन्द्व)",
		"url": "https://img.youtube.com/vi/hr2_03C-7nI/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 4,
		"category": "SERMON",
		"presentor": "JOSEPH_MAGAR",
		"topic": "SIN",
		"title": "Part 1 – Is God Responsible? (भाग १ – के पर्मेश्वर जिम्मेवर हुनुहुन्छ? )",
		"url": "https://img.youtube.com/vi/gEztECXSgNI/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 5,
		"category": "SERMON",
		"presentor": "JOSEPH_MAGAR",
		"topic": "SIN",
		"title": "Part 2 – Why Do Innocent People Suffer? (भाग २ – निर्दोष मानिसहरुलाई किन दु:ख र पीडा अाइपर्छ ? ) ",
		"url": "https://img.youtube.com/vi/kx-aDrg3hA0/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 6,
		"category": "SERMON",
		"presentor": "JOSEPH_MAGAR",
		"topic": "SIN",
		"title": "Part 3 – Will Suffering End? (भाग ३ – के कहिल्यै यसको अन्त हुन्छ?) ",
		"url": "https://img.youtube.com/vi/ovvDlCpLX4A/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 7,
		"category": "BIBLE_DOC",
		"presentor": "SB_THING",
		"topic": "PROPHECY",
		"title": "Amazing Facts About the Bible ",
		"url": "https://img.youtube.com/vi/f8vFUE7YSc8/hqdefault.jpg",
		"duration": "27:31",
		"href": "https://www.youtube.com/watch?v=f8vFUE7YSc8"
	},
	{
		"id": 8,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "TONGUES",
		"title": "Gift of Tongue  Part-1(अन्य भाषाहरु बोल्ने बरदान) ",
		"url": "https://img.youtube.com/vi/ogBJ63XvCtw/hqdefault.jpg",
		"duration": "24:30"
	},
	{
		"id": 9,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 1 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/2SsyMYonAU4/hqdefault.jpg",
		"duration": "28:02"
	},
	{
		"id": 10,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 2 (साँतौ दिन शबाथ भाग 2) ",
		"url": "https://img.youtube.com/vi/sZ72z887dVw/hqdefault.jpg",
		"duration": "28:02"
	},	
	{
		"id": 11,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 3 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/j_7h6rHiza4/hqdefault.jpg",
		"duration": "27:54"
	},	
	{
		"id": 12,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 4 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/t9i4EdxRWfU/hqdefault.jpg",
		"duration": "27:27"
	},	
	{
		"id": 13,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 5 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/o1MTcuYt844/hqdefault.jpg",
		"duration": "28:27"
	},	
	{
		"id": 14,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 6 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/UNPuVkHm0Oo/hqdefault.jpg",
		"duration": "28:15"
	},	
	{
		"id": 15,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 7 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/k5XTYhnklj0/hqdefault.jpg",
		"duration": "28:43"
	},	
	{
		"id": 16,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 8 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/yRar0nkcYj0/hqdefault.jpg",
		"duration": "27:50"
	},	
	{
		"id": 17,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 9 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/TLBEMKZJo8I/hqdefault.jpg",
		"duration": "27:56"
	},	
	{
		"id": 18,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 10 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/ZziK9ri_X6U/hqdefault.jpg",
		"duration": "28:39"
	},	
	{
		"id": 19,
		"category": "SEVENTH",
		"presentor": "HAL_HOLBROOK",
		"topic": "SABBATH",
		"title": "The 7th Day Sabbath - Episode 11 (साँतौ दिन शबाथ भाग 1) ",
		"url": "https://img.youtube.com/vi/xNVK--ZP6HM/hqdefault.jpg",
		"duration": "29:09"
	},	
	{
		"id": 20,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "TONGUES",
		"title": "Gift of Tongue  Part-2 (अन्य भाषाहरु बोल्ने बरदान भाग २) ",
		"url": "https://img.youtube.com/vi/Y09oElTVROg/hqdefault.jpg",
		"duration": "27:33"
	},	
	{
		"id": 21,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "DEATH",
		"title": "State of The Dead Part-1 (मृत्यु पछिको अवस्था भाग १) ",
		"url": "https://img.youtube.com/vi/TUuSyOfTyOw/hqdefault.jpg",
		"duration": "27:39"
	},	
	{
		"id": 22,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "DEATH",
		"title": "State of The Dead Part-2 (मृत्यु पछिको अवस्था भाग २) ",
		"url": "https://img.youtube.com/vi/U9DUWrVgBgM/hqdefault.jpg",
		"duration": "27:31"
	},
	{
		"id": 23,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "YOUTH",
		"title": "Message to the Youth (युवाहरुको लागी सन्देश) ",
		"url": "https://img.youtube.com/vi/pbS0l3BpI3Q/hqdefault.jpg",
		"duration": "27:34"
	},
	{
		"id": 24,
		"category": "REMEDIES",
		"presentor": "ISAAC_PRADHAN",
		"topic": "CHARCOAL",
		"title": "How to Make Charcoal (कोइलाको धूलो कसरी बनाउने ) ",
		"url": "https://img.youtube.com/vi/cHv0TVs1FiQ/hqdefault.jpg",
		"duration": "9:39",
		"href": "https://www.youtube.com/watch?v=cHv0TVs1FiQ"
	},
	{
		"id": 25,
		"category": "REMEDIES",
		"presentor": "ISAAC_PRADHAN",
		"topic": "CHARCOAL",
		"title": "Charcoal Remedies (कोइलाको फाइदाहरु) ",
		"url": "https://img.youtube.com/vi/2txXBeBVaq8/hqdefault.jpg",
		"duration": "17:27",
		"href": "https://www.youtube.com/watch?v=2txXBeBVaq8"
	},
	{
		"id": 26,
		"category": "REMEDIES",
		"presentor": "ISAAC_PRADHAN",
		"topic": "HYDROTHERAPY",
		"title": "Contrast Treatment ( तातो र चिसो पानीद्वारा उपचार ) ",
		"url": "https://img.youtube.com/vi/cbqY-T99VZI/hqdefault.jpg",
		"duration": "10:26",
		"href": "https://www.youtube.com/watch?v=cbqY-T99VZI"
	},
	{
		"id": 27,
		"category": "REMEDIES",
		"presentor": "ISAAC_PRADHAN",
		"topic": "HYDROTHERAPY",
		"title": "Heating Compress Demonstration (तापद्वारा सेक्ने प्रदर्शन ) ",
		"url": "https://img.youtube.com/vi/SE_teDvTCzc/hqdefault.jpg",
		"duration": "9:38",
		"href": "https://www.youtube.com/watch?v=SE_teDvTCzc"
	},
	{
		"id": 28,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "REPENTANCE",
		"title": "Repentence (पश्चाताप) ",
		"url": "https://img.youtube.com/vi/jGo1NY1oofM/hqdefault.jpg",
		"duration": "27:24",
		"href": "https://www.youtube.com/watch?v=jGo1NY1oofM"
	},
	{
		"id": 29,
		"category": "BIBLE_DOC",
		"presentor": "DOUG_BACHELOR",
		"topic": "PROPHECY",
		"title": "Final Events of Bible Prophecy",
		"url": "https://img.youtube.com/vi/-TVGeOY4cyE/hqdefault.jpg",
		"duration": "27:24",
		"href": "https://www.youtube.com/watch?v=-TVGeOY4cyE"
	},
	{
		"id": 30,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "LOVE",
		"title": "LOVE (प्रेम) ",
		"url": "https://img.youtube.com/vi/xTdmtYBkIfw/hqdefault.jpg",
		"duration": "24:09",
		"href": "https://www.youtube.com/watch?v=xTdmtYBkIfw"
	},
	{
		"id": 31,
		"category": "BIBLE_STUDY",
		"presentor": "SB_THING",
		"topic": "FAMILY",
		"title": "Parents Duty to Children (छोरा छारीहरु प्रति आमा बुवाको कर्तव्य) ",
		"url": "https://img.youtube.com/vi/xnXcpPxYJL0/hqdefault.jpg",
		"duration": "24:39",
		"href": "https://www.youtube.com/watch?v=xnXcpPxYJL0"
	},
	{
		"id": 28,
		"category": "HEALTH",
		"presentor": "JOSEPH_MAGAR",
		"topic": "WATER",
		"title": "DR WATER (डा. पानी) ",
		"url": "https://img.youtube.com/vi/oaqIIrrBDjA/hqdefault.jpg",
		"duration": "27:11",
		"href": "https://www.youtube.com/watch?v=oaqIIrrBDjA"
	},
]

  