import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2em' }}>
      <h1>NextJS Homework</h1>

      <nav style={{ marginBottom: '2em'}}>
        <ul style={{ listStyle: 'none', padding: 0}}>
          <li><Link href="/counter">Go to Counter Page</Link></li>
          <li><Link href="/info">Go to Info Page</Link></li>
          <li><Link href="/store">Go to Store Page</Link></li>
        </ul>
      </nav>

      {/*<section>
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
      </section>*/}
      </main>
  );
}
