import { LoginDto } from "../dto/auth/login.dto";
import { RegisterDto } from "../dto/auth/register.dto";

export class AuthAPI {
    public static async getAll(): Promise<RegisterDto[]> {
        const resp = await fetch("http://localhost:3000/users/", {
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }

    public static async Login(createReq: LoginDto) {
        const resp = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(createReq)
        })

        const data = await resp.json();
        return data;
    }
}