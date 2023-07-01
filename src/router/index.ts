import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    async lazy() {
      const { default: AppLayout } = await import("@/app/layouts/AppLayout");
      return { Component: AppLayout };
    },
  },
  {
    path: "/auth",
    async lazy() {
      const { default: AuthLayout } = await import("@/app/layouts/AuthLayout");
      return { Component: AuthLayout };
    },
    children: [
      {
        path: "sign-in",
        async lazy() {
          const { default: SignIn } = await import("@/app/pages/auth/SignIn");
          return { Component: SignIn };
        },
      },
    ],
  },
]);
