import * as React from 'react';
import { render } from 'react-dom';
import SearchForm from './containers/searchForm';
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <SearchForm />
    </Provider>,
    document.getElementById('app')
)
// axios.get("https://qiita.com/api/v2/items").then((response) => {
//     render(
//         <div>
//             <div className="card" style={{ width: "300px", height: "300px" }}>
//                 <img className="card-img-top" src={response.data[0].user.profile_image_url} alt="Card image cap"/>
//                 <div className="card-body">
//                     <h5 className="card-title">{response.data[0].title}</h5>
//                     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//                 </div>
//             </div>
//         </div>,
//         document.getElementById('app')
//     )
// })