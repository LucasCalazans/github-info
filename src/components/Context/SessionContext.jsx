import { createContext } from 'preact-context';

const initialData = { user: '' };
const ApiContext = createContext(initialData);

const Provider = ApiContext.Provider;
const Consumer = ApiContext.Consumer;

export default ApiContext;
export { Provider, Consumer, initialData }