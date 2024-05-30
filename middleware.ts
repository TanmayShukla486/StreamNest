import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/api/webhooks/(.*)']);
const isLoginRoute = createRouteMatcher(['/sign-in(.*)']);
const isSignUpRoute = createRouteMatcher(['/sign-up(.*)']);
const isHomepage = createRouteMatcher(['/']);

export default clerkMiddleware((auth, request) => {
  if (
    !isPublicRoute(request) &&
    !isLoginRoute(request) &&
    !isSignUpRoute(request) &&
    !isHomepage(request)
  ) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
