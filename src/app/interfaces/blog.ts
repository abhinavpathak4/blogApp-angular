export interface Blog {
        id?: number,
        title: string,
        description: string,
        category: string,
        comments?: Comment[],
        featured?: boolean
}
