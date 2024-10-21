import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                   Hai, namaku Lui alias <span>Ahmad Luay</span>
                  </h2>
                  <p>
                    Oke! Singkat saja. saya adalah seorang pemuda yang ingin menjadi progremer modal hp ram 2gb.
                  </p>
                  <br></br>
                </div>
              </div>
              <div className="row">
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "98%" }} />
                        <div className="skill-percent">98%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "91%" }} />
                        <div className="skill-percent">91%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Golang</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>MySQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "20%"}} />
                        <div className="skill-percent">20%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Sekolah</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 - Sekarang
                          </h6>
                          <h4 className="timeline-title">
                            Al-Islam Joresan
                          </h4>
                          <p className="timeline-text">
                            Saat 2019 saya mulai bersekolah di MTS AL-Islam, Sampai 2022.
                            Dilanjutkan 2022 Akhir Tahun, saya melanjutkan di SMK AL-Islam sampai saat ini.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 - 2019
                          </h6>
                          <h4 className="timeline-title">
                            SDN 2 MAGUWAN
                          </h4>
                          <p className="timeline-text">
                           Pada tahun ini saya mendapatkan pelajaran dasar
                           di Sekolah Dasar yang tidak jauh dari rumahku.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 - 2014
                          </h6>
                          <h4 className="timeline-title">
                            TK DHARMA WANITA MAGUWAN
                          </h4>
                          <p className="timeline-text">
                            Di tahun ini lah aku mulai memiliki banyak teman
                            dan belajar membaca, menulis, dan menghitung
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Pengalaman</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 - Sekarang
                          </h6>
                          <h4 className="timeline-title">Koding</h4>
                          <p className="timeline-text">
                            Mulai tahun ini lah aku fokus koding menggunakan
                            aplikasi mimo, di karenakan tidak mempunya laptop.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023
                          </h6>
                          <h4 className="timeline-title">PKL</h4>
                          <p className="timeline-text">
                            Di tahun ini aku tidak belajar koding melainkan 
                            jaringan internet karena di utus oleh sekolahan
                            selama 6 bulan.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 - 2022
                          </h6>
                          <h4 className="timeline-title">Termux Hacking</h4>
                          <p className="timeline-text">
                            Tahun ininlah aku mulai kenal yang namanya pemrograman,
                            walaupun pada saat itu nggak jelas kayak install&quot; sana sini
                            tanpa tau kegunaannya.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
