// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from "react-responsive-carousel";
const Search=()=> {
//   let getMoviesList =()=>{
//     let url = `http://localhost:3030/api/get-movies-list`
//     fetch(url, {method:GET})
//   }
    return(
        <>
        <div className=" bg-black d-flex justify-content-between col-12">
  <div className="">
    <div
      className=""
      
    >
      <div className="">
        <div className="m-4 d-flex flex-row justify-content-between">
          <img
            src={require('../Netflix-Logo-2.jpg')}
            alt="ivy"
            style={{
              width: 70,
              height: 30,
              cursor: "pointer",
              marginRight: 8,
              padding:3
            }}
          />
          <div className="">
            <button className="btn btn-light btn-outline-success mx-5">
              Subscribe
            </button>
          </div>
          <div className="">
            <a
              className="mx-4"
              href="/"
            >
              Home
            </a>
          </div>
          <div className="mx-5">
            <a
              className=""
              href="/sports"
            >
              Sports
            </a>
          </div>
          <div className="mx-5">
            <a
              className=""
              href="/movies"
            >
              Movies
            </a>
          </div>
          <div className="mx-5">
            <a
              className=""
              href="/tv-shows"
            >
              TV Shows
            </a>
          </div>
          <div className="mx-5">
            <a
              className=""
              href="/news"
            >
              News
            </a>
          </div>
          <div>
            <button  className="btn btn-light btn-outline-success mx-5">Search</button>
          </div>
          <div className="mx-5" />
          <div>
            <img
              src="https://v3img.voot.com/v3Storage/menu/jv/search.svg"
              alt="SEARCH"
              className=""
            />
          </div>
          <div>
            <div className="">
              <button
                type="button"
                className=""
                aria-live="polite"
              >
                <span className="" />
                <div
                  className=""
                  tabIndex={-1}
                  aria-label="Profile"
                >
                  <img
                    src="images/profile_avatar-v2.svg"
                    className="avatar-profile"
                  />
                </div>
              </button>
            </div>
            <div>
              <div />
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    
  </div>
</div>

        </>
    );
};


export default Search