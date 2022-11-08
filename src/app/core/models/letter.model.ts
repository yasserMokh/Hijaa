import { LetterForm } from "./letter-form.model";
import { LetterSound } from "./letter-sound.model";

export class Letter {
    public id: number = 0;
    public name:string='';
    public form:string='';
    public forms: LetterForm[]=[];                   
    public sounds: LetterSound[]=[];    
}
