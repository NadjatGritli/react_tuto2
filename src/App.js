import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import DoctorDetails from './pages/doctor__pages/DoctorDetails';
import Doctors from './pages/doctor__pages/Doctors';
import DoctorError from './pages/doctor__pages/DoctorError';
import SpecialitiesError from './pages/specialities__pages/SpecialitiesError';
import SpecialitiesList from './pages/specialities__pages/SpecialitiesList';
import CreateDoctor from './pages/doctor__pages/CreateDoctor';

// Layout page

import Layout from "./layout/Layout";

//Loaders

import { addDoctor, doctorDetailsLoader, doctorsData } from './doctorsdata/doctorsLoader';
import { specialitiesLoader } from './doctorsdata/specialitiesLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/doctors" errorElement={<DoctorError />}>
        <Route
          index
          element={<Doctors />}
          loader={doctorsData} />
        <Route
          path='add'
          element={<CreateDoctor />}
          loader={specialitiesLoader}
          action={addDoctor}
        />

        <Route
          path=':id'
          element={(<DoctorDetails />)}
          loader={doctorDetailsLoader}

        />
        <Route path='persecription' element={(
          <h3>
            all persecription
          </h3>

        )} />
        <Route path='dates' element={(
          <h3>
            all dates
          </h3>

        )} />
      </Route>
      <Route path='/speciality'>
        <Route index element={(<SpecialitiesList />)} loader={specialitiesLoader} />
      </Route>
      <Route path="/test_inline_component" element={(
        <div>
          <h3>
            test hee
          </h3>
        </div>
      )} />
      <Route path='*' element={(
        <h1>Not Found</h1>
      )} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    // <div className="App">
    //   <BrowserRouter>
    //     <main>
    //       <div className="main_container">
    //         <Routes>

    //         </Routes>
    //       </div>
    //     </main>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
