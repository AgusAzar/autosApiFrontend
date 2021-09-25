export type Auto = {
    AutoId: number;
    Modelo: string;
    MarcaId: number;
    FotoUrl: string;
    MarcaActual: Marca;
};
export type Marca = {
    MarcaId: number;
    Name: string;
    Autos: Auto[];
};
