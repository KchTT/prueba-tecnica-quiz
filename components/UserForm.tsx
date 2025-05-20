import { validateEmail } from '@/utils';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './ui/Button';
import Input from './ui/Input';
import Panel from './ui/Panel';
import Paragraph from './ui/Paragraph';
import Title from './ui/Title';

function UserForm({handleSend}:{handleSend: (user: { nombre: string; email: string }) => void}) {
  const [user, setUser] = useState({
    nombre: '',
    email: '',
  });

  const handleInputChange = (campo: string, txt: string) => {
    setUser(prev => ({
      ...prev,
      [campo]: txt,
    }));
  };

  const handleSubmit = () => {
    if(user.nombre.length === 0 || user.email.length === 0) {
      alert("Debe completar los campos");
      return;
    }else if(!validateEmail(user.email)) {
      alert("Debe ingresar un email valido");
      return;
    } else {
      handleSend(user);
      setUser({
        nombre: '',
        email: '',
      });
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Panel>
        <Title customCss={{marginBottom:20}}>Please enter your information to see your results</Title>
        <Input
          campo="nombre"
          titulo="Name"
          valor={user.nombre}
          onChange={handleInputChange}
          customContainerCss={ { marginBottom: 20 } }
        />
        <Input
          teclado='email-address'
          campo="email"
          titulo="Email"
          valor={user.email}
          onChange={handleInputChange}
        />
        <Paragraph customCss={{marginBottom:20}}>
          {`By providing your email address, you'll be signed up to receive periodic emails and financial education from Abacus, which you can unsubscribe from at any time.`}
        </Paragraph>
        <Button handleClick={handleSubmit}>
          See Results
        </Button>
      </Panel>
    </View>
  );
}

export default UserForm;