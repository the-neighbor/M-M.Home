import React, { useState } from 'react';

export default function HomePage () {
    const checkFound = () => {
        if(!document.cookie.includes('campus=found')) {
            document.cookie = "campus=found; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            window.location.href = "/adventure";
          }
    }

    React.useEffect(() => {
        checkFound();
    }, []);

    return (
        <div className="p-5">
            <div className="container mx-auto home-page">
                <div className="container absolute-center">
                    <div className="card my-auto">
                        <img className="w-lg mx-auto home-logo" src="/assets/img/logo.svg" />
                    </div>
                    </div>
            </div>
        </div>
        
    );
}