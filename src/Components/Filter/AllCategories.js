import Filter from "./Filter";

const AllCategories = () => {
    return (<div>
        <h1>What kind of food you like?</h1>

        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].
        map(category => <Filter category={category}/>)
        }
        <Filter/>
        </div>)
}

export default AllCategories;