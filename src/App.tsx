import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import UserItem from "./components/UserItem";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {Router, Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {


    return (
        // <div>
        //     <EventsExample/>
        //    <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width="200px" height="200px">
        //        <button>Click me</button>
        //    </Card>
        // </div>
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link>
            </div>
            <div>
                <Link to="/todos">Todos</Link>
            </div>

            <Routes>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/users/:id'} element={<UserItemPage/>}/>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                <Route path="*" element={<div>NotFound</div>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
