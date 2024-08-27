import styles from './Home.module.css'
import PieChart from '../layout/PieChart';


const Home = () => {
  const receita = 10000;
  const despesas = 110000;

  return (
    <div>
      <h1>Receita vs Despesas</h1>
      <PieChart receita={receita} despesas={despesas} />
    </div>
  );
}

export default Home