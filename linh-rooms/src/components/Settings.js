import React from 'react';

function Settings(props){
    return(
        <>
            <div>
                <img src={props.settingImg} alt={props.settingName}/>
            </div>
        </>
    )
}
export default Settings