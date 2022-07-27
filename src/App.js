//styles

// import React, { Component } from "react";
// import TestComponent from "./TestComponent";
// import { StyleRoot } from "radium";
// export default class App extends Component {
//   render() {
//     return (
//       <StyleRoot>
//         <div>
//           <TestComponent />
//         </div>
//       </StyleRoot>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
// forms

// import React, { Component } from "react";
// import ClassEvent from "./ClassEvent";
//  import FunctionEvent from "./FunctionEvent";
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <ClassEvent />
//         {/* <FunctionEvent />; */}
//       </>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//pass method whit props

// import React, { Component } from "react";
// import ClassEvent from "./ClassEvent";
//  import FunctionEvent from "./FunctionEvent";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "hi,, yasin",
//     };
//   }
//   sayHi = () => {
//     console.log(this.state.text);
//   };
//   render() {
//     return (
//       <>
//         <ClassEvent sayHi={this.sayHi} />
//         {/* <FunctionEvent />; */}
//       </>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
// conditional rendering

// import React, { Component } from "react";
// import Login from "./Login";

// export default class App extends Component {
//   render() {
//     return <Login />;
//   }
// }
//////////////////////////////////////////////////////////////////////////
//LIST RENDERING & KEYS

// import React, { Component } from "react";
// import Cars from "./Cars";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Cars />
//       </div>
//     );
//   }
// }
// export default App;
//////////////////////////////////////////////////////////////////////////
//lifecycle(mounting)

// import React, { Component } from "react";
// import Cild from "./Cild";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     console.log("constructor");
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <Cild />
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//lifecycle(updting)

