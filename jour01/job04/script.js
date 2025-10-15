/*Les années sont bissextiles si elles sont multiples de quatre,
mais pas si elles sont multiples de cent,
à l'exception des années multiples de quatre cents qui,
elles, sont également bissextiles. */

function bixestile(année)
{
   if (année % 400 === 0)
      return true;
   else if (année % 100 === 0)
      return false;
   else if (année % 4 === 0)
      return true;
   return false;
}

console.log(bixestile(2100));