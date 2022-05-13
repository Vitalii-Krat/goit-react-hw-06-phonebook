import { Container, Title } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactFilter';
import ContactList from '../ContactList';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
