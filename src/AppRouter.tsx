import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

// All this file does is set up the main routing structure for your application (see App.tsx)

export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
      </BrowserRouter>;
}