const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini bukan hari kerja'));
        }
      }, 3000);
    });
  }

// Menggunakan then catch
cekHariKerja('senin')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
// Menggunakan try catch
async function checkHariKerja(day) {
    try {
      const result = await cekHariKerja(day);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  checkHariKerja('senin');