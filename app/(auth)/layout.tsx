'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Layout({ children}: {children: React.ReactNode}) {

    const pathname = usePathname()

  const data = [
    {name: "Register", href:'/register'},
    {name: "Login", href: '/login' },
    {name: "Forgot password", href:'/forgot-password' },

  ]
    return (

      
         <div>
            {data.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return <Link className={isActive? 'font-bold  mr-4': 'mr-4'} href={link.href} key={link.name}>{link.name}</Link>
})}
            {children}
         </div>
          
     
    );
  }