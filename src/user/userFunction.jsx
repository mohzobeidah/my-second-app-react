import {useState,useEffect, useCallback, Component}from 'react'
function UserFunction(props) {
    
    const [users ,setUsers]=useState( [
        { NAME: "John", AGE: 25, isAdmin: true },
        { NAME: "Jane", AGE: 24, isAdmin: true },
        { NAME: "Jim", AGE: 26, isAdmin: false },
      ]);
      const [isAuth ,setIsAuth]=useState(false);
      console.log(users);
      console.log(users);
      
      const handleToggle=()=>{
        setIsAuth(!isAuth);
        console.log(props.isPass);
      }

    //   if callBack is empty it is same like componentDidMount
      useEffect(
        // useCallback
        ()=>{
            console.log("DidMount");
            
            return ()=>{
                   //   if callBack has return it is same like destory the commponent
                console.log("Will unMount");
            }

        }
    ,
    // arryofDepacancy
    [])
    //   if callBack arryofDepacancy is not empty it is same like componentDidUpdate

    useEffect(
        // useCallback
        ()=>{
            console.log("DidUpdate");
            

        }
    ,
    // arryofDepacancy
    [isAuth,users])
      return (
        <>
          <ul>
            //use trinraly obperator ?
            {isAuth && users.map((user, index) => {
              if (user.isAdmin)
                return (
                  <li className="bk-red" key={index}>
                    {user.NAME} is {user.AGE} years old.{" "}
                    {user.isAdmin ? "Admin" : "Not Admin"}
                  </li>
                );
            })}
          </ul>

          <button onClick={()=>{handleToggle()}}>toggle </button>
        </>
      );

}

export default UserFunction;