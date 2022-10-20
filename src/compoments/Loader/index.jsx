import React from 'react';
import "./style.scss";

/**
 * @component
 * @description Render a loader when the datas are not fetched
 * @function Loader
 * @param {*}
 * @returns {jsx}
 */
 export default function Loader()
{
	return (
        <div className="loader-box">
            <div className="loader"></div>
        </div>
	)
}

