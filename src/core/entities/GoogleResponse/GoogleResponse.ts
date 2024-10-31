import {Book} from "../Book";

export interface GoogleResponseProps {
    totalItems: number;
    data: Book[]
}

export class GoogleResponse {
    totalItems: number;
    data: Book[];

    constructor(googleResponseProps: GoogleResponseProps) {
        this.totalItems = googleResponseProps.totalItems;
        this.data = googleResponseProps.data;
    }
}
