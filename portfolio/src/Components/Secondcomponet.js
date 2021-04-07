import React from 'react'

const SecondComponent = () => {
    return (
        <body>
<section id="about-me">
<h1>
  Hello, my name is
  <span class="rotate text-important">John doe</span>,<br />
  and i make horrible websites.
</h1>
<img class="avatar" src="/images/John-Doe.jpg" alt="jhon-doe" />
</section>
<section id="projects">
<h2 class="text-important">Projects</h2>
<div class="projects-container">
  
  <div class="project-card">
    <img src="/images/proj1.jpg" alt="project" />
    <h3>Project 1</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
      aliquam.
    </p>
    <p><a href="#">Github Link</a></p>
  </div>
 
  <div class="project-card">
    <img src="/images/proj2.jpg" alt="project" />
    <h3>Project 2</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
      aliquam.
    </p>
    <p><a href="#">Github Link</a></p>
  </div>

  <div class="project-card">
    <img src="/images/proj3.jpg" alt="project" />
    <h3>Project 3</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
      aliquam.
    </p>
    <p><a href="#">Github Link</a></p>
  </div>

  <div class="project-card">
    <img src="/images/proj4.jpg" alt="project" />
    <h3>Project 4</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
      aliquam.
    </p>
    <p><a href="#">Github Link</a></p>
  </div>
</div>
</section>
<section id="contact">
<h2 class="text-important">contact me</h2>
<form>
  <label>Full Name</label>
  <input type="text" placeholder="Email" />
  <label>Email</label>
  <input type="email" placeholder="Email" />
  <label>Message</label>
  <textarea rows="5" cols="40"></textarea>
  <button>Send</button>
</form>
</section> 
</body>);
}
export default SecondComponent;