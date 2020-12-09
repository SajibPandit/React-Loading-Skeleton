import React from 'react';
import Shimer from './Shimer';
import SkeletonElement from './SkeletonElements';

const SkeletonProfile = ({theme}) => {
    const themeClass = theme || 'light'
    return ( 
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElement type='profile'/>
                </div>
                <div>
                    <SkeletonElement type='title'/>
                    <SkeletonElement type='text'/>
                    <SkeletonElement type='text'/>
                </div>
                <Shimer/>
            </div>
        </div>
     );
}
 
export default SkeletonProfile;