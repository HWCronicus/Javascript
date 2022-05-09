var presidents = [
  {
    id: 1,
    president: 1,
    nm: "George Washington",
    pp: "None, Federalist",
    tm: "1789-1797",
  },
  {
    id: 2,
    president: 2,
    nm: "John Adams",
    pp: "Federalist",
    tm: "1797-1801",
  },
  {
    id: 3,
    president: 3,
    nm: "Thomas Jefferson",
    pp: "Democratic-Republican",
    tm: "1801-1809",
  },
  {
    id: 4,
    president: 4,
    nm: "James Madison",
    pp: "Democratic-Republican",
    tm: "1809-1817",
  },
  {
    id: 5,
    president: 5,
    nm: "James Monroe",
    pp: "Democratic-Republican",
    tm: "1817-1825",
  },
  {
    id: 6,
    president: 6,
    nm: "John Quincy Adams",
    pp: "Democratic-Republican",
    tm: "1825-1829",
  },
  {
    id: 7,
    president: 7,
    nm: "Andrew Jackson",
    pp: "Democrat",
    tm: "1829-1837",
  },
  {
    id: 8,
    president: 8,
    nm: "Martin van Buren",
    pp: "Democrat",
    tm: "1837-1841",
  },
  {
    id: 9,
    president: 9,
    nm: "William H. Harrison",
    pp: "Whig",
    tm: "1841",
  },
  {
    id: 10,
    president: 10,
    nm: "John Tyler",
    pp: "Whig",
    tm: "1841-1845",
  },
  {
    id: 11,
    president: 11,
    nm: "James K. Polk",
    pp: "Democrat",
    tm: "1845-1849",
  },
  {
    id: 12,
    president: 12,
    nm: "Zachary Taylor",
    pp: "Whig",
    tm: "1849-1850",
  },
  {
    id: 13,
    president: 13,
    nm: "Millard Fillmore",
    pp: "Whig",
    tm: "1850-1853",
  },
  {
    id: 14,
    president: 14,
    nm: "Franklin Pierce",
    pp: "Democrat",
    tm: "1853-1857",
  },
  {
    id: 15,
    president: 15,
    nm: "James Buchanan",
    pp: "Democrat",
    tm: "1857-1861",
  },
  {
    id: 16,
    president: 16,
    nm: "Abraham Lincoln",
    pp: "Republican",
    tm: "1861-1865",
  },
  {
    id: 17,
    president: 17,
    nm: "Andrew Johnson",
    pp: "National Union",
    tm: "1865-1869",
  },
  {
    id: 18,
    president: 18,
    nm: "Ulysses S. Grant",
    pp: "Republican",
    tm: "1869-1877",
  },
  {
    id: 19,
    president: 19,
    nm: "Rutherford Hayes",
    pp: "Republican",
    tm: "1877-1881",
  },
  {
    id: 20,
    president: 20,
    nm: "James Garfield",
    pp: "Republican",
    tm: "1881",
  },
  {
    id: 21,
    president: 21,
    nm: "Chester Arthur",
    pp: "Republican",
    tm: "1881-1885",
  },
  {
    id: 22,
    president: 22,
    nm: "Grover Cleveland",
    pp: "Democrat",
    tm: "1885-1889",
  },
  {
    id: 23,
    president: 23,
    nm: "Benjamin Harrison",
    pp: "Republican",
    tm: "1889-1893",
  },
  {
    id: 24,
    president: 24,
    nm: "Grover Cleveland",
    pp: "Democrat",
    tm: "1893-1897",
  },
  {
    id: 25,
    president: 25,
    nm: "William McKinley",
    pp: "Republican",
    tm: "1897-1901",
  },
  {
    id: 26,
    president: 26,
    nm: "Theodore Roosevelt",
    pp: "Republican",
    tm: "1901-1909",
  },
  {
    id: 27,
    president: 27,
    nm: "William Taft",
    pp: "Republican",
    tm: "1909-1913",
  },
  {
    id: 28,
    president: 28,
    nm: "Woodrow Wilson",
    pp: "Democrat",
    tm: "1913-1921",
  },
  {
    id: 29,
    president: 29,
    nm: "Warren Harding",
    pp: "Republican",
    tm: "1921-1923",
  },
  {
    id: 30,
    president: 30,
    nm: "Calvin Coolidge",
    pp: "Republican",
    tm: "1923-1929",
  },
  {
    id: 31,
    president: 31,
    nm: "Herbert C. Hoover",
    pp: "Republican",
    tm: "1929-1933",
  },
  {
    id: 32,
    president: 32,
    nm: "Franklin Delano Roosevelt",
    pp: "Democrat",
    tm: "1933-1945",
  },
  {
    id: 33,
    president: 33,
    nm: "Harry S Truman",
    pp: "Democrat",
    tm: "1945-1953",
  },
  {
    id: 34,
    president: 34,
    nm: "Dwight David Eisenhower",
    pp: "Republican",
    tm: "1953-1961",
  },
  {
    id: 35,
    president: 35,
    nm: "John Fitzgerald Kennedy",
    pp: "Democrat",
    tm: "1961-1963",
  },
  {
    id: 36,
    president: 36,
    nm: "Lyndon Baines Johnson",
    pp: "Democrat",
    tm: "1963-1969",
  },
  {
    id: 37,
    president: 37,
    nm: "Richard Milhous Nixon",
    pp: "Republican",
    tm: "1969-1974",
  },
  {
    id: 38,
    president: 38,
    nm: "Gerald R. Ford",
    pp: "Republican",
    tm: "1974-1977",
  },
  {
    id: 39,
    president: 39,
    nm: "Jimmy Carter",
    pp: "Democrat",
    tm: "1977-1981",
  },
  {
    id: 40,
    president: 40,
    nm: "Ronald Wilson Reagan",
    pp: "Republican",
    tm: "1981-1989",
  },
  {
    id: 41,
    president: 41,
    nm: "George H. W. Bush",
    pp: "Republican",
    tm: "1989-1993",
  },
  {
    id: 42,
    president: 42,
    nm: "Bill Clinton",
    pp: "Democrat",
    tm: "1993-2001",
  },
  {
    id: 43,
    president: 43,
    nm: "George W. Bush",
    pp: "Republican",
    tm: "2001-2009",
  },
  {
    id: 44,
    president: 44,
    nm: "Barack Obama",
    pp: "Democrat",
    tm: "2009-2017",
  },
  {
    id: 45,
    president: 45,
    nm: "Donald Trump",
    pp: "Republican",
    tm: "2017-2021",
  },
  {
    id: 46,
    president: 46,
    nm: "Joseph R. Biden Jr.",
    pp: "Democrat",
    tm: "2021-",
  },
];

