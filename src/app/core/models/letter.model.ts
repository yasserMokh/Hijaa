import { LetterForm } from "./letter-form.model";
import { LetterSound } from "./letter-sound.model";

export class Letter {
    public id: number = 0;
    public forms: LetterForm[]=[];                   
    public sounds: LetterSound[]=[];    
}
