const getMonth = (callback) => {
    setTimeout(() => {
      let error = false;
      let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      if (!error) {
        callback(null, month);
      } else {
        callback(new Error("Sorry Data Not Found"), []);
      }
    }, 4000);
  };
  
const displayMonths = (error, months) => {
    if (error) {
      console.log(error.message);
    } else {
      const monthList = months.map((month, index) => `${index + 1}. ${month}`);
      console.log(monthList);
    }
  };
  
// Contoh penggunaan
getMonth(displayMonths);