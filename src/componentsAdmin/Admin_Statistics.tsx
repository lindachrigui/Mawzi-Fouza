import NavAdmin from"./components/NavAdmin";
import "./Admin_Statistics.css";
import StatisticsCard from './components/StatisticsCard';
import Button from './components/Button';
import Chart from './components/Button';

function Admin_Statistics() {
    return (
      <div style={{ display: 'flex' }}>
      <NavAdmin />
      {/* <div className="main-content" style={{ padding: '20px', flexGrow: 1 }}>
          <header style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button label="Sign in" color="black" />
              <Button label="Logout" color="red" />
          </header>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <StatisticsCard icon="👥" count={500} />
          </div>
          
          <div style={{ marginTop: '20px' }}>
              <Chart/>
          </div>
      </div> */}
  </div>
        
      
    );
  }
  
export default Admin_Statistics;

