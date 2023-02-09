import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

const HomePage = props => {
    const router = useRouter()

    useEffect(() => {
        router.push('/teams')
    },[])

    return <></>
}

export default HomePage;