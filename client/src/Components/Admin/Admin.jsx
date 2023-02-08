import React from 'react'
import DashboardBase from './DashboardBase';

const Admin = () => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    return (
        <>
        {
            admin?
            <DashboardBase />:<h1> Esta pagina no esta disponible para ti</h1>
        }
        </>
    )
}

export default Admin;