import React from 'react';
import './Story.css';
import storyImage from './story.jpg'; // Import your story image here
import { Link } from 'react-router-dom';


function Story() {
  return (
    <div>
         <div className="navbar">
  <Link to="">Home</Link>
  <div className="dropdown">
    <button className="dropbtn">Genre </button>
    <div className="dropdown-content">
      <Link to="/lifestyle">Lifestyle</Link>
      <Link to="/lifestyle">Love</Link>
      <Link to="/lifestyle">Crime</Link>
      <Link to="/lifestyle">Mythology</Link>
      <Link to="/lifestyle">Sports</Link>
      <Link to="/lifestyle">Comedy</Link>
      <Link to="/lifestyle">Horror</Link>
      <Link to="/lifestyle">History</Link>
      <Link to="/lifestyle">Kids</Link>
    </div>
  </div>
  <Link to="/shortstory">ShortStory</Link>
  
  <Link to="/contact">Contact Us</Link>
  <Link to="/faq">Sign In</Link>
  
  
 
  <div className='rr'>
  <div className="dropdown">
  
    <div className="dropdown-content">
    
     
     
      </div>
    </div>
    </div>

</div>
    <div className="story-container">
        <br></br>
      <h1 className="story-title">The Adventure Begins</h1>
      <img src={storyImage} alt="Story" className="story-image" />
      <p className="story-content">

      <h4> In a tranquil village nestled between rolling hills and lush meadows, there lived a dog named Bailey. Bailey was a golden retriever with a heart as warm as his golden coat. From the moment he entered the world as a wiggling, curious pup, it was clear that his life would be nothing short of extraordinary.</h4>

      <h1>Chapter 1: The Arrival of BaileyBailey's tale began one crisp autumn morning,</h1>

 when he was born in the cozy barn of the Thompson family farm. His mother, a gentle and wise golden retriever named Rosie, greeted her newborns with tender licks and a watchful eye. Bailey was the only pup in the litter, and from the very start, he was the center of attention. His soft, golden fur glistened in the morning sun, and his dark eyes sparkled with curiosity.As Bailey grew, he explored every nook and cranny of the Thompson farm. He chased after butterflies in the meadows, splashed in the cool waters of the nearby stream, and rolled in the freshly harvested hay. The Thompson children, Emily and Ben, adored him. They played endless games of fetch, taught him tricks, and shared their secrets with their loyal friend.

 <h1>Chapter 2: Seasons of AdventureBailey's life was a whirlwind of adventure.</h1>

 With each passing season, the farm offered new wonders to discover. In the spring, he would accompany Emily and Ben as they planted seeds in the garden, his tail wagging as he dug alongside them. During the hot summer days, he found solace in the shade of the old oak tree, watching the world go by. In the autumn, he leaped through piles of fallen leaves, his joyful barks echoing through the orchard.Winter brought a blanket of snow, transforming the farm into a winter wonderland. Bailey's enthusiasm was boundless as he chased snowflakes, his paws leaving delicate imprints in the powdery snow. He was Emily and Ben's steadfast companion during snowball fights and sledding adventures.

 <h1>Chapter 3: A Time of Growth</h1>

As the years passed, Bailey grew not only in size but also in wisdom. He watched over the farm with a sense of responsibility, alert to any intruders or potential dangers. His bond with the Thompson family deepened, and he became more than just a pet; he was a cherished member of the family.

Emily and Ben, too, grew into responsible young adults. They left for college, but Bailey remained behind, his loyalty unwavering. He continued to accompany Mr. Thompson during his daily chores, trotting alongside the tractor as they worked the fields. Together, they shared the peaceful moments of a country life—sunsets over the rolling hills, the chorus of crickets on warm summer nights, and the simple joy of a shared meal on the porch.

<h1>Chapter 4: A Journey Beyond the Farm</h1>

One crisp autumn day, a letter arrived at the Thompson farmhouse. It was from Emily, who had graduated from college and was now living in a bustling city. She invited her family, including Bailey, to visit her and experience the excitement of the urban world. Mr. Thompson and Bailey accepted the invitation with enthusiasm.

The journey to the city was an adventure in itself. Bailey, with his head out of the car window, felt the rush of the wind against his face as they sped down the highway. The city, with its towering buildings and bustling streets, was a stark contrast to the peaceful farm. Yet, Bailey embraced the new experiences with his characteristic curiosity and boundless energy.

<h1>Chapter 5: The City Lights</h1>

During their city visit, Bailey marveled at the city lights, the honking horns, and the diversity of scents that filled the urban landscape. He accompanied Emily on walks through the bustling streets, where he greeted strangers with a friendly wag of his tail, bringing smiles to the faces of passersby.

In the evenings, Bailey curled up on Emily's apartment balcony, gazing at the city skyline with a sense of wonder. The sirens and noises of the city were a stark contrast to the tranquility of the farm, but he found comfort in being by Emily's side.

<h1>Chapter 6: The Circle of Life</h1>

As time passed, Bailey grew older, and his steps became slower. His once-vibrant golden coat began to show traces of gray. Emily, now a successful architect, married and had children of her own. Bailey became a gentle and patient companion to Emily's children, just as he had been to Emily and Ben.

During his twilight years, Bailey would lie in the garden, basking in the warm sun, and reminiscing about his many adventures. He remembered the days of chasing butterflies, the joy of rolling in the meadows, and the excitement of city life. But most of all, he treasured the moments spent with the Thompson family—the shared laughter, the comforting presence, and the unspoken bond that had defined his life.

One serene evening, as the sun dipped below the horizon, Bailey closed his eyes for the final time, surrounded by the love of the Thompson family. His journey had been one of loyalty, love, and unwavering companionship. He left behind pawprints on the hearts of generations, a testament to the profound bond between humans and their four-legged friends.d by the love of the Thompson family. His journey had been one of loyalty, love, and unwavering companionship. He left behind pawprints on the hearts of generations, a testament to the profound bond between humans and their four-legged friends.
     </p>
    </div>
    <div className="footer"> 
     <Link to="/terms"><div className="hlo">Terms&conditions</div></Link>
     <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
     <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023.All rights reserved</div></Link>
     
  </div>
    </div>
  );
}

export default Story;
