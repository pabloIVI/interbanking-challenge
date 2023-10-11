import { TextField } from "@mui/material";

interface InputProps {
  disabled?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  type?: string;
  value?: string | undefined;
  variant?: "filled" | "outlined" | "standard";
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  disabled,
  label,
  name,
  required,
  type,
  value,
  variant,
  width,
  onChange,
}: InputProps) {
  return (
    <TextField
      placeholder={label}
      name={name}
      value={value}
      disabled={disabled}
      variant={variant}
      required={required}
      onChange={onChange}
      size="small"
      type={type || "text"}
      sx={{ background: "#fefefe", borderRadius: "20px", width: width }}
    />
  );
}

export default Input;
