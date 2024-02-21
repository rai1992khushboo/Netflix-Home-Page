// import {useEffect} from "react";
import {useState} from "react";

const Home=()=>{
  let[newUser, setNewUser] = useState({
    email: "",
    
  })
return(
  <>
  <section className="bg-black">
  <div className="modal modal-show-transform  modal-className-background" id="modalUserNewForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content m-5">
          <div className="modal-header mx-5 my-5 mt-3 mb-3">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Sign In</h1>
            <button type="button" className="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body col-12 ms-5 me-5">
              <div className="mb-3">
                 <input className="col-9 pt-2 pb-2 mb-3" type="text" placeholder="Email or phone number"
                 value=""
                 />
          </div>
          <div className="mb-3">
              <input className="col-9 pt-2 pb-2 mb-3" type="password" placeholder="password"
              value=""
              onChange={()=>{}} />
          </div>
          <div>
              <button type="button" className="btn btn-primary col-9" data-bs-dismiss="modal"> Sign In
              </button>
  </div>
  <div className="m-2">
    <input type="checkbox" />
    <span>Remember me</span>
    <a href="">Need help?</a>
  </div>
</div>

          <div className="m-5 ">
            <p className="">New to Netflix?<a href="/">Sign up now.</a></p>
            <p className="">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>
          </div>
        </div>
      </div>
    </div>
  <main>
      <section>
          <section className="netflix-background border-bottom border-5 border-dark-subtle ">
              <header className="col-10 offset-1 d-flex justify-content-lg-between">
                  <img className="netflix-name mt-3" src={require('../Netflix-Logo-2.jpg')}
                  alt="img"/>
                  <section>
                  <select className="bg-transparent btn btn-outline-light text-white mt-3 pe-3 ps-3">
                      <option className="text-black" value="English">English</option>
                      <option className="text-black" value="Hindi">Hindi</option>
                  </select>
                  <button className="btn btn-danger text-white mt-3 pe-3 ps-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalUserNewForm">Sign In</button>
                  </section>
              </header>
              <section className="col-10 offset-1 netflix-1 d-flex m-auto flex-column align-items-center">
                  <h1 className="text-white fw-bold p-0">Enjoy big movies, hit series and more from</h1>
                  <h1 className=" fw-bold text-white p-0">₹ 149.</h1>
                  <p className="text-white fs-4 p-0">Join today. Cancel anytime.</p>
                  <p className="text-white  p-0">Ready to watch? Enter your email to create or restart your membership.</p>
                  <span className="d-flex col-5 offset-1 gap-1">
                    <div className="form-floating border-radius rounded-0 col-8 ">
                        <input type="email" className="form-control text-white bg-transparent" id="floatingInput" placeholder="name@example.com"
                        value={newUser.email}
                        />
                        <label className=""
                        onChange={(event)=>{ setNewUser({...newUser, email:event.target.value});
                      } }>Email address</label>
                      </div>
                  <button className="btn btn-danger text-white">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>
              </span>
              </section>
          </section>
            <section className=" border-bottom border-5 border-dark-subtle">
                <section className="d-flex col-10 offset-1">
                <section className="second-section-img">
                    <h1 className="text-white ">Enjoy on your TV</h1>
                    <p className="text-white fw-bold ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </section>
                <section className="image-video-section">
                     <img src="images/tv.png" alt="img"/>
                     <video src="videos/video-tv-in-0819.m4v" autoplay loop></video>
                </section>
            </section>
            </section>
            <section className="border-bottom border-5 border-dark-subtle main-animation-section">
              <section className="d-flex col-3 border bg-black border-2 border-dark-subtle rounded-2  animation-section">
                  <div>
                      <img className="book-image-size ms-2" src="images/boxshot.png" alt=""/>
                  </div>
                  <section className="d-flex">
                      <section className="me-3 ms-2">
                          <p className="fs-5 mb-0 text-white">Stranger Things</p>
                          <p className="text-primary">Downloading...</p>
                      </section>
                      <section className="ms-4">
                          <img className="animation-img-size" src="videos/download-icon.gif" alt=""/>
                      </section>
                  </section>
                </section>
              <section className="d-flex col-10 offset-1">
              <img src="images/mobile-0819.jpg" alt="img"/>
              <section className="second-section-img">
                  <h1 className="text-white">Download your shows to watch offline</h1>
                  <p className="text-white ">Save your favourites easily and always have something to watch.</p>
              </section>
          </section>
          </section>
            <section className="border-bottom border-5 border-dark-subtle">
            <section  className="d-flex col-10 offset-1 mt-5 image-video-section2" >
                <section className="second-section-img">
                    <h1 className="text-white ">Watch everywhere</h1>
                    <p className="text-white ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </section>
                <img src="images/device-pile-in-rajmachawal.png" alt="img"/>
                <video src="videos/video-devices-in.m4v" autoplay loop></video>
            </section>
           </section>
           <section className="border-bottom border-5 border-dark-subtle">
            <section  className="d-flex col-10 offset-1">
                <img src="images/kids-cartoon.png" alt="img"/>
                <section className="second-section-img">
                    <h1 className="text-white ">Create profiles for kids</h1>
                    <p className="text-white ">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </section>
            </section>
        </section>
        <section className="col-10 offset-1 mb-5 accordion-group" id="my-group">
            <h1 className="text-white d-flex justify-content-center " >Frequently Asked Questions </h1> 
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ1">
            <span className="fs-3 text-white ps-2">What is Netflix?</span>
          <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ1" className="collapse col-10 offset-1 text-white accordion-collapse" data-bs-parent="#my-group">
              <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            </aside>
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ2">
            <span className="fs-3 text-white ps-2"> How much does Netflix cost?</span>
          <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ2" className="collapse col-10 offset-1 text-white accordion-collapse" data-bs-parent="#my-group">
              <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </aside>
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ3">
            <span className="fs-3 text-white ps-2">Where can I watch?</span>
          <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ3" className="collapse col-10 offset-1 text-white accordion-collapse" data-bs-parent="#my-group">
              <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </aside>
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ4 ">
            <span className="fs-3 text-white ps-2">Is Netflix good for kids?</span>
          <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ4" className="collapse col-10 offset-1 text-white" data-bs-parent="#my-group">
              <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
        
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you do not want kids to see.</p>
            </aside> 
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ5">
            <span className="fs-3 text-white ps-2"> How do I cancel?</span>
          <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ5" className="collapse col-10 offset-1 text-white" data-bs-parent="#my-group">
              <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime.</p>
            </aside> 
            <p className="col-10 offset-1 d-flex justify-content-between gap-2 border border-black bg-secondary" 
            data-bs-toggle="collapse" data-bs-target="#FAQ6 ">
            <span className="fs-3 text-white ps-2"> What can I watch on Netflix?</span>
            <span><i className="fa fa-plus fs-3 text-white fw-lighter p-2" aria-hidden="true"></i></span> </p>
            <aside id="FAQ6" className="collapse col-10 offset-1 text-white" data-bs-parent="#my-group">
              <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </aside>
            <section className="col-6 offset-4">
                <p className="text-white">Ready to watch? Enter your email to create or restart your membership.</p>
                   <span classNames="col-8 offset-4 form-floating">
                    <input className="border border-0 rounded-0 pt-1 pb-2" value="" placeholder="Email address"/>
                    <button className="btn btn-danger border border-0 rounded-0 text-white">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i> </button>
                  </span>
            </section>
          </section>
            <footer>
                <p className="text-secondary col-10 offset-1">Questions? Call 000-800-919-1694</p>
                <section className="d-flex col-10 flex-wrap offset-1 text-decoration-underline">
                <div className="col-3">
                    <a className="text-secondary" href="">FAQ</a>
                 </div>
                 <div className="col-3">
                    <a className="text-secondary" href="">Media Center</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Ways to Watch</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Cookie Preferences</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Speed Test</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Help Centre</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Investor Relations</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Terms of use</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Corporate Information</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Legal Notices</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Account</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Jobs</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Privacy</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Contact Us</a>
                </div>
                <div className="col-3">
                    <a className="text-secondary" href="">Only on Netflix</a>
                </div>
                </section>
                <select className=" bg-secondary text-white p-2 gap-3 col-2 offset-1">
                    <option value="English"><i className="fa fa-language" aria-hidden="true"></i>English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <p className="text-secondary col-10 offset-1">Netflix India</p>
            </footer>
        </section>

    </main>
  </section>
  </>
)

};

export default Home