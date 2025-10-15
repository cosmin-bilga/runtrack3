function jourtravaille(date)
{
   const joursferiees = ["01-01-2020"  , "13-04-2020", "01-05-2020", "08-05-2020",
                              "21-05-2020", "01-06-2020", "14-07-2020", "15-08-2020",
                              "01-11-2020", "11-11-2020", "25-12-2020"
   ];

   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const year = date.getFullYear();

   if (joursferiees.includes(day + "-" + month + "-" + year))
      console.log("Le " + day + " " + month + " " + year + " est un jour férié");
   else if (date.getDay() > 4)
      console.log("Non, " + day + " " + month + " " + year + " est un week-end");
   else
      console.log("Oui, " + day + " " + month + " " + year + " est un jour travaillé");
}

jourtravaille(new Date(2020, 11, 18));