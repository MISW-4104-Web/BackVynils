delete from public.album;
delete from public.performer;

INSERT INTO public.album(
	id, name, cover, "releaseDate", description, genre, "recordLabel")
	VALUES (100,'Buscando América', 'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg', '1984-08-01', 'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.','Salsa', 'Elektra');

INSERT INTO public.album(
	id, name, cover, "releaseDate", description, genre, "recordLabel")
	VALUES (101,'Poeta del pueblo', 'https://cdn.shopify.com/s/files/1/0275/3095/products/image_4931268b-7acf-4702-9c55-b2b3a03ed999_1024x1024.jpg', '1984-08-01', 'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.', 'Salsa', 'Elektra');

INSERT INTO public.album(
	id, name, cover, "releaseDate", description, genre, "recordLabel")
	VALUES (102,'A Night at the Opera', 'https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png', '1975-11-21', 'Es el cuarto álbum de estudio de la banda británica de rock Queen, publicado originalmente en 1975. Coproducido por Roy Thomas Baker y Queen, A Night at the Opera fue, en el tiempo de su lanzamiento, la producción más cara realizada.1​ Un éxito comercial, el álbum fue votado por el público y citado por publicaciones musicales como uno de los mejores trabajos de Queen y de la historia del rock.', 'Rock', 'EMI');

INSERT INTO public.album(
	id, name, cover, "releaseDate", description, genre, "recordLabel")
	VALUES (103,'A Day at the Races', 'https://www.udiscovermusic.com/wp-content/uploads/2019/11/a-day-at-the-races.jpg', '1976-12-10', 'El álbum fue grabado en los Estudios Sarm West, The Manor and Wessex en Inglaterra y con el ingeniero Mike Stone. El título del álbum es una referencia directa al anterior, A Night at the Opera. Ambos álbumes están titulados como películas de los hermanos Marx.', 'Rock', 'EMI');

INSERT INTO public.album(
	id, name, cover, "releaseDate", description, genre, "recordLabel")
	VALUES (104,'Cantora', 'https://www.cancioneros.com/imatges/1987.jpg','2009-03-27', 'Cantora es un álbum doble de duetos de la cantante argentina Mercedes Sosa con diversos intérpretes  y el último proyecto musical grabado por ella. Aunque la cantante ya había sufrido diversos problemas de salud cuando se grabó, el disco fue un éxito inmediato y se convirtió en disco de oro en Argentina en un tiempo récord. El primer disco logró obtener dos Grammy Latinos 2009, por Mejor álbum folclórico y Mejor diseño de empaque', 'Folk', 'Sony Music');

--Inserting bands

INSERT INTO public.performer(
	id, name, image, description, "birthDate", "creationDate", type, "bandId")
	VALUES (100, 'Queen', 'https://pm1.narvii.com/6724/a8b29909071e9d08517b40c748b6689649372852v2_hq.jpg', 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
	null, '1970-01-01', 'Band' , null);

INSERT INTO public.performer(
	id, name, image, description, "birthDate", "creationDate", type, "bandId")
	VALUES (101, 'Soda Stereo', 'https://upload.wikimedia.org/wikipedia/commons/6/6f/CeratiAlbertiBosio.jpg', 'Soda Stereo fue una banda argentina de rock formada en Buenos Aires en 1982 por Gustavo Cerati (voz, guitarra), Héctor «Zeta» Bosio (bajo) y Carlos Alberto Ficicchia «Charly Alberti» (batería), considerada una de las más influyentes e importantes bandas iberoamericanas de todos los tiempos y una leyenda de la música latina. Fueron el primer grupo de habla hispana en conseguir un éxito masivo en Latinoamérica y tuvieron un papel muy importante en el desarrollo y la difusión del rock iberoamericano y el rock en español durante las décadas de 1980 y 1990. Durante su carrera, fueron vanguardistas y marcaron tendencia en Latinoamérica, siendo protagonistas en diversos géneros como la música divertida de sus inicios, la new wave, el dark, el hard rock, el rock alternativo y el rock electrónico de sus finales.',
	null, '1982-01-01', 'Band' , null);

--Inserting musicians

INSERT INTO public.performer(
	id, name, image, description, "birthDate", "creationDate", type, "bandId")
	VALUES (102, 'Rubén Blades Bellido de Luna', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg', 'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
	'1948-07-16', null, 'Musician' , null);

INSERT INTO public.performer(
	id, name, image, description, "birthDate", "creationDate", type, "bandId")
	VALUES (103, 'Joan Manuel Serrat Teresa', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Serrat.jpg', 'Es un cantautor, compositor, actor, escritor, poeta y músico español.',
	'1943-12-27', null, 'Musician' , null);