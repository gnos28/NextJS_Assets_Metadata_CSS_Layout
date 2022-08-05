import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <div>
      <p>Hello Wilder !</p>

      <div
        className="img-container"
        style={{
          backgroundColor: "red",
        }}
      >
        <Image
          width="100%"
          height="100%"
          src="/boss.png"
          alt=""
          layout="responsive"
        />
      </div>
      <div
        className="img-container"
        style={{
          backgroundColor: "yellow",
        }}
      >
        <Image
          width="100%"
          height="100%"
          src="/profile_4000w.jpg"
          alt=""
          layout="responsive"
        />
      </div>
      <style jsx>{`
        div.img-container {
          width: 50vw;
          height: 200px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
