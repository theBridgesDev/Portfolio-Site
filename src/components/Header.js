// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Daryl Ferreras" />

            <div className='header__content'>
                <h1>Daryl Ferreras</h1>
                <p>Solidity/Web 3 Developer</p>
                <a href="mailto:ddferrer@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
