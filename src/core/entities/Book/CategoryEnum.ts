export enum BookCategories {
    Fiction = "fiction",
    NonFiction = "non-fiction",
    ScienceFiction = "science-fiction",
    Mystery = "mystery",
    Classic = "classic"
}

export const categoryLabels: Record<BookCategories, string> = {
    [BookCategories.Fiction]: "Ficción",
    [BookCategories.NonFiction]: "No Ficción",
    [BookCategories.ScienceFiction]: "Ciencia Ficción",
    [BookCategories.Mystery]: "Misterio",
    [BookCategories.Classic]: "Clásico"
};
