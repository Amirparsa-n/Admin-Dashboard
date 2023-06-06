import React ,{createContext , useContext , useState} from "react";

export const stateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClick, setIsClick] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [mainColor, setMainColor] = useState('#4C6EF8');
    const [mainMode, setMainMode] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const handleClick = (clicked) => setIsClick({... initialState , [clicked]: true});
    const handleClickFalse = (clicked) => setIsClick({... initialState , [clicked]: false});

    const setMode = (mode) => {
        localStorage.setItem("themeMode", mode.target.value);

        setMainMode(prevSetMainMode => !prevSetMainMode);
    }

    const setColor = (color) => {
        setMainColor(color);

        localStorage.setItem("mainColor", color)
    }
 

    return(
        <stateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClick,
            setIsClick,
            handleClick,handleClickFalse,
            screenSize,
            setScreenSize,
            mainColor,mainMode,
            setMainColor,setMainMode,
            setOpenSettings, openSettings,
            setMode,setColor
            
        }}
        >
            {children}
        </stateContext.Provider>
    )
}

