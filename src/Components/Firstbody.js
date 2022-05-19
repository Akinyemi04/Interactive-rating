import lip from './images/icon-star.svg'

const Firstbody = (props) => {
    function Lil(e){
        props.del(e.target.value)
    }
    const val =props.data
     const bill=val.map((val,index)=>{
         return(
        <li key ={index}><button className='btn' onClick={Lil} value={val}>{val}</button></li>)
    })
    function Wrath(e){
        props.peace('')
        e.preventDefault()
    }
        

  return (
    <div className='sin'>
        <img src={lip} alt='bill' id='piz'></img>   
        <h1>How Did We Do ?</h1> 
        <p>Please Let Us Know How We Did With Your Support</p>
        <p>Request.All Feedback Is Appreciated To  Help Us</p>
        <p>Improve Our Offerings!</p>
        <ul>{bill}</ul>
        <form onSubmit={Wrath}>
        <button type='submit' className='xcv' onSubmit={Wrath}>submit</button>
        </form>
    </div>
  )
  }

export default Firstbody