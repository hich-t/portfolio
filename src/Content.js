

const Content = () => {

    return(
        <div className="contentpage">
        {/* paris together */}
        <div className="contentframe"> 
        <a href="https://paris-together-front.vercel.app/" target="_blank" rel="noreferrer noopener">
        <img className="websitethumbs" src="../paristogether_screen.png" alt="screenshot paristogether"/>
        </a>
        <div className="projectdescription">
        <h2>Paris Together</h2>
        <p>Paris Together was the last project we made at Ironhack.<br/>
        Back-end : Node.js Express Mongoose / Front : ReactJS (some MUI)<br />
        The idea was to make a website that brought people together with all the differents events that the great city of Paris could offer. 
        <br />
        (The back-end is also deployed on Vercel so it might be slow)<br/>
        <a className="repolinks" href="https://github.com/hich-t/ParisTogether_Front" target="_blank" rel="noreferrer noopener" >Repo Link</a>
        </p>
        </div>
        </div>


        {/* poke arena */}
        <div className="contentframe"  > 
        <a href="https://pokearena.vercel.app/" target="_blank" rel="noreferrer noopener">
        <img className="websitethumbs" src="../pokearena_screen.png" alt="screenshot paristogether"/>
        </a>
        <div className="projectdescription">
        <h2>Poke Arena (React)</h2>
        <p>My favourite project, especially design-wise, where I tried to re-create the atmosphere of the original game-boy games<br/> The concept is quite simple, you choose 4 pokemons amongst the 1st gen, then you can battle the four first gym leaders of the game.<br/>
        The fight mechanic is still a WIP. Project made in 3 days.<br/>
        <a className="repolinks" href="https://github.com/hich-t/Pokearena" target="_blank" rel="noreferrer noopener">Repo Link</a>
        </p>
        </div>
        </div>

           {/* Iron Duck */}
           <div className="contentframe" > 
         <a href="https://project-week3-game.vercel.app/" target="_blank" rel="noreferrer noopener">
        <img className="websitethumbs" src="../ironduck_screen.png" alt="screenshot paristogether"/>
        </a>
        <div className="projectdescription">
        <h2>Iron Duck (JS)</h2>
        <p>One of the first projects I made at Ironhack<br />
        We made a simple little game, with JS, where you have to avoid
        obstacles by jumping above them. <br/>
        Original character design.<br/>
        <a className="repolinks" href="https://github.com/hich-t/project-week3-game" target="_blank" rel="noreferrer noopener">Repo Link</a>
        </p>
        </div>
        </div>



           {/* hackernews */}
           <div className="contentframe" >  
        <a href="https://clonehackernews.vercel.app/" target="_blank" rel="noreferrer noopener">
        <img className="websitethumbs" src="../hackernews_screen.png" alt="screenshot paristogether"/>
        </a>
        <div className="projectdescription">
        <h2>Hackernews Clone (React)</h2>
        <p>Our first project with React<br />
        We made a clone of the famous tech-news website Hackernews, using their API. <br/>
        <a className="repolinks" href="https://github.com/hich-t/clonehackernews" target="_blank" rel="noreferrer noopener">Repo Link</a>

        </p>
        </div>
        </div>

        {/* AnimDB */}
        <div className="contentframe" > 
        <a href="https://anim-db.vercel.app/" target="_blank" rel="noreferrer noopener">
        <img className="websitethumbs" src="../animedb_screen.png" alt="screenshot paristogether"/>
        </a>
        <div className="projectdescription">
        <h2>Anim DB (React)</h2>
        <p>A little project we made in 2 days, fetching data from an Anime API. <br/>
        <a className="repolinks" href="https://github.com/hich-t/Anim-DB" target="_blank" rel="noreferrer noopener">Repo Link</a>
        </p>
        </div>
        </div>


        </div>
    )
}

export default Content