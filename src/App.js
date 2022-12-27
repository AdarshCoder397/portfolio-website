import "./App.css";
import Button from "@mui/material/Button";
import myImg from "./img/my.jpeg";
import pizzaHolic from "./img/pizza-holic.png";
import whatsapp from "./img/whatsapp.png";
import crypto from "./img/crypto.png";
import youtube from "./img/youtube.png";
import keter from "./img/keter.png";
import recipe from "./img/recipe.png";

function App() {
  const projects = [
    {
      name: "Pizza Holic",
      img: pizzaHolic,
      desc: "It's a website for a pizza outlet in Bihar,India",
      repo: "https://github.com/AdarshCoder397/Pizza-holic",
      link: "https://pizza-holic-adarsh397.vercel.app/",
    },
    {
      name: "Whatsapp Clone",
      img: whatsapp,
      desc: "It's a whatsapp clone with chat,room and login functionality",
      repo: "https://github.com/AdarshCoder397/whatsapp-clone",
      link: "http://whatsapp-clone-adarsh-adarsh397.vercel.app/",
    },
    {
      name: "YoutubeUI Clone",
      img: youtube,
      desc: "It's a youtubeUI Clone made using Reactjs and MaterialUI as UI Library!",
      repo: "https://github.com/AdarshCoder397/youtube-clone",
      link: "https://youtube-clone-adarsh397.vercel.app/",
    },
    {
      name: "Crypto Price Tracker",
      img: crypto,
      desc: "It's a crypto price tracker which fetchs data from coingecko api!",
      repo: "https://github.com/AdarshCoder397/crypto-tracker",
      link: "https://crypto-tracker-nu-ashy.vercel.app/",
    },
    {
      name: "Keter",
      img: keter,
      desc: "It's a online catering service booking website!",
      repo: "https://github.com/AdarshCoder397/keter",
      link: "https://keter-adarsh397.vercel.app/",
    },
    {
      name: "Recipe Book",
      img: recipe,
      desc: "It's a website which has recipe of different food items!",
      repo: "https://github.com/AdarshCoder397/recipe-app",
      link: "https://recipe-book-56ic98wea-adarsh397.vercel.app/",
    },
  ];
  return (
    <div className="App">
      <h5>HI , I AM</h5>
      <h2>
        <span>Adarsh kumar.</span>
      </h2>
      <h1>
        <span>I am a Full Stack Reactjs Developer!</span>🚀
      </h1>
      <p className="p_top">I like building websites for Homo sapiens!</p>
      <p className="p_bot">Currently I am helping people to build their</p>
      <p className="p_bot2">
        websites for their business and for any other purposes📈!
      </p>
      <div className="apply_btn">
        <a href="https://www.linkedin.com/in/adarsh397k/" target={"_blank"}>
          <Button className="apply" variant="contained">
            Want me to work with you?
          </Button>
        </a>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="me">
        <div className="me_info">
          <h2>Adarsh Kumar</h2>
          <p>
            I am student and having 1 year of experience in website creation
            using Reactjs and currently I am willing to help brand and
            individuals build their website.I have won swags and badges in
            Hacktoberfest'22{" "}
          </p>
          <div className="skills">
            <div className="js">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                style={{ height: "50px" }}
              />
              <h2>Javascript</h2>
            </div>
            <div className="rjs">
              <img
                src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                style={{ height: "50px" }}
              />
              <h2>ReactJs</h2>
            </div>
            <div className="fb">
              <img
                src="https://www.gstatic.com/devrel-devsite/prod/vdbc400b97a86c8815ab6ee057e8dc91626aee8cf89b10f7d89037e5a33539f53/firebase/images/touchicon-180.png"
                style={{ height: "50px" }}
              />
              <h2>Firebase</h2>
            </div>
          </div>
          <div className="apply_btn">
            <a href="https://github.com/AdarshCoder397" target="_blank">
              <Button variant="outlined" className="git">
                Github
              </Button>
            </a>
          </div>
        </div>
        <img src={myImg} className="myImg" />
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="projects">
        <h2>My Projects💻</h2>
        <div className="flex_div">
          {projects.map((project) => {
            return (
              <div className="project">
                <img src={project.img} alt={project.name} />
                <h4>{project.name}</h4>
                <p>{project.desc}</p>
                <div className="btns">
                  <a href={project.repo} target="_blank">
                    <Button variant="contained" className="repo">
                      Repo
                    </Button>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    <Button variant="contained" className="link">
                      Link
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hire">
        <div className="hr">
          <hr />
        </div>
        <h2>Work🤝</h2>
        <h4>Want me to build websites for you?</h4>
        <div className="apply_btn" style={{ marginTop: "3vmax" }}>
          <a href="https://www.linkedin.com/in/adarsh397k/" target="_blank">
            <Button variant="contained" className="linkedin">
              Hit me up on linkedin!
            </Button>
          </a>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="follow">
        <h2>My Socials</h2>
        <a href="https://www.instagram.com/adarsh.code/" target="_blank">
          <div className="ig">
            <img
              src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-veav8sed.png"
              alt="ig"
            />
            <h4>Instagram</h4>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/adarsh397k/" target="_blank">
          <div className="lin">
            <img
              src="https://static-00.iconduck.com/assets.00/linkedin-original-icon-512x512-myo6evy9.png"
              alt="ig"
            />
            <h4>Linkedin</h4>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
