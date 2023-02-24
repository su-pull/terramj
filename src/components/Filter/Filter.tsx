import { useAtom } from "jotai";
import filterAtom from "hooks/useFilter";

const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  return (
    <div className="Filter">
      <div
        aria-expanded={filter}
        onClick={() => {
          setFilter(false);
        }}
      />
    </div>
  );
};

export default Filter;
