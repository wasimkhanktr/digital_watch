const Chenge = () => {
    const [True,setTrue]=useState(true)
    const handleClick = () => {
    setTrue(!True);
    };
    return ( 
        <div className="chenge">
             <button class='glowing-btn' onClick={handleClick}>
          <h1 className="card-title">{True ? <CircleWatch/> : <Watch/>}</h1>
      </button>
        </div>
     );
}
 
export default Chenge;