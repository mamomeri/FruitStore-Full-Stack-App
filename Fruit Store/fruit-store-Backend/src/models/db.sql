DROP DATABASE fruit_storeDB;


-- Crear la base de datos
CREATE DATABASE fruit_storeDB;

-- Usar la base de datos
USE fruit_storeDB;

-- Crear la tabla Users
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('buyer', 'seller') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear la tabla Fruits
CREATE TABLE Fruits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    sellerId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sellerId) REFERENCES Users(id)
);

-- Crear la tabla Orders
CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    buyerId INT,
    totalPrice DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (buyerId) REFERENCES Users(id)
);

-- Crear la tabla OrderItems
CREATE TABLE OrderItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    fruitId INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES Orders(id),
    FOREIGN KEY (fruitId) REFERENCES Fruits(id)
);

-- Insertar usuarios vendedores
INSERT INTO Users (username, email, password, role, createdAt, updatedAt) VALUES
('vendor1', 'vendor1@example.com', '$2b$10$4DjF.SryyV5HdOvorSASs.kmocD6V//FD1zBIxNML0s47KiitzyEa', 'seller', NOW(), NOW()),
('vendor2', 'vendor2@example.com', '$2b$10$/qXwXeU.ZOS1SetrGpzTJupO4FJ1DhZwF6scVpFPBPledioEeBvmG', 'seller', NOW(), NOW());



-- Insertar frutas asociadas con los vendedores
INSERT INTO Fruits (name, price, quantity, sellerId, createdAt, updatedAt) VALUES
('Banana', 0.99, 100, 1, NOW(), NOW()),  -- Asociado con vendor1
('Coco', 2.50, 50, 1, NOW(), NOW()),      -- Asociado con vendor1
('Guanábana', 3.00, 30, 2, NOW(), NOW()), -- Asociado con vendor2
('Kiwi', 1.50, 200, 2, NOW(), NOW()),     -- Asociado con vendor2
('Manzana', 0.80, 150, 1, NOW(), NOW()),  -- Asociado con vendor1
('Sandía', 4.00, 20, 2, NOW(), NOW()),    -- Asociado con vendor2
('Uvas', 2.00, 120, 1, NOW(), NOW());     -- Asociado con vendor1

-- Insertar usuarios compradores
INSERT INTO Users (username, email, password, role, createdAt, updatedAt) VALUES
('buyer1', 'buyer1@example.com', '$2b$10$UWDI7M3Zex33w1OkkYn99u5h2aTbp8lO5yaAnKhiddFkUnJ/SaTSG', 'buyer', NOW(), NOW()),
('buyer2', 'buyer2@example.com', '$2b$10$7.Jhy0m55aq8db7qwnt/lutgZwSFlRJUBx/bYAuYra3zDq5vSnM5q', 'buyer', NOW(), NOW());


-- Insertar órdenes realizadas por los compradores
INSERT INTO Orders (buyerId, totalPrice, createdAt, updatedAt) VALUES
(3, 12.50, NOW(), NOW()),  -- Orden realizada por buyer1
(4, 8.00, NOW(), NOW());   -- Orden realizada por buyer2

-- Insertar items de las órdenes, relacionando órdenes y frutas
INSERT INTO OrderItems (orderId, fruitId, quantity, price, createdAt, updatedAt) VALUES
(1, 1, 10, 9.90, NOW(), NOW()),  -- Orden 1: 10 Bananas (precio total: 9.90)
(1, 5, 3, 2.40, NOW(), NOW()),   -- Orden 1: 3 Manzanas (precio total: 2.40)
(2, 7, 4, 8.00, NOW(), NOW());   -- Orden 2: 4 Uvas (precio total: 8.00)

select * from fruits;