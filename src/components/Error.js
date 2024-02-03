import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError()
    return <>
        <h1>OOps Something went wrong! </h1>
        <p>{err.status} : {err.statusText}</p>
    </>
}

export default Error;