import { ValidationErrors } from '@angular/forms';

export interface ShowMsgErrorsObj {
    type: "error";
    key: string;
    errors: ValidationErrors
}
export interface ShowMsg {
    type: "msg";
    msg: string
}

export type typoeOfMessage = ShowMsgErrorsObj | ShowMsg


