export default function NotFound() {
    return (
        <main
            style={{
                minHeight: "60vh",
                display: "grid",
                placeItems: "center",
                padding: "48px 20px",
                textAlign: "center",
            }}
        >
            <div>
                <h1>404</h1>
                <p>Siden finnes ikke.</p>
                <a href="/">Gå til forsiden</a>
            </div>
        </main>
    );
}
