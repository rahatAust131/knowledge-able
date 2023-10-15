import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <h1>Knowledge Able</h1>
        </div>
        <div className="right">
            <img src="../../../public/boy2.png" alt="user photo (static)" />
        </div>
    </div>
  )
}

export default Header