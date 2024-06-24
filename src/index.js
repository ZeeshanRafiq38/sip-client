import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-accordion-comp/dist/styles.css";
import { Provider } from "react-redux";
import store from "store/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </Provider>
);
