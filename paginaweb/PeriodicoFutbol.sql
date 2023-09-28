DROP DATABASE PeriodicoFutbol
CREATE DATABASE PeriodicoFutbol;
USE PeriodicoFutbol;

-- Crea la tabla de Autores
CREATE TABLE Autores (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreAutor VARCHAR(255) NOT NULL,
    Biografia TEXT,
    FotoAutor VARCHAR(255)
);

-- Crea la tabla de CategoriasNoticias
CREATE TABLE CategoriasNoticias (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreCategoria VARCHAR(255) NOT NULL
);

-- Crea la tabla de FuentesNoticias
CREATE TABLE FuentesNoticias (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreFuente VARCHAR(255) NOT NULL,
    SitioWeb VARCHAR(255)
);

-- Crea la tabla de Noticias
CREATE TABLE Noticias (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    CuerpoNoticia TEXT,
    FechaPublicacion DATE,
    AutorID INT,
    CategoriaID INT,
    FuenteID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(ID),
    FOREIGN KEY (CategoriaID) REFERENCES CategoriasNoticias(ID),
    FOREIGN KEY (FuenteID) REFERENCES FuentesNoticias(ID)
);

-- Crea la tabla de Comentarios
CREATE TABLE Comentarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ContenidoComentario TEXT,
    FechaPublicacionComentario DATETIME,
    AutorComentario VARCHAR(255) NOT NULL,
    NoticiaID INT,
    FOREIGN KEY (NoticiaID) REFERENCES Noticias(ID)
);
INSERT INTO Autores (NombreAutor, Biografia, FotoAutor)
VALUES
    ('Autor 1', 'Biografía del Autor 1...', 'foto_autor1.jpg'),
    ('Autor 2', 'Biografía del Autor 2...', 'foto_autor2.jpg'),
    ('Autor 3', 'Biografía del Autor 3...', 'foto_autor3.jpg'),
    ('Autor 4', 'Biografía del Autor 4...', 'foto_autor4.jpg'),
    ('Autor 5', 'Biografía del Autor 5...', 'foto_autor5.jpg'),
    ('Autor 6', 'Biografía del Autor 6...', 'foto_autor6.jpg'),
    ('Autor 7', 'Biografía del Autor 7...', 'foto_autor7.jpg'),
    ('Autor 8', 'Biografía del Autor 8...', 'foto_autor8.jpg'),
    ('Autor 9', 'Biografía del Autor 9...', 'foto_autor9.jpg'),
    ('Autor 10', 'Biografía del Autor 10...', 'foto_autor10.jpg');

INSERT INTO Comentarios (ContenidoComentario, FechaPublicacionComentario, AutorComentario, NoticiaID)
VALUES
    ('Este es el comentario 1', '2023-09-26 10:00:00', 'Autor 1', 1),
    ('Este es el comentario 2', '2023-09-26 10:30:00', 'Autor 2', 2),
    ('Este es el comentario 3', '2023-09-26 11:00:00', 'Autor 3', 3),
    ('Este es el comentario 4', '2023-09-26 11:30:00', 'Autor 4', 4),
    ('Este es el comentario 5', '2023-09-26 12:00:00', 'Autor 5', 5),
    ('Este es el comentario 6', '2023-09-26 12:30:00', 'Autor 6', 6),
    ('Este es el comentario 7', '2023-09-26 13:00:00', 'Autor 7', 7),
    ('Este es el comentario 8', '2023-09-26 13:30:00', 'Autor 8', 8),
    ('Este es el comentario 9', '2023-09-26 14:00:00', 'Autor 9', 9),
    ('Este es el comentario 10', '2023-09-26 14:30:00', 'Autor 10', 10);
    INSERT INTO CategoriasNoticias (NombreCategoria)
VALUES
    ('Política'),
    ('Economía'),
    ('Deportes'),
    ('Cultura'),
    ('Ciencia'),
    ('Tecnología'),
    ('Entretenimiento'),
    ('Salud'),
    ('Internacional'),
    ('Nacional');
    INSERT INTO FuentesNoticias (NombreFuente, SitioWeb)
VALUES
    ('Fuente 1', 'www.fuente1.com'),
    ('Fuente 2', 'www.fuente2.com'),
    ('Fuente 3', 'www.fuente3.com'),
    ('Fuente 4', 'www.fuente4.com'),
    ('Fuente 5', 'www.fuente5.com'),
    ('Fuente 6', 'www.fuente6.com'),
    ('Fuente 7', 'www.fuente7.com'),
    ('Fuente 8', 'www.fuente8.com'),
    ('Fuente 9', 'www.fuente9.com'),
    ('Fuente 10', 'www.fuente10.com');
  INSERT INTO Noticias (Titulo, CuerpoNoticia, FechaPublicacion, AutorID, CategoriaID, FuenteID)
VALUES
    ('Noticia 1', 'Cuerpo de la noticia 1...', '2023-09-26', 1, 1, 1),
    ('Noticia 2', 'Cuerpo de la noticia 2...', '2023-09-27', 2, 2, 2),
    ('Noticia 3', 'Cuerpo de la noticia 3...', '2023-09-28', 3, 1, 3),
    ('Noticia 4', 'Cuerpo de la noticia 4...', '2023-09-29', 4, 3, 2),
    ('Noticia 5', 'Cuerpo de la noticia 5...', '2023-09-30', 5, 2, 1),
    ('Noticia 6', 'Cuerpo de la noticia 6...', '2023-10-01', 6, 3, 3),
    ('Noticia 7', 'Cuerpo de la noticia 7...', '2023-10-02', 7, 1, 2),
    ('Noticia 8', 'Cuerpo de la noticia 8...', '2023-10-03', 8, 2, 3),
    ('Noticia 9', 'Cuerpo de la noticia 9...', '2023-10-04', 9, 3, 1),
    ('Noticia 10', 'Cuerpo de la noticia 10...', '2023-10-05', 10, 1, 3);
    
    INSERT INTO Comentarios (ContenidoComentario, FechaPublicacionComentario, AutorComentario, NoticiaID)
VALUES
    ('Comentario 1', '2023-09-26 10:00:00', 'Usuario 1', 1),
    ('Comentario 2', '2023-09-26 10:30:00', 'Usuario 2', 2),
    ('Comentario 3', '2023-09-26 11:00:00', 'Usuario 3', 3),
    ('Comentario 4', '2023-09-26 11:30:00', 'Usuario 4', 4),
    ('Comentario 5', '2023-09-26 12:00:00', 'Usuario 5', 5),
    ('Comentario 6', '2023-09-26 12:30:00', 'Usuario 6', 6),
    ('Comentario 7', '2023-09-26 13:00:00', 'Usuario 7', 7),
    ('Comentario 8', '2023-09-26 13:30:00', 'Usuario 8', 8),
    ('Comentario 9', '2023-09-26 14:00:00', 'Usuario 9', 9),
    ('Comentario 10', '2023-09-26 14:30:00', 'Usuario 10', 10);
select * from noticias;

    
    
    