// import React, { Component } from "react";
// import Cild from "./Cild";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "h1",
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   updateHandler = () => {
//     this.setState({
//       text: "bay",
//     });
//   };
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <Cild />
//         <h1>{this.state.text}</h1>
//         <button onClick={this.updateHandler}>update</button>
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//lifecycle(unmounting)

// import React, { Component } from "react";
// import Cild from "./Cild";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowm: true,
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   removeHandler = () => {
//     this.setState({
//       isShowm: false,
//     });
//   };
//   render() {
//     console.log("render");
//     return (
//       <div>
//         {this.state.isShowm && <Cild />}
//         <button onClick={this.removeHandler}>remove</button>
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
// pPure Component

// import React, { PureComponent } from "react";
// import PureCild from "./PureCild";
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "HI",
//     };
//   }
//   reset = () => {
//     this.setState({
//       text: "HI",
//     });
//   };
//   render() {
//     console.log("App is rendered");
//     return (
//       <div>
//         <button onClick={this.reset}>reSet</button>
//         <h1>{this.state.text}</h1>
//         <PureCild text={this.state.text} />
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//memo
// import React, { Component } from "react";

// import MemoCild from "./memoCild";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "HI",
//     };
//   }
//   reset = () => {
//     this.setState({
//       text: "HI",
//     });
//   };
//   render() {
//     console.log("App is rendered");
//     return (
//       <div>
//         <button onClick={this.reset}>reSet</button>
//         <h1>{this.state.text}</h1>
//         <MemoCild text={this.state.text} />
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//ref
// import React, { Component } from "react";
// import RefCild from "./RefCild";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <RefCild />
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//portal

// import React, { Component } from "react";
// import PortallCild from "./portallCild";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <PortallCild />
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//error boundary

// import React, { Component } from "react";
// import ErrorBoundary from "./errorBoundary";
// import ErrorBoundaryB from "./ErrorBoundaryB";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ErrorBoundaryB>
//           <ErrorBoundary />
//         </ErrorBoundaryB>
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//use fetch for getMethod

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   getPost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//       .then((response) => response.json())
//       .then((json) =>
//         this.setState({
//           postData: json,
//         })
//       );
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.getPost}>get post</button>
//         <h1>posts</h1>
//         {this.state.postData.map((post) => (
//           <p key={post.id}>{post.title}</p>
//         ))}
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//use to fetch for post and deletMethod

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   getPost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//       .then((response) => response.json())
//       .then((json) =>
//         this.setState({
//           postData: json,
//         })
//       );
//   }

//   sendPost = () => {
//     const headers = { "Content-type": "application/json; charset=UTF-8" };
//     const body = JSON.stringify({
//       title: "react tutoral",
//       body: "this a full course from f;ojj",
//       userId: 1,
//     });
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: body,

//       headers: headers,
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
//   deletePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.getPost}>get post</button>
//         <button onClick={this.sendPost}>post</button>
//         <button onClick={this.deletePost}>delete</button>
//         <h1>posts</h1>
//         {this.state.postData.map((post) => (
//           <p key={post.id}>{post.title}</p>
//         ))}
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//axios

// import React, { Component } from "react";
// import axios from "axios";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/")
//       .then((Response) => console.log(Response.data));
//   }
//   render() {
//     return (
//       <div>
//         <h1>posts:</h1>
//         {this.state.postData.map((post) => (
//           <p key={post.id}>{post.title}</p>
//         ))}
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////

//use axios for getMethod

// import React, { Component } from "react";
// import axios from "axios";
// import Post from "./component/Post";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/")
//       .then((Response) => this.setState({ postData: Response.data }));
//   }
//   render() {
//     const { postData } = this.state;
//     return (
//       <div>
//         <h1>posts:</h1>
//         {postData.map((post) => (
//           <Post key={post.id} title={post.title} body={post.body} />
//         ))}
//       </div>
//     );
//   }
// }
//////////////////////////////////////////////////////////////////////////
//use axios for postMethod

// import React, { Component } from "react";
// import axios from "axios";
// import SendPost from "./component/sendPost";
// import Post from "./component/Post";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/")
//       .then((Response) => this.setState({ postData: Response.data }));
//   }
//   render() {
//     const { postData } = this.state;
//     return (
//       <div>
//         <SendPost />
//         <h1>posts:</h1>
//         {postData.map((post) => (
//           <Post key={post.id} title={post.title} body={post.body} />
//         ))}
//       </div>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
//use axios for deletemothod

// import React, { Component } from "react";
// import axios from "axios";
// import SendPost from "./component/sendPost";
// import Post from "./component/Post";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/")
//       .then((Response) => this.setState({ postData: Response.data }));
//   }
//   deletePost = (id) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((Response) => console.log(Response));
//   };
//   render() {
//     const { postData } = this.state;
//     return (
//       <div>
//         <SendPost />
//         <h1>posts:</h1>
//         {postData.map((post) => (
//           <Post
//             key={post.id}
//             deletePost={() => this.deletePost(post.id)}
//             title={post.title}
//             body={post.body}
//           />
//         ))}
//       </div>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
//use axios for put & patch Method

// import React, { Component } from "react";
// import axios from "axios";

// export default class App extends Component {
//   componentDidMount() {
//     axios
//       .patch("https://jsonplaceholder.typicode.com/posts/1", {
//         title: "New Title",
//         body: "New Body",
//       })
//       .then((Response) => console.log(Response.data));
//   }
//   render() {
//     return <div>App</div>;
//   }
// }
////////////////////////////////////////////////////////////////////////////
//simutaneous request in axios

// import React, { Component } from "react";
// import axios from "axios";

// export default class App extends Component {
//   componentDidMount() {
//     axios
//       .all([
//         axios.get("https://jsonplaceholder.typicode.com/users"),
//         axios.get("https://jsonplaceholder.typicode.com/posts"),
//         axios.get("https://jsonplaceholder.typicode.com/albums"),
//       ])
//       .then((Response) => console.log(Response[0]));
//   }
//   render() {
//     return <div>App</div>;
//   }
// }
////////////////////////////////////////////////////////////////////////////
//spa
// import React, { Component } from "react";
// import { Route, Switch, Link } from "react-router-dom";

// import HomePage from "./component/HomePage";
// import Blogs from "./component/Blogs";
// import Products from "./component/Products";
// import AboutUs from "./component/AboutUs";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">HomePage</Link>
//           </li>
//           <li>
//             <Link to="blogs">Blogs </Link>
//           </li>
//           <li>
//             <Link to="aboutus">AboutUs</Link>
//           </li>
//           <li>
//             <Link to="products">Products</Link>
//           </li>
//         </ul>
//         <div>
//           <Switch>
//             <Route path="/blogs" component={Blogs} />
//             <Route path="/products" component={Products} />
//             <Route path="/aboutus" component={AboutUs} />
//             <Route exact path="/" component={HomePage} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
////////////////////////////////////////////////////////////////////////////
// porop in SPA

// import React, { Component } from "react";
// import { Route, Switch, Link } from "react-router-dom";

// import HomePage from "./component/HomePage";
// import Blogs from "./component/Blogs";
// import Products from "./component/Products";
// import AboutUs from "./component/AboutUs";
// import Product from "./component/product";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">HomePage</Link>
//           </li>
//           <li>
//             <Link to="blogs">Blogs </Link>
//           </li>
//           <li>
//             <Link to="aboutus">AboutUs</Link>
//           </li>
//           <li>
//             <Link to="products">Products</Link>
//           </li>
//         </ul>
//         <div>
//           <Switch>
//             <Route path="/products/:id" component={Product} />
//             <Route
//               path="/blogs"
//               render={(props) => <Blogs name="yasin" {...props} />}
//             />
//             <Route path="/products" component={Products} />
//             <Route path="/aboutus" component={AboutUs} />
//             <Route exact path="/" component={HomePage} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
////////////////////////////////////////////////////////////////////////////
//Redirect

// import React, { Component } from "react";
// import { Route, Switch, Link, Redirect } from "react-router-dom";

// import HomePage from "./component/HomePage";
// import Blogs from "./component/Blogs";
// import Products from "./component/Products";
// import AboutUs from "./component/AboutUs";
// import Product from "./component/product";
// import NotFound from "./component/notFound";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">HomePage</Link>
//           </li>
//           <li>
//             <Link to="blogs">Blogs </Link>
//           </li>
//           <li>
//             <Link to="aboutus">AboutUs</Link>
//           </li>
//           <li>
//             <Link to="products">Products</Link>
//           </li>
//         </ul>
//         <div>
//           <Switch>
//             <Route path="/products/:id" component={Product} />
//             <Route
//               path="/blogs"
//               render={(props) => <Blogs name="yasin" {...props} />}
//             />
//             <Route path="/products" component={Products} />
//             <Route path="/aboutus" component={AboutUs} />
//             <Route path="/notFound" component={NotFound} />
//             <Redirect from="/articles" to="/blogs" />
//             <Route exact path="/" component={HomePage} />
//             <Redirect to="/notFound" />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
////////////////////////////////////////////////////////////////////////////
//useState
// import React, { Component } from "react";
// import Counter from "./component/Counter";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//       </div>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
// objects in useState

// import React, { Component } from "react";
// import Form from "./component/FormOb";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Form />
//       </div>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
//array in useState

// import React, { Component } from "react";
// import FormArr from "./component/FormArr";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <FormArr />
//       </div>
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////
//useEffect and lifeCycle(updating)

// import React, { Component } from "react";
// import Logger from "./component/Logger";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Logger />
//       </div>
//     );
//   }
// }

// export default App;
////////////////////////////////////////////////////////////////////////////
//useEffect and lifeCycle(mounting)

// import React, { Component } from "react";
// import Logger from "./component/Logger";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Logger />
//       </div>
//     );
//   }
// }

// export default App;
////////////////////////////////////////////////////////////////////////////
//useEffect and lifeCycle(unmounting)

// import React from "react";
// import Logger from "./component/Logger";
// import { useState } from "react";

// const App = () => {
//   const [isShown, setIsShown] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setIsShown(false)}>delete</button>
//       {isShown && <Logger />}
//     </div>
//   );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////
//useEffect and http request

// import React from "react";
// import Data from "./component/Data";

// const App = () => {
//   return (
//     <div>
//       <Data />
//     </div>
//   );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////
//useContext

// import React from "react";
// import { useState } from "react";
// import ComA from "./component/ComA";
// export const NameContext = React.createContext();
// export const AgeContext = React.createContext();

// const App = () => {
//   const [name, setName] = useState("yasin");
//   return (
//     <div>
//       <NameContext.Provider value={name}>
//         <AgeContext.Provider value="19">
//           <ComA name={name} />
//         </AgeContext.Provider>
//       </NameContext.Provider>
//     </div>
//   );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////
//useReducer

// import React from "react";
// import NewCounterReducer from "./component/NewCounterReducer";
// import CounterReducer from "./component/CounterReducer";
// const App = () => {
//   return (
//     <div>
//      <NewCounterReducer/>
//       <CounterReducer />
//     </div>
//   );
// };

// export default App;
////////////////////////////////////////////////////////////////////////////
//useReducer for http Request

import React from "react";
import GetData from "./component/GetData";
const App = () => {
  return (
    <div>
      <GetData />
    </div>
  );
};

export default App;
