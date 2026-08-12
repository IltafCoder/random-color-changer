
function Color ({c, changeColor}) {
    return (
        <>
            <div className="w-40 h-40 cursor-pointer hover:scale-105 transition duration-100 rounded-md"
            style={{ backgroundColor: c }} onClick={changeColor}>
                
            </div>
        </>
    )
}

export default Color
