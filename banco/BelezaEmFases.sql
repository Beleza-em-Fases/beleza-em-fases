CREATE DATABASE IF NOT EXISTS BelezaEmFases;
USE BelezaEmFases;

CREATE TABLE Usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
nascimento DATE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
senha VARCHAR(255) NOT NULL,
fotoPerfil VARCHAR(255)
);

CREATE TABLE Cabelo(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
curvatura ENUM('liso','ondulado','cacheado','crespo') NOT NULL,
nivelDanos ENUM('sem quimica', 'pouco danificado','danificado','muito danificado'),
comprimento ENUM('curto','medio','longo') NOT NULL,
espessura ENUM('fino','medio','grosso') NOT NULL,
oleosidade ENUM('normal','oleoso','misto','seco') NOT NULL,
forca ENUM('fraco','forte'),
elasticidade ENUM('rigido','normal','elastico'),
condicaoAtual VARCHAR(255) NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Cronograma(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
id_cabelo INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
FOREIGN KEY (id_cabelo) REFERENCES Cabelo(id)
);

CREATE TABLE Evolucao(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
fotoAntiga VARCHAR(255) NOT NULL,
fotoAtual VARCHAR(255) NOT NULL,
primeiraData DATE NOT NULL,
segundaData DATE NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Comentario(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT,
nome  VARCHAR(255) NOT NULL,
titulo VARCHAR(255) NOT NULL,
publicacao DATE NOT NULL,
comentario VARCHAR(255) NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Contato(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT, -- Ainda não possui login para efetuar corretamente as FK
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
mensagem VARCHAR(255) NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Produtos(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
marca VARCHAR(255) NOT NULL,
descricao VARCHAR(1000) NOT NULL,
funcao VARCHAR(255) NOT NULL,
preco DECIMAL(10, 2),
imagem VARCHAR(255) NOT NULL
);

INSERT INTO Produtos(nome, marca, descricao, funcao, preco, imagem) VALUES(
'Máscara Morte Súbita', 'Lola Cosmetics', 'Máscara de hidratação para cabelos danificados. Lola Cosmetics Morte Súbita recupera as pontas duplas, hidrata e dá brilho e a suavidade. A Máscara Morte Súbita, de Lola Cosmetics, conta com ingredientes naturais que fortalecem a estrutura dos fios contra a quebra e protegem os cabelos dos danos causados pelo calor e exposição aos raios ultravioletas. O creme tem nutrientes que resgatam a hidratação natural da fibra capilar, o brilho e a suavidade dos fios', 'Hidronutrição', 63.90, 'https://tfdfn2.vtexassets.com/arquivos/ids/220906/mascara-lola-morte-subita-450g.jpg?v=638168148221100000'
);

INSERT INTO Comentario (nome, titulo, publicacao, comentario)
VALUES ('Ana', 'Incrível!', '2023-11-22', 'Estou tão empolgada com os resultados e em aprender mais sobre cuidados capilares. Adotar um programa capilar realmente transformou a saúde do meu cabelo. Mal posso esperar para trocar experiências e dicas com todos vocês!');

INSERT INTO Comentario (nome, titulo, publicacao, comentario)
VALUES ('Beatriz', 'Surpreendente!', '2023-11-20', 'Estou amando os resultados do meu programa capilar! Meu cabelo está mais saudável e brilhante. Vamos compartilhar nossas histórias e dicas de cuidados!');

INSERT INTO Comentario (nome, titulo, publicacao, comentario)
VALUES ('Carolina', 'Fantástico!', '2023-11-18', 'Adotei um programa capilar recentemente e já estou sentindo a diferença! Meu cabelo está mais forte e sedoso. Ansiosa para compartilhar experiências com vocês.');

INSERT INTO Comentario (nome, titulo, publicacao, comentario)
VALUES ('Daniela', 'Transformador!', '2023-11-15', 'Que jornada incrível com o meu programa capilar! Meu cabelo nunca esteve tão saudável. Vamos trocar dicas e motivar uns aos outros nessa jornada capilar!');

INSERT INTO Comentario (nome, titulo, publicacao, comentario)
VALUES ('Eduarda', 'Maravilhoso!', '2023-11-10', 'Estou fascinada com os resultados do meu programa capilar. Meu cabelo está mais hidratado e com vida. Mal posso esperar para compartilhar experiências com a comunidade!');


SELECT * FROM Comentario;
SELECT * FROM Usuario;
SELECT * FROM Produtos;

-- Possiveis Selects para a tabela produto
SELECT * FROM Produtos
ORDER BY nome;

SELECT * FROM Produtos
WHERE marca = 'Lola Cosmetics'
ORDER BY preco;

SELECT * FROM Produtos
WHERE nome = 'Máscara Morte Súbita';

SELECT * FROM Produtos
WHERE marca = 'Lola Cosmetics';

SELECT * FROM Produtos
WHERE funcao LIKE '%Hidratação%';

SELECT * FROM Produtos
WHERE preco <= 50;