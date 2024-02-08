import ItemList from './ItemList';

const RestaurentCategory = ({categoryData,showItem,setShowIndex}) => {
  
  const handleClick =()=>{setShowIndex()}
  return (
    <div>
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                onClick={handleClick} >
                {categoryData.title}
              </a>
            </h4>
          </div>
          <div>
            <div className="panel-body">
                {showItem && <ItemList items={categoryData?.itemCards}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
