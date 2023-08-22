import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }, [])
    return (
        <div className="error-redirect">
            <h1>Not Found. Redirecting...</h1>
        </div>
    )
}