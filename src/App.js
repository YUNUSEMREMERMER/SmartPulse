import React from "react";
//import {useState, useEfect} from  "react";
//import axios from "axios";
import './App.css';
import data from './data.json'

function App() {

  //ilgili adrese istek attığımda cors hatası aldım bazı yöntemlerle verilere ulaşabildim ama geçici yöntemler olduğu için tercih etmedim
  //verilen görevleri yerine getirebilmek için postmanden ilgili adrese istek atıp verilerin bir kısmını projeme elle ekleyip işlemleri öyle gerçekleştirdim
  //eğer verilere hata almadan ulaşabilseydim aşağıda yorum satırındaki kodları kullanarak verilere ulaşabilirdim

  //const[data, setData] = useState();
  // axios.get("https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=2022-03-31&startDate=2022-03-31")
  //   .then((response) => setData(response))
  //   .catch((error) => console.log(error));


  let groupedData = [];
  let listData = [];

  //data filtered by first two values 

  const filteredData = data.filter((data) => {
    if (data.conract.includes("PH")) {
      return data;
    }
  })


  // grouped data by conract values

  for (let i = 0; i < 24; i++) {
    groupedData[i] = filteredData.filter((data) => {
      if (i < 10) {
        return data.conract.endsWith(`0${i}`);
      }
      return data.conract.endsWith(i);
    })
  }
  

  for (let j = 0; j < 24; j++) {
    let toplamIslemTutari = 0;
    let toplamIslemMiktari = 0;
    let agirlikliOrtalamaFiyat = 0;

    if (groupedData[j].length !== 0) {
      for (let i = 0; i < groupedData[j].length; i++) {
        toplamIslemTutari += ((groupedData[j][i].price * groupedData[j][i].quantity) / 10);
        toplamIslemMiktari += (groupedData[j][i].quantity / 10)
      }
      agirlikliOrtalamaFiyat = toplamIslemTutari / toplamIslemMiktari;
    }
   
    listData[j] = {
      "tarih": groupedData[j].length === 0 ? " " : new Date(`20${groupedData[j][0].conract.substring(2, 4)}`, groupedData[j][0].conract.substring(4, 6), groupedData[j][0].conract.substring(7, 8), groupedData[j][0].conract.substring(8, 10)).toLocaleString(),
      "toplamIslemTutari": toplamIslemTutari,
      "toplamIslemMiktari": toplamIslemMiktari,
      "AgirlikliOrtalamaFiyat": agirlikliOrtalamaFiyat
    }
  }
  //console.log(listData);
  

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">Toplam İşlem Miktarı (MWh)</th>
            <th scope="col">Toplam İşlem Tutarı (TL)</th>
            <th scope="col">Ağırlık Ortalama Fiyat (TL/MWh)</th>
          </tr>
        </thead>
        <tbody>

          {
            listData.map((data,index) => (
              <tr key={index}>
                <th scope="row">{data.tarih}</th>
                <td>{data.toplamIslemMiktari} ₺</td>
                <td>{data.toplamIslemTutari}</td>
                <td>{data.AgirlikliOrtalamaFiyat}</td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  );
}

export default App;
