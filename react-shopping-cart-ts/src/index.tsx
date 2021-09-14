import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import {QueryClientProvider, QueryClient} from 'react-query'
const rootElement = document.getElementById("root");

const client = new QueryClient();

render(
(
<QueryClientProvider client={client}>
<App />
</QueryClientProvider>

), rootElement);
