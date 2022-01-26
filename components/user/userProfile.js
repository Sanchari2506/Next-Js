import styles from './userProfile.module.css';

function UserProfile(props){
    return(
        <>
            <h3>Hi! Welcome {props.name}</h3>
        </>
    )
}

export default UserProfile;