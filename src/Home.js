import React, { createRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, child, push, update, onValue } from "firebase/database";
import { db } from "./firebase";

function Home({ uID, setLoginStatus }) {
  const [accounts, setAccounts] = useState([]);
  //const [listDefined, setListDefined] = useState("false")

  useEffect(() => {
    //console.log("effect")
    const readData = ref(db, "user-posts/" + uID);
    onValue(readData, (snapshot) => {
      const data = snapshot.val();

      let accts = [];
      for (let key in data) {
        //console.log(data[key])
        //setAccounts([...accounts, data[key]]);
        accts.push(data[key]);
        //setAccounts(accounts =>[...accounts, data[key]])
        //console.log(accounts)
      }
      //console.log(accounts)
      setAccounts(accts);
    });
  }, []);

  const writeNewPost = (uID, website, username, password) => {
    // A post entry.
    const postData = {
      uid: uID,
      website: website,
      username: username,
      password: password,
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), "posts")).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    //updates['/posts/' + newPostKey] = postData;
    updates["/user-posts/" + uID + "/" + newPostKey] = postData;

    return update(ref(db), updates);
  };

  const addPassword = () => {
    //console.log(accounts)
    if (
      usernameField.current.value.length !== 0 &&
      websiteField.current.value !== 0 &&
      passwordField.current.value !== 0
    ) {
      writeNewPost(
        uID,
        websiteField.current.value,
        usernameField.current.value,
        passwordField.current.value
      );

      const readData = ref(db, "user-posts/" + uID);
      onValue(readData, (snapshot) => {
        const data = snapshot.val();

        for (let key in data) {
          setAccounts([...accounts, data[key]]);
        }
      });
    }
  };

  const websiteField = createRef();
  const usernameField = createRef();
  const passwordField = createRef();
  //const exposedPassword = createRef();
  //const hiddenPassword = createRef();


  const showPassword = (e) =>{
  
    console.log(e.target)
    e.target.className ="hidden"
  }
  /*
  const hidePassword = () =>{
    hiddenPassword.current.className = 
  }
*/
  return (
    <div id="homepage">
      <div id="add-new-password">
        <form>
          <input
            type="text"
            ref={websiteField}
            placeholder="Enter website"
          ></input>
          <input
            type="text"
            ref={usernameField}
            placeholder="Enter username"
          ></input>
          <input
            type="text"
            ref={passwordField}
            placeholder="Enter password"
          ></input>
        </form>
        <img
          onClick={addPassword}
          className="cursor-pointer"
          src={require("./images/add.png")}
          alt="add"
        ></img>
      </div>
      <button onClick={()=>{setLoginStatus("logged out")}} className="sign-out">Sign Out</button>
      <hr></hr>
      
      <div id="accounts">
        <div className="homepage-table">
          <p>Website</p>
          <p>Username</p>
          <p>
            Password <FontAwesomeIcon icon="fa-solid fa-plus" />
          </p>
        </div>
        {accounts.map((acct, index) => {
          return (
            <div
              className={(index + 1) % 2 === 0 ? "account even" : "account odd"}
              key={index}
            >
              <p className="website">{acct["website"]}</p>
              <p className="username">{acct["username"]}</p>
              <p className="password"  onMouseEnter={showPassword}>{acct["password"]}</p>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;