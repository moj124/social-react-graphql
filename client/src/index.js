import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(ApolloProvider);

serviceWorker.unregister();
