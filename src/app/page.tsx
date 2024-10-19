
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Ahmad Lu'i</h1>
            <p>#PonorogoHebat #SMKbisa!</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
               <h5>Follow ig saya <i className="fa fa-instagram"></i></h5>
              </a>
              <a href="https://github.com/luiii24/" target="_blank">
              <h5>Dan follow githubku juga dong <i className="fa fa-github"></i></h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
