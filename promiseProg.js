// Fungsi untuk mendapatkan cuaca dari lokasi
const getWeather = (location) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const weatherData = {
          city: location,
          temperature: '30°C',
          condition: 'Cerah',
        };
  
        resolve(weatherData);
      }, 2000);
    });
  };
  
// Menggunakan promise dengan then dan catch
getWeather('Jakarta')
    .then((weather) => {
      console.log(`Cuaca di ${weather.city}: ${weather.condition}, suhu ${weather.temperature}`);
    })
    .catch((error) => {
      console.log('Gagal mendapatkan cuaca:', error.message);
    });


const fs = require('fs');

// Fungsi untuk membaca file teks
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
    };
    
// Menggunakan promise dengan try-catch
(async () => {
    try {
        const content = await readFile('file.txt');
        console.log('Isi file:', content);
      } catch (error) {
        console.log('Gagal membaca file:', error.message);
      }
    })();