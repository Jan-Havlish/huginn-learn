import "./index.css";

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Privacy from "./pages/Privacy.jsx";
import MyContent from "./pages/MyContent.jsx";
import Discover from "./pages/Discover.jsx";
import Post from "./pages/Post.jsx";
import Profile from "./pages/Profile.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import UserProvider from "./context/userProvider.jsx";

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <main className="flex-grow mt-16 p-2">{props.children}</main>
      <Footer />
    </div>
  );
};

render(
  () => (
    <UserProvider>
      <Router root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/my-content" component={MyContent} />
        <Route path="/user/:username" component={Profile} />
        <Route path="/user/:username/post/:post_id" component={Post} />
        <Route path="/discover" component={Discover} />
        <Route path="/about" component={About} />
        <Route path="*" component={() => "404"} />
      </Router>
    </UserProvider>
  ),
  document.getElementById("root"),
);
