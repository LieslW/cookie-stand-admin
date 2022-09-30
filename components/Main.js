import Form from "./Form";
export default function Main(props) {
  
  
  return (
    <main className="flex flex-col items-center justify-center py-4 pt-6 space-y-8 place-content-center ">

    <Form onSubmit={props.formHandler}/>
    <p>JSON String as soon as I figure out functionality</p>

    <p>Report Table Coming Soon...</p>
    </main>
  );
}