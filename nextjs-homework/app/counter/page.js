import Counter from "../components/Counter";

export default function CounterPage(){
    return (
        <main style={{ padding: '2em'}}>
            <h1>Counter Page</h1>
            <Counter increment={1} color="green" />
            <Counter increment={2} color="blue" />
        </main>
    )
}