function estpremier(a)
{
   let root = Math.sqrt(a);
   for (let i = 2; i <= root; i++)
   {
      if (a % i === 0)
         return false;
   }
   return true;
}

function sommenombrespremiers(a, b)
{
   if (typeof(a) !== "number" || typeof(b) !== "number")
      return false;
   if (estpremier(a) && estpremier(b))
      return a + b;
   return false;
}

console.log(sommenombrespremiers(3,5));