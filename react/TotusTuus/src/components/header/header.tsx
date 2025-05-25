import './header.css';

function Header() {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            }
            else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }
    // Close mobile menu when clicking on a link
    if (navLinks && hamburger) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    return(
        <>
            <header id="header">
            <div className="container">
                <nav className="navbar">
                    <h1>Totus Tuus Marie</h1>
                    <div className="nav-links">
                        <a href="#home">Início</a>
                        <a href="#about">Quem Somos</a>
                        <a href="#gallery">Galeria</a>
                        <a href="#join">Entre para o Grupo</a>
                    </div>
                    <button id="hamburger" className="hamburger">
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
            </header>
        </>
    )
}

export default Header;