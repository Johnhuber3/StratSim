/*
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">StratSim</Link>
            <h1>"如果你必須玩，一開始就決定三件事：遊戲規則、賭注和退出時間"</h1>
            <ul>
                <CustomLink to="/Roulette">Roulette</CustomLink>
                <CustomLink to="/Craps">Craps</CustomLink>
                <CustomLink to="/BlackJack">Blackjack</CustomLink>
                <CustomLink to="/Baccarat">Baccarat</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
*/



/*

import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">StratSim</Link>
            <h1 className="hidden">如果你必須玩，一開始就決定三件事：遊戲規則、賭注和退出時間</h1>
            <button className="hamburger" onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <CustomLink to="/Roulette">Roulette</CustomLink>
                    <CustomLink to="/Craps">Craps</CustomLink>
                    <CustomLink to="/BlackJack">Blackjack</CustomLink>
                    <CustomLink to="/Baccarat">Baccarat</CustomLink>
                </ul>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}

*/





import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title" onClick={closeMobileMenu}>StratSim</Link>
            <h1 className="hidden">如果你必須玩，一開始就決定三件事：遊戲規則、賭注和退出時間</h1>
            <button className="hamburger" onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <CustomLink to="/Roulette" onClick={closeMobileMenu}>Roulette</CustomLink>
                    <CustomLink to="/Craps" onClick={closeMobileMenu}>Craps</CustomLink>
                    <CustomLink to="/BlackJack" onClick={closeMobileMenu}>Blackjack</CustomLink>
                    <CustomLink to="/Baccarat" onClick={closeMobileMenu}>Baccarat</CustomLink>
                </ul>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, onClick, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} onClick={handleClick}>{children}</Link>
        </li>
    );
}
