import Link from "next/link";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <div>
      <p>Hello Wilder !</p>
      <p>
        <Link href="/terms">
          <a>Terms of use</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  );
}
