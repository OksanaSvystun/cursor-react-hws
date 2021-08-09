import React from "react";
import "./Post.css"

const Post = ({author, content, image, date}) => {
  return (
    <div className="post">
      <aside className="avatar-container">
        <img className="avatar" src={author.photo} alt="avatar"></img>
      </aside>
      <div className="post-info">
        <header className="post-header">
          <div className="post-header-info">
            <span className="author-name">{author.name}</span>
            <span>
              <svg
                width={18}
                height={18}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C4.47967 19.9939 0.00606237 15.5203 0 10V9.8C0.109931 4.30453 4.63459 -0.072041 10.1307 0.000882959C15.6268 0.0738069 20.0337 4.56889 19.9978 10.0653C19.9619 15.5618 15.4966 19.9989 10 20ZM5.41 9.59L4 11L8 15L16 7L14.59 5.58L8 12.17L5.41 9.59Z"
                  fill="#eee"
                />
              </svg>
            </span>
            <span className="author-nickname">{author.nickname}</span>
            <span className="post-date">{date}</span>
          </div>
          <div className="post-header-more">
            <button className="more-btn">
              <svg
                className="icon"
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.99999 7.71299L13.01 1.70299L11.597 0.287994L6.99999 4.88799L2.40399 0.287994L0.98999 1.70199L6.99999 7.71299Z" />
              </svg>
            </button>
          </div>
        </header>

        <main className="post-body">
          <p className="pots-content">{content}</p>
          <div className="post-img-container">
            <img className="post-image" src={image} alt="post-img"></img>
          </div>
        </main>

        <footer className="post-footer">
          <div className="post-action">
            <span className="icon-container">
              <svg
                className="icon"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.124 9.11361L2.12669 9.12637C2.50897 10.9413 3.73214 12.4995 5.46323 13.2864L9 14.894V13H11C13.7614 13 16 10.7614 16 8V7C16 4.23858 13.7614 2 11 2H7C4.23858 2 2 4.23858 2 7V8C2 8.38037 2.04211 8.74852 2.12115 9.10089L2.124 9.11361ZM11 18L4.63562 15.1071C2.31787 14.0536 0.68127 11.9677 0.169628 9.53858C0.0585895 9.0435 0 8.52859 0 8V7C0 3.13401 3.13401 0 7 0H11C14.866 0 18 3.13401 18 7V8C18 11.866 14.866 15 11 15V18Z" />
              </svg>
            </span>
            <span>482</span>
          </div>
          <div className="post-action">
            <span className="icon-container">
              <svg
                className="icon"
                width={18}
                height={18}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 20L0 16L4 12V15H14V11H16V16C16 16.5523 15.5523 17 15 17H4V20ZM4 9H2V4C2 3.44772 2.44772 3 3 3H14V0L18 4L14 8V5H4V9Z" />
              </svg>
            </span>
            <span>146</span>
          </div>
          <div className="post-action">
            <span className="icon-container">
              <svg
                className="icon-str"
                width={18}
                height={18}
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.9083 2.5783 8.50903 1.9987 7.05 1.9987C5.59096 1.9987 4.19169 2.5783 3.16 3.60999C2.1283 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z"
                  stroke="rgb(135, 135, 135)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>887</span>
          </div>
          <div className="post-action">
            <span className="icon-container">
              <svg
                className="icon-str"
                width={18}
                height={18}
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V11"
                  stroke="rgb(135, 135, 135)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5L9 1L5 5"
                  stroke="rgb(135, 135, 135)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 1V14"
                  stroke="rgb(135, 135, 135)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Post;