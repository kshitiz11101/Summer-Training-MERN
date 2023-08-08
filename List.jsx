export const List=()=>{
    const fruits=["Apple","Mango","Orange"]
    return(
        <>
      {fruits.map((fruit, index) => <p key={index}>{fruit}</p>)}

        </>
    )
}
