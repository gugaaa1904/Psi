import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordADMIN.module.css";

const ForgotPasswordADMIN = () => {
  const navigate = useNavigate();

  const onBackToSignInClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-admin");
  }, [navigate]);

  return (
    <div className={styles.forgotPasswordAdmin}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        </div>
        <div className={styles.header}>
          <b className={styles.resetYourPassword}>Reset your password</b>
          <div className={styles.enterTheEmail}>
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </div>
        </div>
        <input
          className={styles.resetPassword}
          name="New Password"
          id="newpassword"
          placeholder="Enter your new Password"
          type="text"
        />
        <div className={styles.buttonContinue}>
          <b className={styles.button}>Continue</b>
        </div>
        <div className={styles.backToSignIn} onClick={onBackToSignInClick}>
          <b className={styles.backToSign}>Back to Sign In</b>
        </div>
        <div className={styles.dontHaveAnContainer}>
          <span>Don’t have an account?</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <b className={styles.signUp} onClick={onSignUpTextClick}>
          Sign Up
        </b>
      </div>
    </div>
  );
};

export default ForgotPasswordADMIN;
