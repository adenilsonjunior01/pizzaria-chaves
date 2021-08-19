import {ICardapioPizza} from "../interfaces/cardapio-pizza";

export class MockCardapio {

    public cardapio(): Array<ICardapioPizza> {
        return  [
            {
                id: 1,
                sabor: 'Pizza Calabresa',
                ingredientes: 'Molho de tomate, mussarela, calabresa, cebola, azeitonas, orégano.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$39,90',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$34,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$29,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
            {
                id: 2,
                sabor: 'Pizza Portuguesa',
                ingredientes: 'Molho de tomate, mussarela, presunto, ovo, pimentão, milho, champignon, cebola, azeitonas, orégano.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$39,90',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$34,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$29,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
            {
                id: 3,
                sabor: 'Pizza Frango Catupiry',
                ingredientes: 'Molho de tomate, peito de frango desfiado, catupiry, mussarela, milho, orégano.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$39,90',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$34,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$29,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
            {
                id: 4,
                sabor: 'Pizza Atum',
                ingredientes: 'Molho de tomate, mussarela, tomate fatiado, atum, cebola, azeitonas, orégano.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$39,90',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$34,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$29,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
            {
                id: 5,
                sabor: 'Pizza Banana',
                ingredientes: 'Creme de banana, mussarela, banana fatiada, canela com açucar.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$39,90',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$34,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$29,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
            {
                id: 6,
                sabor: 'Pizza Moda da Casa',
                ingredientes: 'Molho de tomate, mussarela, carne seca, bacon, pimentão, milho, champignon, cebola, azeitonas, orégano.',
                tamanhos: [
                    {
                        id: 1,
                        tamanho: 'G',
                        valor: 'R$45,00',
                        descricao: 'Grande-12 Pedaços'
                    },
                    {
                        id: 2,
                        tamanho: 'M',
                        valor: 'R$39,90',
                        descricao: 'Média-8 Pedaços'
                    },
                    {
                        id: 3,
                        tamanho: 'P',
                        valor: 'R$34,90',
                        descricao: 'Pequena-6 Pedaços'
                    }
                ]
            },
        ]
    }

    public opcoesBorda(): Array<any> {
        return [
            {
                id: 1,
                titulo: 'Opções de bordas',
                subtitulo: 'Acréscimo R$3,00',
                items: [
                    {
                        descricao: 'Catupiry'
                    },
                    {
                        descricao: 'Cheddar'
                    },
                    {
                        descricao: 'Creme de batata'
                    },
                    {
                        descricao: 'Chocolate para Pizza de banana'
                    },
                ]

            }
        ]
    }
}
