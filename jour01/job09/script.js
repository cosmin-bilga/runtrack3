function tri(numbers, order)
{
   if (order === "desc")
      return numbers.sort(sortDesc);
   return numbers.sort(sortAsc);
}

function sortAsc(a, b)
{
   return a - b;
}

function sortDesc(a, b)
{
   return b - a;
}

console.log(tri([3,5,6,2,1], "asc"));
console.log(tri([3,5,6,2,1], "desc"));