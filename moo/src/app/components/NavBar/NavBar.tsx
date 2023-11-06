const NavBar: React.FC = () => {
    return (
        <div>
            <a href="/api/createTable">
                <button>createTable</button>
            </a>

            <a href="/api/loadData">
                <button>loadData</button>
            </a>

            <a href="/api/displayData">
                <button>displayData</button>
            </a>
        </div>
       
    );
  };
  
  export default NavBar;