"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
           Lui
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/tentang"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <i className="fa fa-user" /> Siapa sih lui itu ?
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/keahlian"
              className={`${pathUrl == "/keahlian" && "active"}`}
            >
              <i className="fa fa-list" /> Bisa apa saja ?
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/project"
              className={`${pathUrl == "/project" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Karyanya apa saja ?
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>
              <i className="fa fa-envelope" /> Adakah artikel ?
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/kontak"
              className={`${pathUrl == "/kontak" && "active"}`}
            >
              <i className="fa fa-comments" /> Hubungi aku ?
            </Link>
          </li>
        </ul>
        <div className="copyright">
          Di Buat Ulang Oleh <i className="fa fa-plane"></i> {" "}
          <a href="http://lui.biz.id" target="_blank" rel="noopener noreferrer">
            Lui
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
