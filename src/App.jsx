import React from 'react';
import Button from '@mui/material/Button';
import Radio from './Form/Radio';

const questions = [
  {
    question: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    response: 'React.createElement()',
    id: 'p1',
  },
  {
    question: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    response: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    question: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    response: 'useFetch()',
    id: 'p3',
  },
  {
    question: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    response: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [responses, setResponses] = React.useState([
    {
      p1: '',
      p2: '',
      p3: '',
      p4: '',
    },
  ]);

  const [slide, setSlide] = React.useState(0);

  const handleChange = ({ target }) => {
    setResponses({ ...responses, [target.id]: target.value });
  };

  return (
    <form>
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          key={question.id}
          value={responses[question.id]}
          onChange={handleChange}
          {...question}
        />
      ))}
      <Button variant="contained">Próxima</Button>
    </form>
  );
};

export default App;
