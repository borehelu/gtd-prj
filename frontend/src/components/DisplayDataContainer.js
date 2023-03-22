import useFetch from "../hooks/useFetch";

const DisplayDataContainer = ({ url, render }) => {
  const { data, isLoading, error } = useFetch(url);

  return render({ data, isLoading, error });
};

export default DisplayDataContainer;
