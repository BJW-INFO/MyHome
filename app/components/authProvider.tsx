'use client';
import { ReactNode, useCallback, useEffect, useEffectEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth, useLoaAuth } from '@/utils/zustand/auths';

function BounceBall() {
  return (<>
    <div className='flex gap-2 w-[100%] h-10 justify-center items-center'>
      <div className='w-5 h-5 rounded-xl bg-indigo-400 animate-bounce' />
      <div className='w-5 h-5 rounded-xl bg-violet-400 animate-bounce' />
      <div className='w-5 h-5 rounded-xl bg-green-300 animate-bounce' />
    </div>
  </>)
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const loaAPI = useLoaAuth();
  useEffect(() => {
    loaAPI.init!();
    auth.fetch!({ password: auth.password() });
  }, [])

  const onSubmitAuth = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (auth.state === undefined) { return alert("🏃 Please Wait, Loading"); }
    const { password } = Object.fromEntries(new FormData(e.currentTarget));
    await auth.fetch!({ password: password as string });
  }, [auth])

  if (!auth.state) {
    const loading = auth.state === undefined;
    return (<>
      <div className='flex h-screen justify-center items-center'>
        <section className='card flex flex-col gap-2'>
          <h1 className='text-lg font-bold'>
            {loading ? `🏃 Please Wait, Loading` : `👉️ Sign In To Your Account`}
          </h1>
          {loading
            ? (<BounceBall />)
            : (<>
              <form className='flex flex-col sm:flex-row gap-2 w-[100%]' onSubmit={onSubmitAuth}>
                <input type='password' name='password' className='p-2 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-300' />
                <button className='p-2 pl-5 text-sm font-bold text-gray-600 pr-5 bg-sky-300 rounded-sm'>
                  Login
                </button>
              </form>
            </>)
          }
          <a className='text-sm text-cyan-600 self-end'>Contact Support?</a>
        </section>
      </div>
    </>)
  }
  else { return <>{children}</> } // 인증 확인

  // if (!isAuth) { // 인증되지 않았을때
  //   return (<>
  //     <div className='flex h-screen justify-center items-center'>
  //       <section className='card flex flex-col gap-2'>
  //         <h1 className='text-lg font-bold'>
  //           {loding ? `🏃 Please Wait, Loading` : `👉️ Sign In To Your Account`}
  //         </h1>
  //         {loding
  //           ? (
  //             <div className='flex gap-2 w-[100%] h-10 justify-center items-center'>
  //               <div className='w-5 h-5 rounded-xl bg-indigo-400 animate-bounce' />
  //               <div className='w-5 h-5 rounded-xl bg-violet-400 animate-bounce' />
  //               <div className='w-5 h-5 rounded-xl bg-green-300 animate-bounce' />
  //             </div>
  //           )
  //           : (
  //             <form
  //               className='flex flex-col sm:flex-row gap-2 w-[100%]'
  //               onSubmit={handleSubmit}
  //             >
  //               <input type='password' name='password' className='p-2 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-300' />
  //               <button className='p-2 pl-5 text-sm font-bold text-gray-600 pr-5 bg-sky-300 rounded-sm'>
  //                 Login
  //               </button>
  //             </form>
  //           )
  //         }
  //         <a className='text-sm text-cyan-600 self-end'>Contact Support?</a>
  //       </section>
  //     </div>
  //   </>)
  // }
};