import React from 'react';
import ReactDOM  from 'react-dom';

const Title = ()=><h1>Namaste React Series</h1>;
const HeadingComponent = ()=> (
 <>   
 <Title/>
<h1>Namaste React Series Started!</h1>
</>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)