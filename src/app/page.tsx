import App from '@/components/App';
import { fetchData } from '@/utils/data';

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <App data={data}/>
    </>
  );
}
