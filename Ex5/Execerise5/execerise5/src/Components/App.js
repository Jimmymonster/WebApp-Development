import "./App.css";
import "./Block.js";
import Block from "./Block.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Text-on-Top"> โหวตอาหาร</p>
        <Block
          foodtype="อาหารคาว"
          foodname="Yakiniku"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent ex nisi, pulvinar eget orci eget, pulvinar egestas erat. Fusce nibh urna, varius id ipsum sed, semper pulvinar nisi. 
          In maximus semper tristique. Curabitur luctus mollis elit, vel dictum lorem gravida ac. Nulla condimentum fermentum augue quis
          ornare. Integer non augue ac est pretium semper vestibulum id orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Phasellus efficitur tincidunt lectus sed porta. Nam tincidunt ipsum at lectus interdum, et rutrum nisl dapibus.
          Suspendisse fermentum lorem erat, eu consectetur lectus viverra sed. Sed vestibulum justo ipsum, sed volutpat odio porta id. Nunc euismod tortor eu mattis imperdiet."
          image="https://kiji.life/eats/wp-content/uploads/2019/07/DSC_8184.jpg"
          alt="Yakiniku image"
        />
        <Block
          foodtype="อาหารหวาน"
          foodname="Kakigori"
          description="Aenean vel nibh non ipsum faucibus mattis vitae et nibh. Maecenas vitae nisi tortor. Pellentesque et arcu magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vitae ante nec sem lobortis scelerisque. Donec quis pulvinar nibh. Vivamus commodo, diam non venenatis pharetra, lorem lectus pharetra odio, ac pulvinar risus tellus ut ante. Praesent rutrum erat vitae ornare condimentum."
          image="https://www.thespruceeats.com/thmb/KR4RwctcmwZJtssi_9OVlEbfIH4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ujikintoki-5844c6d93df78c023040af19.jpg"
          alt="Yakiniku image"
        />
      </header>
    </div>
  );
}

export default App;
