import raamat1 from './img/raamat1.jpeg';
import raamat2 from './img/raamat2.jpeg';
import raamat3 from './img/raamat3.jpeg';
import Raamat from './Raamat';
import './Raamat.css';

function App() {
  return (
    <div className="raamat">
      <header className="pealkiri">
        <h1>Apollo Eestikeelsete raamatute TOP 3:</h1>
      </header>
      <div className='book-items'>     
        <Raamat title="Kuidas saavutada finantsvabadus" author="Kristi Saare" image={raamat1} />
        <Raamat title="Tere, Tähemaa" author="Kaja Belials" image={raamat2} />
        <Raamat title="Tere, Arvumaa" author="Kaja Belials" image={raamat3} />
      </div>
    </div>
  );
}

export default App;
