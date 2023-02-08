import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

const Favorites = () => {
    const user = useSelector(state=>state.user)

    return (
        <>
        <Header />
        <h1>Favorites</h1>
        {user && user.favoritos.map(item=>
            <>
                <p>{item}</p>
            </>)}
        </>
    )
}

export default Favorites;