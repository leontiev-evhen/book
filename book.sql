CREATE TABLE `books` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`description` TEXT NOT NULL,
	`price` int NOT NULL,
	`discaunt` int NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `authors` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `genres` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `book2author` (
	`id_book` int NOT NULL,
	`id_author` int NOT NULL
);

CREATE TABLE `book2genre` (
	`id_book` int NOT NULL,
	`id_genre` int NOT NULL
);

CREATE TABLE `customers` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`discaunt` int NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
	`id` int NOT NULL AUTO_INCREMENT,
	`id_book` int NOT NULL,
	`id_customer` int NOT NULL,
	`count` int NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
	`id` int NOT NULL AUTO_INCREMENT,
	`sum` int NOT NULL,
	`create_at` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `payment_system` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `status_order` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `order_info` (
	`id_order` int NOT NULL,
	`id_book` int NOT NULL,
	`id_customer` int NOT NULL,
	`count` int NOT NULL
);

CREATE TABLE `order2status` (
	`id_order` int NOT NULL,
	`id_status` int NOT NULL
);

CREATE TABLE `order2payment_system` (
	`id_order` int NOT NULL,
	`id_payment_system` int NOT NULL
);

CREATE TABLE `history_book` (
	`id` int NOT NULL AUTO_INCREMENT,
	`id_book` int NOT NULL,
	`name_book` varchar(255) NOT NULL,
	`price_book` int NOT NULL,
	`discaunt_book` int NOT NULL,
	`author_book` int NOT NULL,
	PRIMARY KEY (`id`)
);
