import React from 'react'

import styles from './Avatar.module.css'

type AvatarType = {
    url: string | null
    fullName: string
}

const Avatar: React.FC<AvatarType> = ({url, fullName}) => {
    return (
        <div className={styles.avatar}>
            {url ? <img src={url} alt={fullName[0]}/> : fullName[0]}
        </div>
    )
}

export default Avatar
