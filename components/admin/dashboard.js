import styles from './dashboard.module.css';


function AdminDashboard(props){
    return(
        <>
            <h4>Hello Admin {props.admin}</h4>
        </>
    )
}

export default AdminDashboard;