import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Lui bisa apa saja ?</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-comments" /></div>
          <h4>Bot Developer</h4>
          <p>Membuat chat bot di platfrom telegram, whatsapp, dan discord.</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-camera-retro" /></div>
          <h4>Professional Photographer</h4>
          <p>Bisa memotret foto dengan hasil yang indah.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-bug" /></div>
          <h4>Web Scraping</h4>
          <p>Bisa, Mengambil data situs untuk di gunakan di mana saja.</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p>Merakit situs menggunakan berbagai macam bahasa dan tema.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-address-book-o" /></div>
          <h4>Professional Editing</h4>
          <p>Bisa Memperbagus, membuat, dan mengedit foto, logo atau video.
            </p>
          </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-newspaper-o" /></div>
          <h4>Professional Detektif</h4>
          <p>Dapat menyelesaikan kasus yg penuh misteri.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
