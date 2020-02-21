import { Author } from './Author';

export interface Juego {
    createdAt?: number
    updatedAt?: number
    id?: number
    name : string
    estilo : string
    edition : number
    author_FK? : number | Author | any
}
