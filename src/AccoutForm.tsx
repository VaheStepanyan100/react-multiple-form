import FormWrapper from './FormWrapper';

type AccoutData = {
  email: string;
  password: string;
};

type AccountFormProps = AccoutData & {
  updateFields: (fields: Partial<AccoutData>) => void;
};

export default function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Accout Creation">
      {' '}
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
