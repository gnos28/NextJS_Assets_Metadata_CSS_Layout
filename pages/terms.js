import { useState } from "react";

export default function TermsPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      <p className="terms">By using this website, you agree to...</p>
      <label htmlFor="termsAccepted">Fine, I accept</label>
      <input
        id="termsAccepted"
        type="checkbox"
        checked={termsAccepted}
        onChange={(e) => {
          setTermsAccepted(e.target.checked);
        }}
      />
      <button
        onClick={() => {
          alert(
            termsAccepted
              ? "Thanks for agreeing, enjoy your stay here :)"
              : "😥"
          );
        }}
      >
        OK
      </button>
      <style jsx>{`
        .terms {
          font-size: 0.3rem;
        }
      `}</style>
    </>
  );
}
