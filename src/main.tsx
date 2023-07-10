import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";

import App from "./App";
import ErrorPage from "./ErrorPage";
import { Tab } from "./stories/tabs/Tab";
Tab;
// import "./index.css"; // inactive - global styles are applied in App.tsx

const router = createBrowserRouter([
  // https://reactrouter.com/en/main/start/tutorial#adding-a-router
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui
  {
    path: "tab/:content",
    element: (
      <Tab
        tabs={[
          { label: "コンテンツ1", link: `content1`, content: <div>tab1</div> },
          { label: "コンテンツ2", link: `content2`, content: <div>tab2</div> },
        ]}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
