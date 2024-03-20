export async function GET(resquest){
 const users = [
  {
   id: 1, name: "oumar",
 },
 {
  id: 2, name: "adje",
},
{
 id: 3, name: "Mai",
}
 ]

 return new Response(JSON.stringify(users))
}