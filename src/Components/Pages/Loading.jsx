import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="main-div">
                    <img src={require("../Images/logo.png")} alt="logo" />
                    <h2>Loading...</h2>
                </div>
            ) : (
                <h1>Redirect</h1>
            )}
        </div>
    );
};

export default Loading;
