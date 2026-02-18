import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";

.search-container {
  text-align: center;
  margin-top: 30px;
}

.search-bar {
  width: 50%;
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.search-bar:focus {
  border-color: #d63384;
  box-shadow: 0 4px 15px rgba(214,51,132,0.3);
}

.main-title {
  text-align: center;
  margin-top: 20px;
  font-size: 32px;
  font-weight: 600;
  color: #800020;
}
