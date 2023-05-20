import React, { useState, useEffect } from 'react';
import "../Styles/Loading.css"
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../Images/logo.svg"

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);
    const loading = useState(true);


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
                    <img src={logo} alt="logo" className='logo' />
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
                window.location.href="/login"
            )}
        </div>
    );
};

export default Loading;
