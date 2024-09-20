import Analytics from "./(components)/Analytics";
import Orders from "./(components)/Orders";
import Notification from "./(components)/Notification";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div >
         <Analytics></Analytics>
         <Notification/>
         <Orders/>
        {children}
        
    </div>
  );
}