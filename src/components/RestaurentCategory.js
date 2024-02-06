import ItemList from './ItemList';

const RestaurentCategory = ({categoryData}) => {
  return (
    <div>
      <div className="panel-group" id="accordion">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">

              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href={`#${categoryData.title}`}
                >
                {categoryData.title}
              </a>
            </h4>
          </div>
          <div id={categoryData.title} className="panel-collapse collapse in">
            <div className="panel-body">
                <ItemList items={categoryData?.itemCards}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
