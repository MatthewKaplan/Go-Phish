const cleanSongs = data => {
  const songInfo = data.map(song =>{
    return {
      id: song.id,
      slug: song.slug,
      title: song.title
    }
  });
  return songInfo;
};

const cleanRandomMovie = data => {
  const movieInfo = {
    summary: data.opening_crawl,
    title: data.title,
    releaseDate: data.release_date
  };
  return movieInfo;
};

const cleanPeopleData = data => {
  const peopleInfo = data.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      population: person.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };
  });
  return peopleInfo;
};

const cleanVehiclesData = data => {
  const vehicleInfo = data.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      starship_class: vehicle.starship_class,
      passengers: vehicle.passengers.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };
  });
  return vehicleInfo;
};

const cleanPlanetsData = data => {
  const planetInfo = data.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      residents: planet.residents.map((resident, index) => {
        return (index ? ", " : "") + resident.name;
      })
    };
  });
  return planetInfo;
};

export { cleanSongs };
