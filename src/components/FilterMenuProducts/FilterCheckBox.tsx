interface IFilterCheckbox {
  label: string; // For the label of the checkbox
  count: number; // For the count to be displayed next to the label
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // For the change event handler
  checked: boolean; // For the checkbox state
}

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
