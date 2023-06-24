import { TextField, FormControl } from '@mui/material';
interface Props {
  industry: string;
  onIndustryChange: (...args: any[]) => any;
}
const IndustryForm = ({ industry, onIndustryChange }: Props) => {
  return (
    <FormControl fullWidth>
      <TextField
        id="industry"
        label="Industry"
        value={industry}
        onChange={onIndustryChange}
      />
    </FormControl>
  );
};

export default IndustryForm;
