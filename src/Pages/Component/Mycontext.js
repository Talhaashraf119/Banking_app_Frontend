    import React, { createContext, useState } from "react";

    // ✅ Create Context
    export const MyContext = createContext();

    const MyContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <MyContext.Provider value={{ data, setData }}>
        {children}
        </MyContext.Provider>
    );
    };

    export default MyContextProvider;
