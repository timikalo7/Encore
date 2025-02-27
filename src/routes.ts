/**
 * An array of routes the are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification", "/contact", "/get-involved", "/what-we-do", "/who-we-are", "/who-we-help", "/why-us", "/credits"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for the API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 *  @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect route after a user logs in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
