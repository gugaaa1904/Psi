import { useState, useCallback } from "react";
import PopUpChangePassword from "../components/PopUpChangePassword";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsADMIN.module.css";

const SettingsADMIN = () => {
  const [isPopUpChangePasswordOpen, setPopUpChangePasswordOpen] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userOldpassword, setUserOldpassword] = useState("");
  const [userNewpassword, setUserNewpassword] = useState("");

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPopUpChangePassword = useCallback(() => {
    setPopUpChangePasswordOpen(true);
  }, []);

  const closePopUpChangePassword = useCallback(() => {
    setPopUpChangePasswordOpen(false);
  }, []);

  const onHelpContainerClick = useCallback(() => {
    navigate("/help-admin");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-admin");
  }, [navigate]);

  const onCollaboratorInformationContainerClick = useCallback(() => {
    navigate("/collaborator-info");
  }, [navigate]);

  const onCompanyInformationContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onRemoveUserContainerClick = useCallback(() => {
    navigate("/remove-user");
  }, [navigate]);

  const onAddUserContainerClick = useCallback(() => {
    navigate("/add-user");
  }, [navigate]);

  const onChangePassword = async (oldPassword, newPassword, confirmNewPassword) => {
    try {
      // Check if new password and confirm new password match
      if (newPassword !== confirmNewPassword) {
        console.error("New password and confirm new password do not match");
        return;
      }

      // Call the PHP file to update the password
      const response = await fetch(
        "http://localhost/Psi/backend/services/changepasswordadmin.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail/* Add logic to get the user's email */,
            oldPassword: userOldpassword,
            newPassword: userNewpassword,
          }),
        }
      );

      const data = await response.json();
      // Handle the data response as needed
      if (data.status === "success") {
        console.log("Password changed successfully");
      } else {
        console.error("Failed to change password. Error:", data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };
  return (
    <>
      <div className={styles.settingsAdmin}>
        <div className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.logout} onClick={onLogoutContainerClick}>
            <b className={styles.button}>Log Out</b>
          </div>
          <div className={styles.privacy}>
            <div className={styles.yourPrivacyIsContainer}>
              <p
                className={styles.yourPrivacyIs}
              >{`Your privacy is important to us, and we want to ensure that you have control over who can access your information on this platform. Below, you can adjust your privacy settings to customize your experience. `}</p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Account Security</p>
              <p className={styles.yourPrivacyIs}>
                Change Password: Regularly update your password to enhance the
                security of your account.
              </p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Data Sharing</p>
              <p className={styles.yourPrivacyIs}>
                Information Sharing: Choose the level of information you are
                comfortable sharing with others. [Minimal/Basic/Detailed/Custom]
              </p>
              <p className={styles.yourPrivacyIs}>
                Third-Party Apps: Manage which third-party apps can access your
                data and revoke access at any time.
              </p>
              <p className={styles.yourPrivacyIs}>&nbsp;</p>
              <p className={styles.yourPrivacyIs}>Visibility</p>
              <p className={styles.yourPrivacyIs}>
                Profile Visibility: Control who can see your profile and your
                posts. [Public/Friends Only/Private]
              </p>
              <p className={styles.yourPrivacyIs}>
                Search Engine Indexing: Allow search engines to index your
                profile? [Yes/No]
              </p>
              <p className={styles.yourPrivacyIs}>Privacy Policy</p>
              <p className={styles.yourPrivacyIs}>
                Review our privacy policy for a detailed understanding of how
                your data is handled.
              </p>
            </div>
            <div className={styles.divider1} />
            <div className={styles.title}>Privacy</div>
          </div>

          <div
            className={styles.changeButton}
            onClick={openPopUpChangePassword}
          >
            <b className={styles.button1}>Change</b>
          </div>

          <input
            className={styles.confirmNewPassword}
            name="Confirm new Password"
            id="confirm_new_password"
            placeholder="Confirm your new Password"
            type="password"
          />
          <input
            className={styles.newPassword}
            name="New Password"
            id="new_password"
            placeholder="Enter your new Password"
            type="password"
          />
          <input
            className={styles.oldPassword}
            name="Old Password"
            id="old_password"
            placeholder="Enter your old Password"
            type="password"
          />
          <div
            className={styles.changePassword}
            onClick={() =>
              onChangePassword(
                document.getElementById("old_password").value,
                document.getElementById("new_password").value,
                document.getElementById("confirm_new_password").value
              )
            }
          ></div>
          <div className={styles.changePassword}>
            <div className={styles.tittle}>Change your password</div>
          </div>
          <div className={styles.language}>
            <div className={styles.tabs}>
              <div className={styles.tab}>
                <div className={styles.title1}>Portuguese</div>
              </div>
              <div className={styles.tab1}>
                <div className={styles.title2}>English</div>
              </div>
            </div>
          </div>
          <div className={styles.accessSecurity}>
            <div className={styles.divider} />
            <div className={styles.accessSecurity1}>{`Access & Security`}</div>
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.settings}>Settings</b>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.settings1}>
            <b className={styles.settings2}>Settings</b>
          </div>
          <div className={styles.help} onClick={onHelpContainerClick}>
            <div className={styles.help1}>Help</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.profile} onClick={onProfileContainerClick}>
              <div className={styles.profile1}>Profile</div>
            </div>
            <div
              className={styles.collaboratorInformation}
              onClick={onCollaboratorInformationContainerClick}
            >
              <div className={styles.profile1}>Collaborator Information</div>
            </div>
            <div
              className={styles.companyInformation}
              onClick={onCompanyInformationContainerClick}
            >
              <div className={styles.profile1}>Company Information</div>
            </div>
            <div
              className={styles.removeUser}
              onClick={onRemoveUserContainerClick}
            >
              <div className={styles.profile1}>Remove User</div>
            </div>
            <div className={styles.addUser} onClick={onAddUserContainerClick}>
              <div className={styles.profile1}>Add User</div>
            </div>
            <b className={styles.menu1}>MENU</b>
          </div>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
          <div className={styles.line} />
        </div>
      </div>
      {isPopUpChangePasswordOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopUpChangePassword}
        >
          <PopUpChangePassword onClose={closePopUpChangePassword} />
        </PortalPopup>
      )}
    </>
  );
};

export default SettingsADMIN;
