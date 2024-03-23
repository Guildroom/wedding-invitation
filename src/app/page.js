import { connectToDataBase } from "./pages/api/api";
import Pages from "./pages/pages";


const get = async (request) => { 
    try {
      await connectToDataBase();    
    } catch (error) {
      console.log(error)
    }
  };


// const response = await fetch('/api/database/save', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ data: 'abc' }),
// });

export default function Home() {
  // get()
  return (
    <main>
      <Pages/>
    </main>
  );
}
