export default function Contact() {
  return (
    <section className="container my-5" id="contact">
      <h2>Contact me!</h2>
      <img src="/profile.jpg" alt="Profile" className="rounded-circle mb-3" width={120}/>
      <p>Rinko Matsuoka</p>
      <p>Email: <a href="mailto:rinko@example.com">rinko@example.com</a></p>
      <p>
        GitHub: <a href="https://github.com/rinkomatsuoka">rinkomatsuoka</a><br/>
        LinkedIn: <a href="https://linkedin.com/in/rinkomatsuoka">rinkomatsuoka</a>
      </p>
    </section>
  );
}