// filterParty = (array) =>{
//     var partyFilter = array.filter(function(obj){

//         if(obj.pp !== "Democrat"){
//             return true;
//         }
//     })
//     // console.log(partyFilter);
//     return partyFilter;
// }

// filterYears = (array) =>{
//     var yearFilter = array.filter(function(obj){
//         let splitYears = obj.tm.split("-");
//         let subtractYears = splitYears[1] - splitYears[0];
//         obj.tm = subtractYears
//         if(subtractYears > 4){
//             return true;
//         }

//     })
//     // console.log(yearFilter);
//     return yearFilter;

// }

// getGreatPresidents = () =>{
//     var filteredResults = filterParty(filterYears(presidents));
//     var mapResults = filteredResults.map(function (obj){
//         var splitName = obj.nm.split(" ");
//         var template = {
//             "id": obj.id,
//             "number": obj.president,
//             "firstName": splitName[0],
//             "lastName": splitName[2] ? splitName[2] : splitName[1],
//             "party": obj.pp,
//             "yearsInOffice": obj.tm
//         }
//         return template;
//     })
//     // console.log(mapResults)
//     return mapResults;
// }

const mapPresident = presidents.map((obj) => {
  let splitName = obj.nm.split(" ");
  let years = obj.tm.split("-");
  if (years.length > 5) {
    years = years[1] - years[0];
  } else {
    years = 1;
  }
  let template = {
    id: obj.id,
    number: obj.president,
    firstName: splitName[0],
    lastName: splitName[2] ? splitName[2] : splitName[1],
    party: obj.pp,
    yearsInOffice: years,
  };
  return template;
});

const filtered = mapPresident.filter(
  (obj) => obj.party !== "Democrat" && obj.yearsInOffice > 4
);
