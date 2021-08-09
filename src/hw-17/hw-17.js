import "./hw-17.css";
import Post from "./components/Post";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const CHEWBAKA_IMAGE =
  "https://toppng.com/uploads/preview/star-wars-chewbacca-11530958962mhc1ubbijp.png";
const NEW_HOPE =
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/739533FC1779118EC0338823F555FEFA5BB55269F7639D0FE446685AA4EE94B3/scale?width=1200&aspectRatio=1.78&format=jpeg";

function HW17() {
  return (
    <div className="posts-container">
      <Post
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26/08/2021"}
      />
      <Post
        author={{
          name: "Chewbacca",
          photo: CHEWBAKA_IMAGE,
          nickname: "@wookiee",
        }}
        content="RAWRGWAWGGR"
        image={NEW_HOPE}
        date={"12/12/2020"}
      />
    </div>
  );
}

export default HW17;
