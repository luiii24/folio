import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Maaf masih pemula</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                <a href="https://github.com/luiii24/elgo" target="_blank" rel="noopener noreferrer">
                  <h4>Whatsapp bot Golang</h4>
                  <p>Sebuah Base Program Whatsapp chatbot yang menggunakan bahasa Golang.</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                </div>
                </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/2.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://github.com/luiii24/botwwebjs" target="_blank" rel="noopener noreferrer7">
                  <h4>Whatsapp bot JS</h4>
                  <p>Masih sama, seperti di atas bedanya ini make javascript.</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/3.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://raw.githubusercontent.com/luiii24/botwwebjs/refs/heads/master/y2mate.js" target="_blank" rel="noopener noreferrer">
                  <h4>Youtube Downloader Scraper JS</h4>
                  <p>Sebuah script scraper yang berguna untuk mengambil sumber url mp4/mp3 menggunakan input url.</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://raw.githubusercontent.com/luiii24/elgo/refs/heads/master/kidung/downloader/tiktok.go" target="_blank" rel="noopener noreferrer">
                  <h4>Tiktok Downloader scraper Go</h4>
                  <p>Sebuah scraper yg berguna untuk mengambil link asli mp4/mp3 pada input url.</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://studious-space-goldfish-j6wqv4pw5jgcq4g5-3000.app.github.dev/imgs/portfolio/5.jpg" target="_blank" rel="noopener noreferrer">
                  <h4>Photographer</h4>
                  <p>Hasil pemotretan ku yang menggunakan hp 1 jutaan.</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://studious-space-goldfish-j6wqv4pw5jgcq4g5-3000.app.github.dev/imgs/portfolio/6.jpg" target="_blank" rel="noopener noreferrer">
                  <h4>Logo Design</h4>
                  <p>Logo yang saya buat untuk teman saya tapi ternyata jelek katanya, ckp tw. :)</p>
                  <div className="icon">
                    <i className="fa fa-reply-all" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
