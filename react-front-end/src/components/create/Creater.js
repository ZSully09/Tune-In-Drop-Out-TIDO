// import React, { useState } from 'react';

// function partyName() {
//   const [party, setParty] = useState;

//   const handleOnSubmit = useCallback(
//     event => {
//       event.preventDefault();
//     },
//     [setParty]
//   );

// }

// export default useForm;

//   fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
//     headers: {
//       Authorization: `Bearer ${this.state.accessToken}`,
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify({
//       name: this.state.name,
//       public: true
//     })
//   }).then(checkStatus);
//   function checkStatus(res) {
//     if (res.status >= 200 || res.status < 300) {
//       console.log("create party", res);
//       return res;
//     } else {
//       let err = new Error(res.statusText);
//       err.response = res;
//       throw err;
//     }
//   }

//   return (
//     <div>
//       <p>You clicked {partyName} </p>
//       <button onClick={() => setParty()}>
//       </button>
//     </div>
//   );
// }
