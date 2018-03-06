import{ Injectable } from '@angular/core';

@Injectable()


export class AudioListService{
    VisibleAudios = [];
    getAudios(){
        return this.VisibleAudios = AUDIO.slice(0);
    }

    getAudio(id:number){
        return AUDIO.slice(0).find(audio => audio.id == id)
    }

}

const AUDIO = [
{
		"id": 1,
		"category": "BIBLE_DOC",
		"presentor": "DOUG_BACHELOR",
		"topic": "PROPHECY",
		"title": "Nepali Christian The Bride, Beast, & Babylon – (दुलही,पशु र बेबीलोन)",
		"url": "https://img.youtube.com/vi/0tyRis6Md6A/hqdefault.jpg",
		"duration": "24:30"
	},
]