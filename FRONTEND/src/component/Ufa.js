function Ufa(props) {
    return (
        <div className={`ufa ${props.show && 'ufa_view'}`}>
            <image className="ufa__image"></image>
            <image className="ufa__image ufa__image_center"></image>
            <image className="ufa__image"></image>
        </div>
    )
}

export default Ufa;