import { useState } from 'react';
import { createUser } from '../api/users';

/**
 * Sign up form modal component.
 */
function SignUpFormModal(props) {
  /** Function to close to modal */
  const { close } = props;

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /** Handle state changes for form fields */
  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  /** Function that runs when submit is pressed */
  async function onSubmit(e) {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    /** All fields should be field */
    if (!username || !email || !password || !confirmPassword) {
      alert('All fields should be filled');
      return;
    }

    /** Password and confirmPassword must match */
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      await createUser(username, email, password);
      alert(`Sign up successfully done: ${username}`);
    } catch (error) {
      alert('Sign up failed');
    }
  }

  return (
    <div className="full-black-bg">
      <form className="form-modal" onSubmit={onSubmit}>
        <span className="form-modal-close" onClick={close}> X </span>
        <h1>Sign Up</h1>
        <div className="form-field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <input style={{ marginTop: '1rem' }} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUpFormModal;
