import './homepage.styles.scss'
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage!</h1>
            <DirectoryMenu />
        </div>
    )
}

export default HomePage;
