import Select from '../Components/Select/Select';

function Home() {
  const options = [
    {
      id: 1,
      label: 'Книги',
      value: 'books',
    },
    {
      id: 2,
      label: 'Фильмы',
      value: 'films',
    },
    {
      id: 3,
      label: 'Музыка',
      value: 'music',
    },
  ];

  return (
    <div
      style={{
        margin: '100px auto;',
        width: '400px;',
      }}
    >
      <form>
        <Select
          id='category'
          name='category'
          label='Выберите категорию:'
          placeholder='Категория'
          options={options}
        />
      </form>
    </div>
  );
}

export default Home;
