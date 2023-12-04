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
import Timeline from "./pages/Timeline";
import HelpCollaborator from "./pages/HelpCollaborator";
import SettingsCollaborator from "./pages/SettingsCollaborator";
import Dashboard from "./pages/Dashboard";
import ForgotPasswordCollaborator from "./pages/ForgotPasswordCollaborator";
import ForgotPasswordADMIN from "./pages/ForgotPasswordADMIN";
import AdminAddedSucessfullyHR from "./pages/AdminAddedSucessfullyHR";
import SignUpAdmin from "./pages/SignUpAdmin";
import SignInAdmin from "./pages/SignInAdmin";
import HelpADMIN from "./pages/HelpADMIN";
import SettingsADMIN from "./pages/SettingsADMIN";
import RemoveUser from "./pages/RemoveUser";
import AddUser from "./pages/AddUser";
import SignUpCompany from "./pages/SignUpCompany";
import FullReportsCollaborators from "./pages/FullReportsCollaborators";
import CollaboratorInfo from "./pages/CollaboratorInfo";
import CompanyInfo from "./pages/CompanyInfo";
import ProfileADMIN from "./pages/ProfileADMIN";

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
      case "/timeline":
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
      case "/admin-added-sucessfully-hr":
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
      case "/full-reports-collaborators":
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
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/help-collaborator" element={<HelpCollaborator />} />
      <Route path="/settings-collaborator" element={<SettingsCollaborator />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/forgot-password-collaborator"
        element={<ForgotPasswordCollaborator />}
      />
      <Route path="/forgot-password-admin" element={<ForgotPasswordADMIN />} />
      <Route
        path="/admin-added-sucessfully-hr"
        element={<AdminAddedSucessfullyHR />}
      />
      <Route path="/sign-up-admin" element={<SignUpAdmin />} />
      <Route path="/sign-in-admin" element={<SignInAdmin />} />
      <Route path="/help-admin" element={<HelpADMIN />} />
      <Route path="/settings-admin" element={<SettingsADMIN />} />
      <Route path="/remove-user" element={<RemoveUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/sign-up-company" element={<SignUpCompany />} />

      <Route
        path="/full-reports-collaborators"
        element={<FullReportsCollaborators />}
      />
      <Route path="/collaborator-info" element={<CollaboratorInfo />} />
      <Route path="/company-info" element={<CompanyInfo />} />
      <Route path="/profile-admin" element={<ProfileADMIN />} />
    </Routes>
  );
}
export default App;
