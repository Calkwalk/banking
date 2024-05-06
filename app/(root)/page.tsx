import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedIn = {
    firstName: "Calkwalk",
    lastName: "Quan",
    email: "calkwalk@163.com"
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your accounts and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent tansactions
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.45},{currentBalance: 234.56}
        ]}
      />
    </section>
  );
}
