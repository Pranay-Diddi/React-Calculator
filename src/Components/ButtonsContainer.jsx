import "./IndexFile.css";

let btns = ['C', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+','*','/','-','='];

function ButtonsContainer( {onBtnClick}) {
    return (
        <div className="buttonsContainer">
            {btns.map((btn, index) => (
                <button key={index} type="button" className="btn btn-dark button" onClick={onBtnClick}>
                    {btn}
                </button>
            ))}
        </div>
    );
}

export default ButtonsContainer;
