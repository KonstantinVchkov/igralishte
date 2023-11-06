// import { createContext } from "vm";
// import { Props,IAuthentication, ISignIn } from "@/types/GlobalTypes";
// import { useState } from "react";


// export const AuthContext = createContext({} as IAuthentication)

// export const AuthProvider = ({children}:Props) =>{
//     const [user,setUser] = useState<ISignIn>()

//     const signIn = (userData:ISignIn) => {
//         setUser(userData)
//     }
//     const signOut = () => {
//         setUser()
//     }

//     return (
//         <AuthContext.Provider value={{
//             user,signIn,signOut
//         }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

