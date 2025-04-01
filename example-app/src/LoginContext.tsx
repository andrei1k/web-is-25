import { log } from "console";
import { useContext, useState } from "react";
import { createContext } from "vm";

type LoginContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider(children: React.ReactNode) {

    const [login, setLogin] = useState(false)
    return (

        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext)
}