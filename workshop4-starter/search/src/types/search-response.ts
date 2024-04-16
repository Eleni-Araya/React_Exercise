import User from "./user";

export default interface SearchReponse {
    isFirst: boolean,
    isLoading: boolean,
    isError: boolean,
    users: User[]
}