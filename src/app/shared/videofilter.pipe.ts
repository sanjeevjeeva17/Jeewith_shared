import{ Pipe, PipeTransform} from '@angular/core';


@Pipe({name:'VideoFilter'})

export class VideoFilterPipe implements PipeTransform {
transform(items: any[], criteria: string): any {  
    return items.filter(item=>{
        return item.category === criteria;
    });
    }
}