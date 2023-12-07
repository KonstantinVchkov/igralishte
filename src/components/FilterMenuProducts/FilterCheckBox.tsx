import { IFilterCheckbox } from "@/types/ProjectTypes";

export const FilterCheckbox: React.FC<IFilterCheckbox> = ({
  label,
  count,
  onChange,
  checked,
}) => (
  <li>
    <input type="checkbox" onChange={onChange} checked={checked} />
    {label} <span>({count})</span>
  </li>
);
