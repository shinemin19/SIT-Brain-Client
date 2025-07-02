import { createBrowserRouter } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import App from "../App";
import { AuthCallbackPage } from "../components/auth/AuthCallbackPage";
import StudentAssistPage from "../pages/StudentAssistPage";

export const mainRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/auth/callback",
        element: <AuthCallbackPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      // Enhanced Chat Routes
      {
        path: "/chat/:studentId/:chatId",
        element: <ChatPage />,
      },
      {
        path: "/chat/:studentId",
        element: <ChatPage />,
      },
      // Legacy chat route redirect (optional - for backward compatibility)
      {
        path: "/chat/:id",
        element: <ChatPage />,
      },
      {
        path: "/assistant",
        element: <StudentAssistPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);