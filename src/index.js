import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' });

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>    
    <AppComponent />    
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
