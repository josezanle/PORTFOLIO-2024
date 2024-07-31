"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    const onRedirect = () => router.replace("/");

    return (
        <div className="body">
            <h1>Ooops!, It doesn't exist :D</h1>
            <button onClick={onRedirect}>Go to home.</button>
            <style jsx>{`
                .body {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
