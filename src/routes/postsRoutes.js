import express from "express";
import { listarPosts } from "../controllers/post.Controller.js";

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições.
    app.use(express.json());
    // Rota GET para a URL '/posts'. Quando essa rota é acessada, a função getTodosPosts é chamada 
    // e os posts são retornados como resposta em formato JSON.
    app.get("/posts", listarPosts);
}

export default routes;