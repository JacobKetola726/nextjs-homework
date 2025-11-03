import Counter from './components/Counter';
import ProjectInfo from './components/ProjectInfo';
import Store from './components/Store';

export default function Home() {
  return (
    <main style={{ textAlign: 'cemter', padding: '2em' }}>
      <h1>NextJS Homework</h1>

      <section>
        <h2>Counter Components</h2>
        <Counter increment={1} color="green" />
        <Counter increment={2} color="blue" /> 
      </section>

      <section>
        <h2>Project Info</h2>
        <ProjectInfo />
      </section>

      <section>
        <h2>Store component</h2>
        <Store />
      </section>
      </main>
  );
}
