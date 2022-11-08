import { Lesson } from "./lesson.model";

export class LessonGroup {
    public id: number=0;
    public name: string = '';
    public lessons: Lesson[]=[];
}
