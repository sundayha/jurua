
import React from 'react';

class NoAuthority extends React.Component {

    render() {
    
        console.log("===========没权限-组件渲染===========");
        
        return(
            <div>
                没权限
            </div>
        );
    }
}

export default NoAuthority;