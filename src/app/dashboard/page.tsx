"use client"

import { useSession } from "next-auth/react"

const DashboardPage = () => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }


    console.log(session, status)

    return (
        <>
            <h1>Dashboard</h1>
            <p>{JSON.stringify(session, null, 2)}</p>
        </>
    )
}

export default DashboardPage;