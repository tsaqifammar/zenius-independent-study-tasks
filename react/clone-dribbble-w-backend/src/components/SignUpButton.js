import { useState } from "react";
import SignUpFormModal from "./SignUpFormModal";

function SignUpButton() {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setFormIsOpen(true)} className="btn sign-up">Sign up</button>
      {formIsOpen && <SignUpFormModal close={() => setFormIsOpen(false)} />}
    </>
  );
}

export default SignUpButton;
