import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main 
      // formHandler = {formHandler}
      />
      <Footer />
    </>
  );

//   function formHandler(e) {
//     // e.preventDefault();
//     let newStore = {
//       location: e.target.location.value,
//       minimum_customers_per_hour: e.target.minimum_customers_per_hour.value,
//       maximum_customers_per_hour: e.target.maximum_customers_per_hour.value,
//       average_cookies_per_sale: e.target.AverageCookiesPerHour.value,
//     };
//     createResource(newStore);
//   }
}
