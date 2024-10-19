import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Selain koding aku juga suka menulis loh.</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                 <a href="/blog/posts/20241018">
                  <img src="/imgs/blog/1.jpg" alt="Responsive Web Design" />
                 </a>
                  <div className="blog-date">Oktober 18, 2024</div>
                </div>
                <div className="blog-info">
                 <a href="/blog/posts/20241018">
                  <h4 className="blog-title">
                  Jenis Kucing Ras yang Cocok Dipelihara Anak
                  </h4>
                  <p className="blog-description">
                  Memiliki hewan peliharaan, khususnya kucing, dapat memberikan banyak manfaat bagi anak-anak. Selain menjadi teman bermain, kucing juga dapat mengajarkan anak-anak tentang tanggung jawab dan kasih sayang. Namun, tidak semua jenis kucing cocok untuk dipelihara anak-anak.
                  </p>
                  </a>
                  <p className="blog-tags">
                    Tags: <a href="/blog/posts/20241018">#HewanBuas</a>, <a href="/blog/posts/20241018">#Kucing</a>.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 1 End */}
            {/* Blog Item 2 */}
            {/* Blog Item 3 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
