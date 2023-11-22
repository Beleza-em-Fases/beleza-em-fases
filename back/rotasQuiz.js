import express from "express"
import { getAllQuiz, getQuiz, postQuiz, putQuiz, deleteQuiz} from "./controladores/quizController.js";

const roteador = express.Router();

roteador.get("/", getAllQuiz)
roteador.get("/:id", getQuiz)

roteador.post("/quiz-capilar", postQuiz);

roteador.put("/:id", putQuiz);

roteador.delete("/:id", deleteQuiz);

export default roteador;