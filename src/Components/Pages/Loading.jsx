import React, { useState, useEffect } from 'react';
import "../Styles/Loading.css"
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="main-div">
                    <img src={require("../Images/logo.png")} alt="logo" className='logo' />
                    <div className="display-flex">
                        <h2>Loading...</h2>
                        <div>
                            {loading ? (
                                <ClipLoader color="#000" loading={loading} />
                            ) : (
                                <div>
                                    <h1>Hello, world!</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Redirect</h1>
            )}
        </div>
    );
};

export default Loading;
