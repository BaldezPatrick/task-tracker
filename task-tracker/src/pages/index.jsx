import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className="header-wrapper">
        <h2>Task Tracker</h2>
      </header>
      <main className="main-wrapper">
        <section className="tasksForm-wrapper">
          <h3>Remember your taks and do them!</h3>
          <form>
            <input type="text" id="task" placeholder="New task..." />
            <button id="send-task">Send</button>
          </form>
        </section>
        <section className="tasks-wrapper">
          <h3>Your tasks</h3>
          <ul className="tasks-items-wrapper">
            <li className="tasks-item">
              Teste Um <button>Delete</button>
            </li>
            <li className="tasks-item">
              Teste Dois <button>Delete</button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
