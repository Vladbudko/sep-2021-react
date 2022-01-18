import React from 'react';

const User = ({user}) => {
    const {id,name,username,email} = user
    return (
        <div>
            <div>ID:{id}---Name:{name}---Username:{username}---Email:{email}</div>

        </div>
    );
};

export default User;