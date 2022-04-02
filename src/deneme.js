
export default function deneme(){

    let groupData=[];
    let listData=[];
        
    const data = [
        {
            "id": 507291151,
            "date": "2022-03-31T18:52:50.000+0300",
            "conract": "PH22033120",
            "price": 1754.94,
            "quantity": 9
        },
        {
            "id": 507291153,
            "date": "2022-03-31T18:52:50.000+0300",
            "conract": "PH22033100",
            "price": 1754.95,
            "quantity": 10
        },
        {
            "id": 507291334,
            "date": "2022-03-31T18:52:55.000+0300",
            "conract": "PH22033104",
            "price": 1750.34,
            "quantity": 25
        },
        {
            "id": 507291522,
            "date": "2022-03-31T18:52:55.000+0300",
            "conract": "PH22033109",
            "price": 1750.33,
            "quantity": 105
        },
        {
            "id": 507291364,
            "date": "2022-03-31T18:53:03.000+0300",
            "conract": "PH22033120",
            "price": 1754.95,
            "quantity": 9
        },
        {
            "id": 507291254,
            "date": "2022-03-31T18:53:05.000+0300",
            "conract": "PH22033121",
            "price": 1740,
            "quantity": 50
        },
        {
            "id": 507291913,
            "date": "2022-03-31T18:53:17.000+0300",
            "conract": "PH22033112",
            "price": 1744.89,
            "quantity": 8
        },
        {
            "id": 507291436,
            "date": "2022-03-31T18:53:23.000+0300",
            "conract": "PB22033120-01",
            "price": 1745,
            "quantity": 46
        },
        {
            "id": 507291443,
            "date": "2022-03-31T18:53:23.000+0300",
            "conract": "PB22033120-01",
            "price": 1745,
            "quantity": 28
        },
        {
            "id": 507291634,
            "date": "2022-03-31T18:53:23.000+0300",
            "conract": "PB22033120-01",
            "price": 1745,
            "quantity": 26
        },
        {
            "id": 507286155,
            "date": "2022-03-31T18:48:32.000+0300",
            "conract": "PH22033121",
            "price": 1735.01,
            "quantity": 6
        },
        {
            "id": 507286344,
            "date": "2022-03-31T18:48:32.000+0300",
            "conract": "PH22033122",
            "price": 1750.01,
            "quantity": 11
        },
        {
            "id": 507286367,
            "date": "2022-03-31T18:48:37.000+0300",
            "conract": "PH22033122",
            "price": 1750.01,
            "quantity": 10
        },
        {
            "id": 507286038,
            "date": "2022-03-31T18:48:41.000+0300",
            "conract": "PH22033120",
            "price": 1750.01,
            "quantity": 20
        },
        {
            "id": 507286584,
            "date": "2022-03-31T18:49:01.000+0300",
            "conract": "PH22033109",
            "price": 1750.01,
            "quantity": 8
        },
        {
            "id": 507283058,
            "date": "2022-03-31T18:46:28.000+0300",
            "conract": "PH22033123",
            "price": 1692.57,
            "quantity": 1
        },
        {
            "id": 507283061,
            "date": "2022-03-31T18:46:28.000+0300",
            "conract": "PH22033123",
            "price": 1694.99,
            "quantity": 262
        },
        {
            "id": 506149222,
            "date": "2022-03-31T00:06:44.000+0300",
            "conract": "PH22033111",
            "price": 1721.12,
            "quantity": 18
        },
        {
          "id": 506142621,
          "date": "2022-03-31T00:00:01.000+0300",
          "conract": "PH22033102",
          "price": 1702,
          "quantity": 124
      },
      {
          "id": 506142744,
          "date": "2022-03-31T00:00:01.000+0300",
          "conract": "PH22033102",
          "price": 1708.99,
          "quantity": 12
      },
      {
          "id": 506142895,
          "date": "2022-03-31T00:00:36.000+0300",
          "conract": "PH22033106",
          "price": 1700,
          "quantity": 243
      },
      {
          "id": 506143166,
          "date": "2022-03-31T00:00:36.000+0300",
          "conract": "PH22033106",
          "price": 1700.01,
          "quantity": 1
      },
      {
          "id": 506143602,
          "date": "2022-03-31T00:01:01.000+0300",
          "conract": "PH22033112",
          "price": 1704.98,
          "quantity": 1
      },
      {
          "id": 506143655,
          "date": "2022-03-31T00:01:14.000+0300",
          "conract": "PH22033105",
          "price": 1705,
          "quantity": 52
      },
      {
          "id": 506144521,
          "date": "2022-03-31T00:01:47.000+0300",
          "conract": "PH22033103",
          "price": 1701.01,
          "quantity": 31
      },
      {
          "id": 506144784,
          "date": "2022-03-31T00:02:28.000+0300",
          "conract": "PH22033103",
          "price": 1700.95,
          "quantity": 5
      },
      {
          "id": 506145453,
          "date": "2022-03-31T00:03:12.000+0300",
          "conract": "PH22033105",
          "price": 1700,
          "quantity": 70
      },
      {
          "id": 506146644,
          "date": "2022-03-31T00:04:50.000+0300",
          "conract": "PH22033108",
          "price": 1745.11,
          "quantity": 5
      },
      {
          "id": 506147059,
          "date": "2022-03-31T00:05:12.000+0300",
          "conract": "PH22033107",
          "price": 1730,
          "quantity": 29
      },
      {
          "id": 506147251,
          "date": "2022-03-31T00:05:33.000+0300",
          "conract": "PH22033110",
          "price": 1717,
          "quantity": 280
      },
      {
        "id": 506329033,
        "date": "2022-03-31T03:53:23.000+0300",
        "conract": "PB22033105-01",
        "price": 1745,
        "quantity": 10
    },
    {
        "id": 507291334,
        "date": "2022-03-31T18:52:55.000+0300",
        "conract": "PH22033100",
        "price": 1750.34,
        "quantity": 25
    },
    {
        "id": 507291522,
        "date": "2022-03-31T18:52:55.000+0300",
        "conract": "PH22033116",
        "price": 1750.33,
        "quantity": 105
    },
    {
        "id": 507291364,
        "date": "2022-03-31T18:53:03.000+0300",
        "conract": "PH22033115",
        "price": 1754.95,
        "quantity": 9
    },
    {
        "id": 507291254,
        "date": "2022-03-31T18:53:05.000+0300",
        "conract": "PH22033114",
        "price": 1740,
        "quantity": 50
    },
    {
        "id": 507291913,
        "date": "2022-03-31T18:53:17.000+0300",
        "conract": "PH22033101",
        "price": 1744.89,
        "quantity": 8
    },
    {
        "id": 507291436,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 46
    },
    {
        "id": 507291334,
        "date": "2022-03-31T18:52:55.000+0300",
        "conract": "PH22033100",
        "price": 1750.34,
        "quantity": 25
    },
    {
        "id": 507291522,
        "date": "2022-03-31T18:52:55.000+0300",
        "conract": "PH22033116",
        "price": 1750.33,
        "quantity": 105
    },
    {
        "id": 507291364,
        "date": "2022-03-31T18:53:03.000+0300",
        "conract": "PH22033115",
        "price": 1754.95,
        "quantity": 9
    },
    {
        "id": 507291254,
        "date": "2022-03-31T18:53:05.000+0300",
        "conract": "PH22033114",
        "price": 1740,
        "quantity": 50
    },
    {
        "id": 507291913,
        "date": "2022-03-31T18:53:17.000+0300",
        "conract": "PH220301",
        "price": 1744.89,
        "quantity": 8
    },
    {
        "id": 507291436,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 46
    },
      {
          "id": 506147592,
          "date": "2022-03-31T00:05:33.000+0300",
          "conract": "PH22033101",
          "price": 1717.21,
          "quantity": 106
      },
      {
          "id": 506147618,
          "date": "2022-03-31T00:05:37.000+0300",
          "conract": "PH22033113",
          "price": 1745.01,
          "quantity": 5
      },
      {
          "id": 506147487,
          "date": "2022-03-31T00:05:50.000+0300",
          "conract": "PH22033114",
          "price": 1708.4,
          "quantity": 5
      },
      {
          "id": 506147678,
          "date": "2022-03-31T00:05:51.000+0300",
          "conract": "PH22033115",
          "price": 1708.48,
          "quantity": 13
      },
      {
        "id": 506329057,
        "date": "2022-03-31T03:53:24.000+0300",
        "conract": "PB22033105-01",
        "price": 1745,
        "quantity": 4
    },
    {
        "id": 507291443,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 28
    },
    {
        "id": 507291634,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 26
    },
    {
        "id": 507286155,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033116",
        "price": 1735.01,
        "quantity": 6
    },
    {
        "id": 507286344,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033117",
        "price": 1750.01,
        "quantity": 11
    },
    {
        "id": 507291443,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 28
    },
    {
        "id": 507291634,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 26
    },
    {
        "id": 507286155,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033118",
        "price": 1735.01,
        "quantity": 6
    },
    {
        "id": 507286344,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH220331219",
        "price": 1750.01,
        "quantity": 11
    },
      {
          "id": 506147592,
          "date": "2022-03-31T00:05:33.000+0300",
          "conract": "PH22033101",
          "price": 1717.21,
          "quantity": 106
      },
      {
          "id": 506147618,
          "date": "2022-03-31T00:05:37.000+0300",
          "conract": "PH22033113",
          "price": 1745.01,
          "quantity": 5
      },
      {
          "id": 506147487,
          "date": "2022-03-31T00:05:50.000+0300",
          "conract": "PH22033114",
          "price": 1708.4,
          "quantity": 5
      },
      {
          "id": 506147678,
          "date": "2022-03-31T00:05:51.000+0300",
          "conract": "PH22033115",
          "price": 1708.48,
          "quantity": 13
      },
      {
        "id": 506329057,
        "date": "2022-03-31T03:53:24.000+0300",
        "conract": "PB22033105-01",
        "price": 1745,
        "quantity": 4
    },
    {
        "id": 507291443,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 28
    },
    {
        "id": 507291634,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 26
    },
    {
        "id": 507286155,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033116",
        "price": 1735.01,
        "quantity": 6
    },
    {
        "id": 507286344,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033117",
        "price": 1750.01,
        "quantity": 11
    },
    {
        "id": 507291443,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 28
    },
    {
        "id": 507291634,
        "date": "2022-03-31T18:53:23.000+0300",
        "conract": "PB22033120-01",
        "price": 1745,
        "quantity": 26
    },
    {
        "id": 507286155,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH22033118",
        "price": 1735.01,
        "quantity": 6
    },
    {
        "id": 507286344,
        "date": "2022-03-31T18:48:32.000+0300",
        "conract": "PH220331219",
        "price": 1750.01,
        "quantity": 11
    },
      
    
      ]

    const filterData = data.filter((data) => {
          if(data.conract.includes("PH")){
              return data;
          }
      })
      
    //console.log(filterData);

    // grouped 
    
    for(let i=0;i<24;i++){
        groupData[i] = filterData.filter((data) => {
                if(i<10){
                    return data.conract.endsWith(`0${i}`);
                }
            return data.conract.endsWith(i);
        })
      }
      //console.log(groupData);
      //console.log(groupData[2][3].conract);
      


      for(let j=0;j<24;j++){
        let toplamIslemTutari = 0;
        let toplamIslemMiktari = 0;
        let agirlikliOrtalamaFiyat = 0;

        if(groupData[j].length !== 0){
            for(let i=0;i<groupData[j].length;i++){
               toplamIslemTutari += ( ( groupData[j][i].price * groupData[j][i].quantity ) / 10 );
               toplamIslemMiktari += ( groupData[j][i].quantity / 10 )
            }
            agirlikliOrtalamaFiyat = toplamIslemTutari / toplamIslemMiktari;
        }

        listData[j] = {
            "tarih":groupData[j].length === 0 ? " " : `${groupData[j][0].conract.substring(6,8)}.${groupData[j][0].conract.substring(4,6)}.20${groupData[j][0].conract.substring(2,4)} ${groupData[j][0].conract.substring(8,10)}:00` ,
            "toplamIslemTutari":toplamIslemTutari,
            "toplamIslemMiktari":toplamIslemMiktari,
            "AgirlikliOrtalamaFiyat":agirlikliOrtalamaFiyat
        }
    }
    //console.log(listData);

    
}
  
    
    