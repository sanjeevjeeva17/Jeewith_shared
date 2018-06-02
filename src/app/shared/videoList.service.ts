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

const VIDEO = 
[
	{
		"id": 1,
		"category": "Bible Studies",
		"title": "The Fall of Satan",
		"url": "https://i.ytimg.com/vi/3C82IynR-S4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLADiIU4tYcm5cImgFvScVVZp0KF8A",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/3C82IynR-S4"
	}, {
		"id": 2,
		"category": "Bible Studies",
		"title": "Amazing Facts About the Bible",
		"url": "https://i.ytimg.com/vi/f8vFUE7YSc8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE-bLzA1TXAdcXbozE5S8YzUMJsQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/f8vFUE7YSc8"
	}, {
		"id": 3,
		"category": "Health",
		"title": "Hot Steam Bath Treatment",
		"url": "https://i.ytimg.com/vi/f1fRZE-lLJI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDW_7xwjw9HchdAuMlkT0QxE3zPlA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/f1fRZE-lLJI"
	}, {
		"id": 4,
		"category": "Bible Documentaries",
		"title": "Sabbath part - 11 (साँतौ दिन शबाथ भाग 11) ",
		"url": "https://i.ytimg.com/vi/xNVK--ZP6HM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBywK-jdgP7Xpij0Peem8se6KH6Nw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/xNVK--ZP6HM"
	}, {
		"id": 5,
		"category": "Bible Documentaries",
		"title": "Sabbath part - 10 (साँतौ दिन शबाथ भाग 10)",
		"url": "https://i.ytimg.com/vi/ZziK9ri_X6U/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtPNv3VTcl7B42rLwmnUZTxLaNOA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/ZziK9ri_X6U"
	}, {
		"id": 6,
		"category": "Bible Documentaries",
		"title": "Sabbath part - 9 (साँतौ दिन शबाथ भाग 9)",
		"url": "https://i.ytimg.com/vi/TLBEMKZJo8I/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBoc6ou8AxUBgmc2s_Rfg8xP4fMsA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/TLBEMKZJo8I"
	}, {
		"id": 7,
		"category": "Bible Documentaries",
		"title": "Sabbath part -8 (साँतौ दिन शबाथ भाग 8)",
		"url": "https://i.ytimg.com/vi/yRar0nkcYj0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAr2k7aIuGgGrEO_evSgKtLHY1NEg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/yRar0nkcYj0"
	}, {
		"id": 8,
		"category": "Bible Documentaries",
		"title": "Sabbath part -7 (साँतौ दिन शबाथ भाग 7)",
		"url": "https://i.ytimg.com/vi/yRar0nkcYj0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAr2k7aIuGgGrEO_evSgKtLHY1NEg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/k5XTYhnklj0"
	}, {
		"id": 9,
		"category": "Bible Documentaries",
		"title": "Sabbath part -6 (साँतौ दिन शबाथ भाग 6)",
		"url": "https://i.ytimg.com/vi/UNPuVkHm0Oo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA-1IB1llQnaLjDkdrJHI_MNn9y8A",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/UNPuVkHm0Oo"
	}, {
		"id": 10,
		"category": "Bible Documentaries",
		"title": "Sabbath part -5 (साँतौ दिन शबाथ भाग 5)",
		"url": "https://i.ytimg.com/vi/o1MTcuYt844/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhEA824xRTconYB051Ij26UC-m7w",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/o1MTcuYt844"
	}, {
		"id": 11,
		"category": "Bible Documentaries",
		"title": "Sabbath part -4 (साँतौ दिन शबाथ भाग 4)",
		"url": "https://i.ytimg.com/vi/t9i4EdxRWfU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDMzanG01UsLMje74OCyefAI5CgYg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/t9i4EdxRWfU"
	}, {
		"id": 12,
		"category": "Bible Documentaries",
		"title": "Sabbath part -3 (साँतौ दिन शबाथ भाग 3)",
		"url": "https://i.ytimg.com/vi/j_7h6rHiza4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWFiogL0iZD0PEA7NME0R8xTr-tA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/j_7h6rHiza4"
	}, {
		"id": 13,
		"category": "Bible Documentaries",
		"title": "Sabbath part -2 (साँतौ दिन शबाथ भाग २)",
		"url": "https://i.ytimg.com/vi/sZ72z887dVw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA9j-oGbFdlW9B9sKkxUFPAvf6Xrg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/sZ72z887dVw"
	}, {
		"id": 14,
		"category": "Bible Documentaries",
		"title": "Sabbath part -1 (साँतौ दिन शबाथ भाग 1)",
		"url": "https://i.ytimg.com/vi/2SsyMYonAU4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAVb3xqXBZ23gqJnuXI6pCBIzAY0A",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/2SsyMYonAU4"
	}, {
		"id": 15,
		"category": "Bible Studies",
		"title": "State of dead part 1 (मृत्यु पछिको अवस्था भाग १)",
		"url": "https://i.ytimg.com/vi/TUuSyOfTyOw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCTY39DnzMebOJunZUH6Mz05qhhtQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/TUuSyOfTyOw"
	}, {
		"id": 16,
		"category": "Bible Studies",
		"title": "State of dead part 2(मृत्यु पछिको अवस्था भाग २)",
		"url": "https://i.ytimg.com/vi/U9DUWrVgBgM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMqarZxKypN47BMyVFhFgI79Oqpg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/U9DUWrVgBgM"
	}, {
		"id": 17,
		"category": "Bible Studies",
		"title": "Gift of Tongue Part -2 (अन्य भाषाहरु बोल्ने बरदान भाग – २)",
		"url": "https://i.ytimg.com/vi/Y09oElTVROg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB-471-0VO3Olx1Pv0UEFMWkNub2g",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/Y09oElTVROg"
	}, {
		"id": 18,
		"category": "Bible Studies",
		"title": "Repentence (पश्चाताप)",
		"url": "https://i.ytimg.com/vi/jGo1NY1oofM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB0r8oWE_QmWomap0LdNscius3QyA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/jGo1NY1oofM"
	}, {
		"id": 19,
		"category": "Bible Studies",
		"title": "Grace and Law (अनुग्रह र व्यवस्था)",
		"url": "https://i.ytimg.com/vi/n4ycvri_5kM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCxcKszm6UrixximUOcWqUPuMSk6Q",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/n4ycvri_5kM"
	}, {
		"id": 20,
		"category": "Bible Studies",
		"title": "Message to the Youth (युवाहरुको लागी सन्देश)",
		"url": "https://i.ytimg.com/vi/pbS0l3BpI3Q/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCU9b8PAiL8JrHn7akkupGp4B8TNw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/pbS0l3BpI3Q"
	}, {
		"id": 21,
		"category": "Health",
		"title": "Grains (अन्नहरु)",
		"url": "https://i.ytimg.com/vi/wO3S6uaxvZk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBkz9ATyaR-rpm6pdsES6dCt0eCLw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/wO3S6uaxvZk"
	}, {
		"id": 22,
		"category": "Health",
		"title": "FRUITS (फलफुलहरू)",
		"url": "https://i.ytimg.com/vi/LGTO2xU9Q30/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFO0WYoBoBKJKBCezBWmAk9OXrDQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/LGTO2xU9Q30"
	}, {
		"id": 23,
		"category": "Health",
		"title": "NUTRITION (पाेषण)",
		"url": "https://i.ytimg.com/vi/BBeeCVW6A78/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWNhvjhW7Ydu6nNSbgnAvqiL_OjQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/BBeeCVW6A78"
	}, {
		"id": 24,
		"category": "Health",
		"title": "FAT CONTROL( तौल नियन्त्रण)",
		"url": "https://i.ytimg.com/vi/dCIUtbLJUn4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBmIjN522ZCYw3UQqfn1GgcmWJRRA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/dCIUtbLJUn4"
	}, {
		"id": 25,
		"category": "Health",
		"title": "Prevention Versus Cure ( राेकथाम र उपचारकाे तुलना)",
		"url": "https://i.ytimg.com/vi/tBiDChCfdg0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxuJVbBC8fZoXBDsswhWpCar_zYQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/tBiDChCfdg0"
	}, {
		"id": 26,
		"category": "Health",
		"title": "Dr Sanitation (डा. सरसपफाइ)",
		"url": "https://i.ytimg.com/vi/lNvPJQ02azE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAPa5kr0idY0j6L1dCGAw4WS3ayPg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/lNvPJQ02azE"
	}, {
		"id": 27,
		"category": "Health",
		"title": "Dr. Temperance Part 1 (डा. संयम भाग १)",
		"url": "https://i.ytimg.com/vi/RBndYd1ExP4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyAC2bsqd_zyrZHYKg8eZseBDExw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/RBndYd1ExP4"
	}, {
		"id": 28,
		"category": "Health",
		"title": "Dr Air (डा. हावा)",
		"url": "https://i.ytimg.com/vi/jCTMMKcSAXw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCYpicA2RpQj0_Cm8rmoDYG44tQNQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/jCTMMKcSAXw"
	}, {
		"id": 29,
		"category": "Health",
		"title": "Dr. Temperance part -2 (डा. संयम भाग २ )",
		"url": "https://i.ytimg.com/vi/Cvmypb6yYsI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXQ_XbjuXyHcr3p9vDN9xJD9WYEA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/Cvmypb6yYsI"
	}, {
		"id": 30,
		"category": "Health",
		"title": "Dr Sunlight (डा. घामकाे ज्याेती)",
		"url": "https://i.ytimg.com/vi/CBud7xR256Q/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDu4GGkCALeIlyo36rNelq2XcscsA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/CBud7xR256Q"
	}, {
		"id": 31,
		"category": "Health",
		"title": "Healthiest Diet (शाकाहारी भाेजन)",
		"url": "https://i.ytimg.com/vi/BNtT4dsgYMI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBKj04T0lwEBb8tx2_m-7LF9Hfjqw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/BNtT4dsgYMI"
	}, {
		"id": 32,
		"category": "Health",
		"title": "Trust In God (परमेश्वरमा विश्वास)",
		"url": "https://i.ytimg.com/vi/kklRCUAponE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCIBQl9gTAZNtJXPkkrsp_SYRLSfA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/kklRCUAponE"
	}, {
		"id": 33,
		"category": "Bible Studies",
		"title": "Gift of Tongue part 1 (अन्य भाषाहरु बोल्ने बरदान)",
		"url": "https://i.ytimg.com/vi/ogBJ63XvCtw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWA7Dihb6AhtBelZo_7F6z3wY1Wg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/ogBJ63XvCtw"
	}, {
		"id": 34,
		"category": "Bible Studies",
		"title": "PARENT'S DUTY TOWARDS CHILDREN (छोरा छारीहरु प्रति आमा बुवाको कर्तव्य)",
		"url": "https://i.ytimg.com/vi/xnXcpPxYJL0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCEselWosDoHr_1Q_Gm127Biw1Rqw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/xnXcpPxYJL0"
	}, {
		"id": 35,
		"category": "Health",
		"title": "DR WATER (डा. पानी)",
		"url": "https://i.ytimg.com/vi/oaqIIrrBDjA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA_lnZnMzpV63tH7KHLzLs_6jCxwQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/oaqIIrrBDjA"
	}, {
		"id": 36,
		"category": "Bible Studies",
		"title": "LOVE (प्रेम)",
		"url": "https://i.ytimg.com/vi/xTdmtYBkIfw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWY8ACuTUi0aqUFt1FApwW_PYUNw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/xTdmtYBkIfw"
	}, {
		"id": 37,
		"category": "Health",
		"title": "DOCTOR REST (डा. बिश्राम)",
		"url": "https://i.ytimg.com/vi/_AgdeK-xA3w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDqVRcSKrtWQcu9jrzfWDo3A3hk_A",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/_AgdeK-xA3w"
	}, {
		"id": 38,
		"category": "Health",
		"title": "Charcoal Remedies (कोइलाको फाइदाहरु)",
		"url": "https://i.ytimg.com/vi/2txXBeBVaq8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGtlRIS2FDqVOLdn7fzPxtPqUeCA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/2txXBeBVaq8"
	}, {
		"id": 39,
		"category": "Health",
		"title": "How to Make Charcoal (कोइलाको धूलो कसरी बनाउने )",
		"url": "https://i.ytimg.com/vi/cHv0TVs1FiQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAbdTrY3fhGvs6_vZKPUN-VsSRgMw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/cHv0TVs1FiQ"
	}, {
		"id": 40,
		"category": "Health",
		"title": "Heating Compress Demonstration (तापद्वारा सेक्ने प्रदर्शन )",
		"url": "https://i.ytimg.com/vi/SE_teDvTCzc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAiZE9FwzPGf03jGzONP1LVeTxnFQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/SE_teDvTCzc"
	}, {
		"id": 41,
		"category": "Health",
		"title": "Contrast Treatment ( तातो र चिसो पानीद्वारा उपचार )",
		"url": "https://i.ytimg.com/vi/cbqY-T99VZI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD-YOKWKrSapRD_zhIF4Eg9aH8RUQ",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/cbqY-T99VZI"
	}, {
		"id": 42,
		"category": "Health",
		"title": "Hot Foot Bath Demonstration (तोतोपानीमा खुट्टा भिजाइ गर्ने उपचार)",
		"url": "https://i.ytimg.com/vi/QWb2Y3GCqY8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDszacZjbhBmzQkmgJDJgntbcKCiA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/QWb2Y3GCqY8"
	}, {
		"id": 43,
		"category": "Health",
		"title": "Introduction to Hydrotherapy (जलउपचारको परिचय )",
		"url": "https://i.ytimg.com/vi/AeYxBZOF4FE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1wqijXP0sVNcizR8UBAuVwNO1iA",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/AeYxBZOF4FE"
	}, {
		"id": 44,
		"category": "Health",
		"title": "Revelation: The Bride, The Beast, & Babylon (दुलही,पशु र बेबीलोन)",
		"url": "https://i.ytimg.com/vi/0tyRis6Md6A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDX9ubcdwNtGHhjT1xQQdcRBVhcwg",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/0tyRis6Md6A"
	}, {
		"id": 45,
		"category": "Bible Documentaries",
		"title": "The Creation - The Earth is a Witness (सृष्टि – पृथ्वी साक्षी छ )",
		"url": "https://i.ytimg.com/vi/rWuRl2AS2BA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDbXxaA5h8x3grumWW-ZA7Gu61dCw",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/rWuRl2AS2BA"
	}, {
		"id": 46,
		"category": "Bible Documentaries",
		"title": "Cosmic Conflict (ब्रहमाण्डीय द्वन्द्व)",
		"url": "https://i.ytimg.com/vi/hr2_03C-7nI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCnGRM8DXVbKD3AMDWk1Rm4P-Af1g",
		"duration": "24:30",
		"link": "https://www.youtube.com/embed/hr2_03C-7nI"
	}
]
