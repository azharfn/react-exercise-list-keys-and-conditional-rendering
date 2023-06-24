import { useState } from "react";
import Table from "./Table";

const App = () => {
  const MentorsData = [
    {
      id: 1,
      name: "Muhammad Ramadhoni",
      house: "House FE 01",
      email: "ramadhoni@mail.com",
    },
    {
      id: 2,
      name: "Indra Akhmad Firdhaus",
      house: "House FE 02",
      email: "indra@mail.com",
    },
    {
      id: 3,
      name: "Dimitri Wahyudiputra",
      house: "House FE 03",
      email: "dimitri@mail.com",
    },
    {
      id: 4,
      name: "Maulana Fajar Ibrahim",
      house: "House FE 04",
      email: "fajar@mail.com",
    },
    {
      id: 5,
      name: "Tisa Monita",
      house: "House FE 05",
      email: "tisa@mail.com",
    },
    {
      id: 6,
      name: "Annisa Tahira",
      house: "House FE 06",
      email: "annisa@mail.com",
    },
    {
      id: 7,
      name: "Kobar Septyanus Sumarsono",
      house: "House FE 07",
      email: "kobar@mail.com",
    },
    {
      id: 8,
      name: "Asrul Harahap",
      house: "House FE 08",
      email: "asrul@mail.com",
    },
    {
      id: 9,
      name: "Alvin Arkansas",
      house: "House FE 09",
      email: "alvin@mail.com",
    },
    {
      id: 10,
      name: "Mirza Chilman Garin",
      house: "House FE 10",
      email: "mirza@mail.com",
    },
    {
      id: 11,
      name: "Tandry Syawaludin Soedijanto",
      house: "House FE 11",
      email: "tandry@mail.com",
    },
    {
      id: 12,
      name: "Ricky Kurniawan",
      house: "House FE 12",
      email: "ricky@mail.com",
    },
    {
      id: 13,
      name: "Pahlevi Fikri Auliya",
      house: "House FE 13",
      email: "pahlevi@mail.com",
    },
  ];

//buat state dengan array kosong
const [mentors, setMentors] = useState([])

//fungsi event handlingnya 
const refreshData = () => {
  setMentors(MentorsData);
}

  return (
    <div>
      {/* conditional rendering jika button refreshnya menampilkan data index >1 maka akan menghilang */}
      {!mentors[0] && (
        <button onClick={refreshData}>Refresh</button>
      )}
      
      <Table mentors={mentors}/>
    </div>
  );
};

export default App;
