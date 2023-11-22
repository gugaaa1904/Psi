import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordCollaborator.module.css";

const ForgotPasswordCollaborator = () => {
  const navigate = useNavigate();

  const onButtonContinueContainerClick = useCallback(() => {
    navigate("/sign-in-collaborator");
  }, [navigate]);

  const onBackToSignClick = useCallback(() => {
    navigate("/sign-in-collaborator");
  }, [navigate]);

  return (
    <div className={styles.forgotPasswordCollaborator}>
      <div className={styles.logo}>
        <img className={styles.logo1Icon} alt="" src="/logo-13@2x.png" />
      </div>
      <div className={styles.content}>
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
        <div
          className={styles.buttonContinue}
          onClick={onButtonContinueContainerClick}
        >
          <b className={styles.button}>Continue</b>
        </div>
        <div className={styles.backToSignIn}>
          <b className={styles.backToSign} onClick={onBackToSignClick}>
            Back to Sign In
          </b>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordCollaborator;
