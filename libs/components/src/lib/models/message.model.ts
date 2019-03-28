import { ValidationErrors } from '@angular/forms';

export interface ShowMsgErrorsObj {
    key: string,
    errors: ValidationErrors
}


export interface ShowMsg {
    mensaje: string
}


