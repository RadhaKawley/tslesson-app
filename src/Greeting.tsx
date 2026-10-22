interface GreetingProps
{
name: string;
age: number;
}
function Greeting({ name, age }: GreetingProps) {
return (
<h1>
{name} is {age} years old
</h1>
);
}
export default Greeting