export const Greet=(props)=>{
const sayGreet=()=>{
    const date= new Date();
    const hours=date.getHours();
    if(hours<12){
        // return (<h1>Good Morning {username}</h1>)
        return (<p>Good Morning {props.username}</p>)   //{username}->Destructure
    } 
    else if(hours>=12 && hours<16){
        return (<p>Good AfterNoon {props.username}</p>)
    } 
    else{
        return (<p>Good Evening {props.username}</p>)
    }
}
return(
    <>
    {sayGreet()}
    </>
)
}
