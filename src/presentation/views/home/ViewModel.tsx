import { useState } from 'react';

const HomeViewModel = ({LogoutUseCase}) => {
  const [_result, setResult] = useState(false);

  const logout = async(): Promise<void> => {
    const { result } = await LogoutUseCase.run();
    setResult(result);
  };

  return {
    logout,
    _result,
  };
};

export default HomeViewModel;
