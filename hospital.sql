-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2023 a las 21:00:42
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment`
--

CREATE TABLE `appointment` (
  `Id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `Doctor_id` int(11) NOT NULL,
  `scheduledDate` time NOT NULL,
  `Numero_Orden` int(11) DEFAULT NULL CHECK (`Numero_Orden` >= 1),
  `Day` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `appointment`
--

INSERT INTO `appointment` (`Id`, `patient_id`, `Doctor_id`, `scheduledDate`, `Numero_Orden`, `Day`) VALUES
(2, 2, 1, '12:00:00', 2, 'V'),
(3, 3, 3, '12:00:00', 2, 'D'),
(4, 1, 2, '12:00:00', 3, 'X');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coment`
--

CREATE TABLE `coment` (
  `Id` int(11) NOT NULL,
  `Usuario` int(50) NOT NULL,
  `comentario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coment`
--

INSERT INTO `coment` (`Id`, `Usuario`, `comentario`) VALUES
(1, 1, 'Fue un buen servicio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `days`
--

CREATE TABLE `days` (
  `ID` int(11) NOT NULL,
  `DAY` char(1) NOT NULL,
  `Doctor_id` int(11) DEFAULT NULL,
  `Schedules_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `days`
--

INSERT INTO `days` (`ID`, `DAY`, `Doctor_id`, `Schedules_id`) VALUES
(1, 'V', 1, 2),
(2, 'S', 2, 1),
(4, 'X', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `Id` int(11) NOT NULL,
  `NameDoctor` varchar(50) DEFAULT NULL,
  `SurnamesDoctor` varchar(50) DEFAULT NULL,
  `Specialty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`Id`, `NameDoctor`, `SurnamesDoctor`, `Specialty`) VALUES
(1, 'Andres', 'Delgado', 2),
(2, 'Raul', 'Jiménez ', 4),
(3, 'Melisa', 'Gutiérrez ', 1),
(4, 'Oscar', 'Gutiérrez ', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient`
--

CREATE TABLE `patient` (
  `Id` int(11) NOT NULL,
  `NamePatient` varchar(50) NOT NULL,
  `SurnamesPatient` varchar(50) NOT NULL,
  `Direction` varchar(50) NOT NULL,
  `Phone` varchar(12) NOT NULL,
  `NSS` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `patient`
--

INSERT INTO `patient` (`Id`, `NamePatient`, `SurnamesPatient`, `Direction`, `Phone`, `NSS`) VALUES
(1, 'Andrea', 'Padilla', 'Salto de los salados', '4494131567', '123456789112'),
(2, 'Oscar', 'Gómez', 'Salto de los arcos', '4494131555', '123456789114'),
(3, 'Mariana', 'Santillan ', 'Lomas del ajedrez', '4494131598', '123456789119');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

CREATE TABLE `schedules` (
  `Id` int(11) NOT NULL,
  `StarTime` time NOT NULL,
  `EndTime` time NOT NULL,
  `Spaces` int(11) DEFAULT NULL CHECK (`Spaces` >= 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `schedules`
--

INSERT INTO `schedules` (`Id`, `StarTime`, `EndTime`, `Spaces`) VALUES
(1, '09:10:00', '15:23:00', 10),
(2, '08:00:00', '20:23:00', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `specialty`
--

CREATE TABLE `specialty` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `specialty`
--

INSERT INTO `specialty` (`Id`, `Name`) VALUES
(1, 'Cirujano'),
(2, 'Neurologo'),
(3, 'Enfermero'),
(4, 'Traumatólogo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Passwords` varchar(50) NOT NULL,
  `Role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Email`, `Passwords`, `Role`) VALUES
(1, 'paciente@gmail.com', 'Pass1234', 1),
(2, 'Admin@gmail.com', 'Pass1234', 3),
(3, 'Doctor@gmail.com', 'Pass1234', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `Doctor_id` (`Doctor_id`);

--
-- Indices de la tabla `coment`
--
ALTER TABLE `coment`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Usuario` (`Usuario`);

--
-- Indices de la tabla `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Doctor_id` (`Doctor_id`),
  ADD KEY `Schedules_id` (`Schedules_id`);

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Specialty` (`Specialty`);

--
-- Indices de la tabla `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `specialty`
--
ALTER TABLE `specialty`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointment`
--
ALTER TABLE `appointment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `coment`
--
ALTER TABLE `coment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `days`
--
ALTER TABLE `days`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `doctor`
--
ALTER TABLE `doctor`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `patient`
--
ALTER TABLE `patient`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `schedules`
--
ALTER TABLE `schedules`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `specialty`
--
ALTER TABLE `specialty`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`Id`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`Doctor_id`) REFERENCES `doctor` (`Id`);

--
-- Filtros para la tabla `coment`
--
ALTER TABLE `coment`
  ADD CONSTRAINT `coment_ibfk_1` FOREIGN KEY (`Usuario`) REFERENCES `patient` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `days`
--
ALTER TABLE `days`
  ADD CONSTRAINT `days_ibfk_1` FOREIGN KEY (`Doctor_id`) REFERENCES `doctor` (`Id`),
  ADD CONSTRAINT `days_ibfk_2` FOREIGN KEY (`Schedules_id`) REFERENCES `schedules` (`Id`);

--
-- Filtros para la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`Specialty`) REFERENCES `specialty` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
