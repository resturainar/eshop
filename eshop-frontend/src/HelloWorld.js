import React, { useState } from "react";

function HelloWorld({ name }) {

    const [stateName, setStateName] = useState('');

    return (
        <div>
            Nama : {stateName}
            <button onClick={() => setStateName(name)}>Set</button>
        </div>
    );
}

export default HelloWorld;