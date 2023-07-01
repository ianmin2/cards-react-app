import styles from './style.module.css';

const ModeItem = (props) => {
    return (
        <li className={`list-group-item ${styles.modeItem} d-grid gap-2`}>
            <button className='btn btn-primary' type='button'> 
            <i className={`me-2 ${styles.pullLeft} ${props.config.icon}`}></i> {props.children} 
            </button>
        </li>
    );
}

export default ModeItem;