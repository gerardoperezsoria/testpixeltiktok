// import '../styles/globals.css'
// import '../css/general.css'
// import 'bulma/css/bulma.css'
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import '../styles/globals.css'
import '../css/general.css'
import 'bulma/css/bulma.css'

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Auth = Component.Auth || Noop;

  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;


// import Head from 'next/head';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// import 'styles/globals.css';

// import { userService } from 'services';
// import { Nav, Alert } from 'components';

// export default App;

// function App({ Component, pageProps }) {
//     const router = useRouter();
//     const [user, setUser] = useState(null);
//     const [authorized, setAuthorized] = useState(false);

//     useEffect(() => {
//         // on initial load - run auth check 
//         authCheck(router.asPath);

//         // on route change start - hide page content by setting authorized to false  
//         const hideContent = () => setAuthorized(false);
//         router.events.on('routeChangeStart', hideContent);

//         // on route change complete - run auth check 
//         router.events.on('routeChangeComplete', authCheck)

//         // unsubscribe from events in useEffect return function
//         return () => {
//             router.events.off('routeChangeStart', hideContent);
//             router.events.off('routeChangeComplete', authCheck);
//         }

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     function authCheck(url) {
//         // redirect to login page if accessing a private page and not logged in 
//         setUser(userService.userValue);
//         const publicPaths = ['/account/login', '/account/register'];
//         const path = url.split('?')[0];
//         if (!userService.userValue && !publicPaths.includes(path)) {
//             setAuthorized(false);
//             router.push({
//                 pathname: '/account/login',
//                 query: { returnUrl: router.asPath }
//             });
//         } else {
//             setAuthorized(true);
//         }
//     }

//     return (
//         <>
//                 {authorized &&
//                     <Component {...pageProps} />
//                 }
//         </>
//     );
// }
