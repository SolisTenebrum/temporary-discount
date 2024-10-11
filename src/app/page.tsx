import App from '@/components/App';
import { IPlan } from '@/types/types';
import { fetchData } from '@/utils/data';

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <App data={data}/>
    </>
  );
}
