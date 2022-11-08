import { LetterFormType } from "./enums/letter-form-type.enum";

export class LetterForm {
    public id: number = 0;
    public form: string='';  
    public formTypes: LetterFormType[] = [LetterFormType.Isolated];      
}