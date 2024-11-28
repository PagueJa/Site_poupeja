export interface User {
    id_user: string;
    name: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}