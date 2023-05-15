import {useState, useContext} from "react";
import {Context} from "./ThemeContext";
import {MdDarkMode} from "react-icons/md";
import {HiOutlineLightBulb} from "react-icons/hi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  const {currentTheme, toggleTheme} = useContext(Context);

  return (
    <div className={`App`}>
      <Navbar />
      <div className={`${currentTheme}-theme page-content`}>

        <h1>The Life of a Beagle</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quam consequuntur, dolor saepe necessitatibus mollitia quae molestias
          recusandae. Unde deserunt fugiat repellat a esse omnis, repudiandae
          libero deleniti ratione consectetur, voluptates ipsum sit culpa id
          quisquam blanditiis pariatur possimus velit veniam! Nobis quae eum hic
          consequuntur exercitationem autem quidem adipisci eius earum magni
          illum omnis veniam minima facere consectetur, maiores in distinctio
          animi recusandae quisquam vero debitis enim maxime facilis. Architecto
          at beatae vel? Illo iure exercitationem corrupti optio commodi et odit
          accusantium eius obcaecati, perferendis fuga officia excepturi eum
          dolorem quos, voluptatem deserunt! Inventore veritatis non laborum
          dicta quos debitis repellendus deleniti iusto. Saepe deserunt ut quos
          mollitia fuga tenetur, adipisci, non, voluptas pariatur dignissimos
          dolore dolorum numquam consectetur quia rem quo quam doloribus
          provident expedita iusto? Tenetur, ex nesciunt tempora beatae,
          voluptate laborum consectetur impedit eveniet accusamus molestiae
          dolorum suscipit tempore, assumenda qui ullam nobis vero. Incidunt
          tempore commodi eum deleniti porro consequuntur pariatur, id eius,
          fugiat quam maxime minima delectus laborum iste totam explicabo rerum
          iure nulla voluptatum aliquam! Eveniet, aut quia ea explicabo culpa
          nesciunt laborum a! Ex ad molestiae modi. Modi, ut assumenda dolorum
          repudiandae accusantium maiores cupiditate fuga, voluptatibus odio in
          laboriosam temporibus possimus numquam sapiente fugiat, itaque velit
          nihil id necessitatibus corporis sunt atque. Consectetur cum et ad
          temporibus. Inventore eligendi esse cupiditate, aut, nam ab omnis
          optio consectetur quis in reprehenderit perferendis similique magni
          cumque, incidunt minima maxime atque. Voluptates eum laboriosam
          exercitationem saepe. Dolores ipsam aperiam sapiente! Dicta sequi quo
          distinctio ipsa odit sapiente ut voluptatibus ullam culpa pariatur
          repudiandae quis nulla corporis provident, fugit quod, rerum sit id
          maiores quasi debitis eum voluptatem minima? In enim unde, vel
          cupiditate omnis aliquam modi cum ea possimus, rerum qui neque
          necessitatibus numquam ratione illo, eaque libero veniam facilis.
          Saepe perferendis nostrum aliquam eveniet, ratione deserunt obcaecati
          a dolor ad amet sit suscipit illo quidem quas sunt nam accusamus
          repudiandae aspernatur sed porro neque. Cumque culpa iste nobis
          consectetur hic obcaecati ex, soluta atque sed dicta accusamus nulla
          eos tenetur! Voluptate obcaecati sint soluta consectetur provident
          repudiandae sequi doloremque qui vero quaerat deserunt explicabo
          cupiditate distinctio assumenda numquam mollitia accusamus quo
          expedita, saepe quos. Omnis iusto magnam nobis incidunt quae
          repellendus ut? Itaque necessitatibus consequatur dolor aliquam
          recusandae totam doloribus porro nesciunt inventore maxime culpa
          labore harum saepe, autem fugiat optio est reprehenderit aliquid at ut
          doloremque id consectetur. Quae recusandae ipsam enim rem, similique
          nisi nostrum optio, amet cum incidunt atque molestias consequuntur,
          aspernatur quibusdam sunt nulla ab. Ipsam accusantium officiis
          aliquam, numquam quas a adipisci maiores quisquam quia, neque iste,
          alias nam. Porro, ipsa ipsum fugiat quasi id explicabo similique,
          voluptatem numquam molestiae debitis consequuntur consectetur
          accusantium quaerat! Sed corporis consequuntur cupiditate neque
          dolores laudantium. Dolores, quisquam ducimus exercitationem vero
          suscipit voluptatum enim harum explicabo autem reprehenderit facere
          laudantium delectus officia numquam possimus odit? Dignissimos
          molestiae repellat quidem est. Quasi possimus soluta non et ut,
          molestiae impedit hic mollitia vitae explicabo itaque expedita eum
          quibusdam voluptatibus totam laborum optio reiciendis aliquid.
        </p>

        <img src="https://images.unsplash.com/photo-1610174830067-9382e4953a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
