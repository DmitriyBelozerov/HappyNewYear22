function Header(props) {
    function showUfa() {
        props.showUfa()
    }
    return (
        <header className="header">
            <h1 className="header__title" onClick={showUfa}>Happy New Year!</h1>
        </header>
    )
}

export default Header;