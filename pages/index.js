// it's the main page
// https://our-domain.com/

import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AdminDashboard from '../components/admin/dashboard';

export default function Home() {
  function showData(){
    console.log("Hi Link");
  }
  return (
    <div>
      <main>
        <h1>It's the main page</h1>
        <button className='btn btn-primary' type='button' onClick={showData}>Add Link</button>      
      </main>
    </div>
  )
}
