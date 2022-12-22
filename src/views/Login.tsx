import React, { FormEvent } from 'react';
import { Button } from '../components';
import Input from '../components/ui/Input/Input';

const Login: React.FC = () => {
  const formChangeHandler = (event?: FormEvent<HTMLFormElement>) => {
    const { value, id } = event?.target as HTMLInputElement;
    console.log(value, id);
  };

  return (
    <div className="flex flex-1 flex-col justify-center w-full  h-full items-center">
      <form
        className="w-1/2 min-w-[300px] max-w-[400px]
        shadow-lg
        rounded-main
        mt-[20vh]
        px-[10vw] py-[5vh]
        space-y-[16px]
        self-center
        justify-self-center
        text-center"
        onChange={formChangeHandler}
      >
        <Input
          id="login"
          label="Имя пользователя"
          placeholder="Введите имя пользователя"
        />
        <Input
          id="password"
          label="Пароль"
          placeholder="Введите пароль"
        />
      </form>
      <Button.Primary onClick={() => console.log(1)}>Войти</Button.Primary>
    </div>
  );
};

export default React.memo(Login);
