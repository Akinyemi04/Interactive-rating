import all from './images/illustration-thank-you.svg'
const Secondbody = (props) => {
  return (
    <div className='sin'>
        <img src={all} id='spirit' alt='navy'></img>
        <button id='op'>You Selected {props.data} Out Of 5</button>
        <h1 id='ease'>Thank You!</h1>
        <p id='pill'>We Appreciate You Taking To Give A Rating</p>
        <p id='pillx'>If You Ever Need More Support Dont Hesitate  </p>
        <p id='pilly'>To  Get In touch</p>
    </div>
  )
}

export default Secondbody