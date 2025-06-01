import React from 'react';

function Settings(props){
    return(
        <>
            <div className="Nav-LeftSettings">
                <img className="Nav-LeftSettingsImg" src={props.settingImg} alt={props.settingName}/>
            </div>
        </>
    )
}
export default Settings