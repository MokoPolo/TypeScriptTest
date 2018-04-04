export interface Ingredient {
    Id: number;
    Name: string;
    Done: boolean;
    Category: string;
    CategoryId: number;
    Reoccurring: boolean;
    Quantity: number;
}

export interface RootObject {
    Id: number;
    Name: string;
    Ingredients: Ingredient[];
}