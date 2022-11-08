import { Letter } from "./letter.model";

export class Lesson {
    public id: number = 0;
    public name: string = '';
    public title: string = '';
    public description: string = '';
    public icon: string = '';
    public letters: Letter[] = [];
}
