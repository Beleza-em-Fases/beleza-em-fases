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

CREATE TABLE Tipo_Cabelo(
id INT PRIMARY KEY AUTO_INCREMENT,
curvatura ENUM('liso','ondulado','cacheado','crespo') NOT NULL,
tipo CHAR(2) NOT NULL
);

CREATE TABLE Dano_Quimico (
id INT PRIMARY KEY AUTO_INCREMENT,
possuiQuimica BOOLEAN NOT NULL,
tipo VARCHAR(255),
ultimaQuimica DATE,
nivelDanos ENUM('pouco danificado','danificado','muito danificado')
);

CREATE TABLE Condicao (
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
condicao VARCHAR(255) NOT NULL
);

CREATE TABLE Cabelo(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
id_tipo INT NOT NULL,
id_dano INT NOT NULL,
id_condicao INT NULL,
comprimento ENUM('curto','medio','longo') NOT NULL,
espessura ENUM('fino','medio','grosso') NOT NULL,
oleosidade ENUM('normal','oleoso','misto','seco') NOT NULL,
forca ENUM('fraco','forte'),
elasticidade ENUM('rigido','normal','elastico'),
FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
FOREIGN KEY (id_tipo) REFERENCES Tipo_Cabelo(id),
FOREIGN KEY (id_dano) REFERENCES Dano_Quimico(id),
FOREIGN KEY (id_condicao) REFERENCES Condicao(id)
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
id_usuario INT NOT NULL,
titulo VARCHAR(255) NOT NULL,
publicacao DATE NOT NULL,
comentario VARCHAR(255) NOT NULL,
publicado BOOLEAN NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Contato(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario INT NOT NULL,
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

-- Possiveis Selects para a tabela produto
SELECT * FROM Produtos;

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
WHERE marca = 'Lola Cosmetics';

SELECT * FROM Produtos
WHERE funcao LIKE '%Hidratação%';

SELECT * FROM Produtos
WHERE preco < 50;