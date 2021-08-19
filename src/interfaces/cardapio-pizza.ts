import {ITamanhoPizza} from "./tamanho-pizza";

export interface ICardapioPizza {
    id: number;
    sabor: string;
    ingredientes: string;
    tamanhos: ITamanhoPizza[];
}