import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ChooseThe3TypesUser from "./pages/ChooseThe3TypesUser";
import SignInCollaborator from "./pages/SignInCollaborator";
import ReportsCollaborator from "./pages/ReportsCollaborator";
import ProfileCollaborator from "./pages/ProfileCollaborator";
import HelpCollaborator from "./pages/HelpCollaborator";
import SettingsCollaborator from "./pages/SettingsCollaborator";
import Dashboard from "./pages/Dashboard";
import ForgotPasswordCollaborator from "./pages/ForgotPasswordCollaborator";
import ForgotPasswordADMIN from "./pages/ForgotPasswordADMIN";
import SignUpAdmin from "./pages/SignUpAdmin";
import SignInAdmin from "./pages/SignInAdmin";
import HelpADMIN from "./pages/HelpADMIN";
import SettingsADMIN from "./pages/SettingsADMIN";
import RemoveUser from "./pages/RemoveUser";
import AddUser from "./pages/AddUser";
import SignUpCompany from "./pages/SignUpCompany";
import CollaboratorInfo from "./pages/CollaboratorInfo";
import CompanyInfo from "./pages/CompanyInfo";
import ProfileADMIN from "./pages/ProfileADMIN";
import ReportsAdmin from "./pages/ReportsAdmin";

import PTChooseThe3TypesUser from "./pagesPT/PTChooseThe3TypesUser";
import PTSignInCollaborator from "./pagesPT/PTSignInCollaborator";
import PTReportsCollaborator from "./pagesPT/PTReportsCollaborator";
import PTProfileCollaborator from "./pagesPT/PTProfileCollaborator";
import PTHelpCollaborator from "./pagesPT/PTHelpCollaborator";
import PTSettingsCollaborator from "./pagesPT/PTSettingsCollaborator";
import PTDashboard from "./pagesPT/PTDashboard";
import PTForgotPasswordCollaborator from "./pagesPT/PTForgotPasswordCollaborator";
import PTForgotPasswordADMIN from "./pagesPT/PTForgotPasswordADMIN";
import PTSignUpAdmin from "./pagesPT/PTSignUpAdmin";
import PTSignInAdmin from "./pagesPT/PTSignInAdmin";
import PTHelpADMIN from "./pagesPT/PTHelpADMIN";
import PTSettingsADMIN from "./pagesPT/PTSettingsADMIN";
import PTRemoveUser from "./pagesPT/PTRemoveUser";
import PTAddUser from "./pagesPT/PTAddUser";
import PTSignUpCompany from "./pagesPT/PTSignUpCompany";
import PTCollaboratorInfo from "./pagesPT/PTCollaboratorInfo";
import PTCompanyInfo from "./pagesPT/PTCompanyInfo";
import PTProfileADMIN from "./pagesPT/PTProfileADMIN";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/reports-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/profile-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/help-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/settings-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-admin":
        title = "";
        metaDescription = "";
        break;

      case "/sign-up-admin":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-admin":
        title = "";
        metaDescription = "";
        break;
      case "/help-admin":
        title = "";
        metaDescription = "";
        break;
      case "/settings-admin":
        title = "";
        metaDescription = "";
        break;
      case "/remove-user":
        title = "";
        metaDescription = "";
        break;
      case "/add-user":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-company":
        title = "";
        metaDescription = "";
        break;

      case "/collaborator-info":
        title = "";
        metaDescription = "";
        break;
      case "/company-info":
        title = "";
        metaDescription = "";
        break;
      case "/profile-admin":
        title = "";
        metaDescription = "";
        break;
      case "/reports-admin":
        title = "";
        metaDescription = "";
        break;
      
      
      
      case "/pt-main":
        title = "";
        metaDescription = "";
        break;
      case "/pt-sign-in-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-reports-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-profile-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-help-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-settings-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/pt-forgot-password-collaborator":
        title = "";
        metaDescription = "";
        break;
      case "/pt-forgot-password-admin":
        title = "";
        metaDescription = "";
        break;

      case "/pt-sign-up-admin":
        title = "";
        metaDescription = "";
        break;
      case "/pt-sign-in-admin":
        title = "";
        metaDescription = "";
        break;
      case "/pt-help-admin":
        title = "";
        metaDescription = "";
        break;
      case "/pt-settings-admin":
        title = "";
        metaDescription = "";
        break;
      case "/pt-remove-user":
        title = "";
        metaDescription = "";
        break;
      case "/pt-add-user":
        title = "";
        metaDescription = "";
        break;
      case "/pt-sign-up-company":
        title = "";
        metaDescription = "";
        break;

      case "/pt-collaborator-info":
        title = "";
        metaDescription = "";
        break;
      case "/pt-company-info":
        title = "";
        metaDescription = "";
        break;
      case "/pt-profile-admin":
        title = "";
        metaDescription = "";
        break;
      case "/pt-reports-admin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
            <Route path="/" element={<ChooseThe3TypesUser />} />
      <Route path="/sign-in-collaborator" element={<SignInCollaborator />} />
      <Route path="/reports-collaborator" element={<ReportsCollaborator />} />
      <Route path="/profile-collaborator" element={<ProfileCollaborator />} />
      <Route path="/help-collaborator" element={<HelpCollaborator />} />
      <Route path="/settings-collaborator" element={<SettingsCollaborator />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/forgot-password-collaborator"
        element={<ForgotPasswordCollaborator />}
      />
      <Route path="/forgot-password-admin" element={<ForgotPasswordADMIN />} />
      <Route path="/sign-up-admin" element={<SignUpAdmin />} />
      <Route path="/sign-in-admin" element={<SignInAdmin />} />
      <Route path="/help-admin" element={<HelpADMIN />} />
      <Route path="/settings-admin" element={<SettingsADMIN />} />
      <Route path="/remove-user" element={<RemoveUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/sign-up-company" element={<SignUpCompany />} />

      
      <Route path="/collaborator-info" element={<CollaboratorInfo />} />
      <Route path="/company-info" element={<CompanyInfo />} />
      <Route path="/profile-admin" element={<ProfileADMIN />} />
      <Route path="/reports-admin" element={<ReportsAdmin />} />



                  <Route path="/pt-main" element={<PTChooseThe3TypesUser />} />
      <Route path="/pt-sign-in-collaborator" element={<PTSignInCollaborator />} />
      <Route path="/pt-reports-collaborator" element={<PTReportsCollaborator />} />
      <Route path="/pt-profile-collaborator" element={<PTProfileCollaborator />} />
      <Route path="/pt-help-collaborator" element={<PTHelpCollaborator />} />
      <Route path="/pt-settings-collaborator" element={<PTSettingsCollaborator />} />
      <Route path="/pt-dashboard" element={<PTDashboard />} />
      <Route
        path="/pt-forgot-password-collaborator"
        element={<PTForgotPasswordCollaborator />}
      />
      <Route path="/pt-forgot-password-admin" element={<PTForgotPasswordADMIN />} />

      <Route path="/pt-sign-up-admin" element={<PTSignUpAdmin />} />
      <Route path="/pt-sign-in-admin" element={<PTSignInAdmin />} />
      <Route path="/pt-help-admin" element={<PTHelpADMIN />} />
      <Route path="/pt-settings-admin" element={<PTSettingsADMIN />} />
      <Route path="/pt-remove-user" element={<PTRemoveUser />} />
      <Route path="/pt-add-user" element={<PTAddUser />} />
      <Route path="/pt-sign-up-company" element={<PTSignUpCompany />} />


      <Route path="/pt-collaborator-info" element={<PTCollaboratorInfo />} />
      <Route path="/pt-company-info" element={<PTCompanyInfo />} />
      <Route path="/pt-profile-admin" element={<PTProfileADMIN />} />

    </Routes>
  );
}
export default App;
