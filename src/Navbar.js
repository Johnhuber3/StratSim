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