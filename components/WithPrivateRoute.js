// import { onAuthStateChanged } from 'firebase-app/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user=localStorage.getItem('user')
    const session=localStorage.getItem('session')
    // onAuthStateChanged((user) => {
      console.log("WithPrivateRoute",session)
      if (!session || session===null || session===undefined) {
        router.push('/');
      }
    // });
  });

  return <>{children}</>;
};

export default WithPrivateRoute;