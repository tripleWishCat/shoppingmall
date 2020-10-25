import { observable } from "mobx";
type Sample = {
    imageNo:number;
}

const sample: Sample = observable<Sample>({
    imageNo:0,
    
})

export {sample}