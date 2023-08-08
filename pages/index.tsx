import { Button, Htag, P, Tag } from '../components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance='primary' arrow='right'>CLick me</Button>
      <Button appearance='ghost' arrow='down' onClick={()=>console.log('click')}>CLick me</Button>
      <P >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
      <P size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
      <P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.</P>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color="red">mediem</Tag>
      <Tag size='m' color="primary">mediem</Tag>
   </>
  );
}