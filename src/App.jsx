import { CORE_CONCEPTS } from './data';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => {
              return (<CoreConcept 
                {...item}
                key = {index} />);
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
