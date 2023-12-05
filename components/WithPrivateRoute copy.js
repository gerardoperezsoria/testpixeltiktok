// import { onAuthStateChanged } from 'firebase-app/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user=localStorage.getItem('user')
    // onAuthStateChanged((user) => {
      console.log("WithPrivateRoute",user)
      if (!user) {
        router.push('/');
      }
    // });
  });

  return <>{children}</>;
};

export default WithPrivateRoute;