export type NewsType = {
    _id: string
    title: string
    text: string
    user: {
        avatarUrl: string | null
        fullName: string
        username: string
    }
    date: string
    likesCount: number
    liked: boolean
}
