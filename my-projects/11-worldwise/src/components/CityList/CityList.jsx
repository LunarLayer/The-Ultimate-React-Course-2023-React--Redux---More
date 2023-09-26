import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import { useCitites } from "../../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCitites();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
