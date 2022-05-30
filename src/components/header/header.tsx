import { Link } from 'react-router-dom';
import Pager from '../pager/pager';
import './header.scss';

const Header = () => {
  return (
    <>
        <header className='app__header'>
            <ul>
                <Link to='/'><li>Все котики</li></Link>
                <Link to='/favorites'><li>Любимые котики</li></Link>
            </ul>

            <Pager />
        </header>
    </>
  );
};

export default Header;