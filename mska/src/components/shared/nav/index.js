import React from "react";

export default function Nav() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center py-2 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 50 50"
            className="me-2"
          >
            <path
              fill="#000000"
              d="M25,3C13.317,3,3,13.317,3,25c0,11.683,10.317,22,22,22s22-10.317,22-22C47,13.317,36.683,3,25,3z M25,42.5c-10.851,0-19.5-8.649-19.5-19.5S14.149,3.5,25,3.5s19.5,8.649,19.5,19.5S35.851,42.5,25,42.5z M30.209,19.628l-1.185,0.787c-0.483,0.321-0.644,0.965-0.324,1.449c0.164,0.247,0.431,0.369,0.698,0.369c0.288,0,0.575-0.126,0.769-0.377l1.185-1.57c0.321-0.483,0.161-1.128-0.324-1.449c-0.483-0.321-1.128-0.161-1.449,0.324L30.209,19.628z M19.791,19.628l1.185,0.787c0.321,0.483,0.965,0.644,1.449,0.324c0.247-0.164,0.369-0.431,0.369-0.698c0-0.288-0.126-0.575-0.377-0.769l-1.185-1.57c-0.321-0.483-1.128-0.644-1.449-0.324c-0.321,0.483-0.161,1.128,0.324,1.449L19.791,19.628z M33,31.5c-1.105,0-2-0.895-2-2s0.895-2,2-2s2,0.895,2,2S34.105,31.5,33,31.5z M17,31.5c-1.105,0-2-0.895-2-2s0.895-2,2-2s2,0.895,2,2S18.105,31.5,17,31.5z"
            />
          </svg>
          <strong className="fs-4">MSKA</strong>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Features
          </a>
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Enterprise
          </a>
          <a
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            href="#"
          >
            Support
          </a>
          <a className="py-2 link-body-emphasis text-decoration-none" href="#">
            Pricing
          </a>
        </nav>
      </div>
    </>
  );
}
