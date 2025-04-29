export interface IDocs {
    slug: string[]
}

export interface IDocument {
    params: Promise<IDocs>
}