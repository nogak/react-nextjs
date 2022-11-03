function Decoration(props){
  return(
    <div style={{ color: 'red'}}>
      {props.children}
    </div>
  )
}

export default function Hero(){
  return(
    <Decoration>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
    </Decoration>
  )
}