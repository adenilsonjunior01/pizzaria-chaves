import {IFotos} from "../interfaces/IFotos";

export class MockFotos {

    public fotos(): Array<IFotos> {
        return [
            {
                id: 1,
                titulo: 'Pizza Calabresa',
                ingredientes: 'Molho de tomate, mussarela, calabresa, cebola, azeitonas, orégano.',
                preco: 'G - R$39,90, M - R$34,90, P - R$29,90'
            },
            {
                id: 2,
                titulo: 'Pizza Portuguesa',
                ingredientes: 'Molho de tomate, mussarela, presunto, ovo, pimentão, milho, champignon, cebola, azeitonas, orégano.',
                preco: 'G - R$39,90, M - R$34,90, P - R$29,90'
            },
            {
                id: 3,
                titulo: 'Pizza Frango Catupiry',
                ingredientes: 'Molho de tomate, peito de frango desfiado, catupiry, mussarela, milho, orégano.',
                preco: 'G - R$39,90, M - R$34,90, P - R$29,90'
            },
            {
                id: 4,
                titulo: 'Pizza Atum',
                ingredientes: 'Molho de tomate, mussarela, tomate fatiado, atum, cebola, azeitonas, orégano.',
                preco: 'G - R$39,90, M - R$34,90, P - R$29,90'
            },
            {
                id: 5,
                titulo: 'Pizza Banana',
                ingredientes: 'Creme de banana, mussarela, banana fatiada, canela com açucar.',
                preco: 'G - R$39,90, M - R$34,90, P - R$29,90'
            },
            {
                id: 6,
                titulo: 'Pizza Moda da Casa',
                ingredientes: 'Molho de tomate, mussarela, carne seca, bacon, pimentão, milho, champignon, cebola, azeitonas, orégano.',
                preco: 'G - R$45,00, M - R$39,90, P - R$34,90'
            }
        ]
    }
}