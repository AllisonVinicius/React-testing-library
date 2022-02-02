import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

const renderWithContext = (ui,options) => render(ui, {wrapper: OrderDetailsProvider, ...options});

// re-export every
export * from '@trsting-library/react';
//overrude render method
export { renderWithContext as render };



