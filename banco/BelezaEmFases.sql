CREATE DATABASE IF NOT EXISTS BelezaEmFases;
USE BelezaEmFases;

CREATE TABLE Usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
nascimento DATE NOT NULL,
email VARCHAR(255) NOT NULL,
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

CREATE TABLE Cronograma(
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