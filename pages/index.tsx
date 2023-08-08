import { Button, Htag, P } from '../components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance='primary' arrow='right'>CLick me</Button>
      <Button appearance='ghost' arrow='down'>CLick me</Button>
      <P >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
      <P size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
   </>
  );
}