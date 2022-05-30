import './pager.scss';

const Pager = () => {
  return (
    <div className='header__pager'>
        <div className='header__pager-directionButton'>Previous</div>
        <span>1...5</span>
        <div className='header__pager-directionButton'>Next</div>
    </div>
  );
};

export default Pager;