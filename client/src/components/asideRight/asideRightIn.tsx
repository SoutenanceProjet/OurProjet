import Button from './Button';
import { ChangeEvent, useState } from 'react';
import './asideRightIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { InputWithLabel } from './input-with-label';
import { api, setApiToken } from '../../api';

type UserConnexion = {
  email: string;
  password: string;
};

const blankField: UserConnexion = {
  email: '',
  password: '',
};

const AsideRightIn = () => {
  const [userConnexion, setUserConnexion] = useState<UserConnexion>(blankField);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setUserConnexion({ ...userConnexion, [id]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    console.log('here', e);

    try {
      const response = await api.post('/users/signin', userConnexion);
      setApiToken(response.data.authToken);

      navigate('/message');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const messages = error.response.data.message as string[] | string;
      setErrors(Array.isArray(messages) ? messages : [messages]);
      setTimeout(() => {
        setErrors([]);
      }, 10000);
    } finally {
      setLoading(false);
    }

    setUserConnexion(blankField);
  }

  return (
    <>
      <div className="asideRight">
        <h1 className="centering color">Se connecter</h1>

        {errors.length > 0 && (
          <div className="signUp__form__error ">
            {errors.map((err, index) => (
              <div key={index}>{err}</div>
            ))}
          </div>
        )}

        <form
          className="asideRightContainer"
          onSubmit={handleSubmit}>
          <InputWithLabel
            idValue="email"
            text="Adresse mail"
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={userConnexion.email}
            onChange={handleChange}
          />

          <InputWithLabel
            idValue="password"
            text="Mot de passe"
            type="password"
            id="password"
            placeholder="Mot de passe"
            value={userConnexion.password}
            onChange={handleChange}
          />

          <div className="forgottenPassword">
            <Link to="/forgetPassword">Mot de passe oublié ?</Link>
          </div>

          <Button
            text="Connexion"
            disabled={loading}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
};

export default AsideRightIn;
