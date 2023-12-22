import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Tree from "./components/Tree";

function App() {
  return (
    <>
      <header className="bg-emerald-700 p-4">
        <span className="text-emerald-50 font-bold text-lg">TreeHunt</span>
      </header>
      <main>
        <div className="bg-lime-50">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[50vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div>
          <ul className="grid gap-3">
            <Tree />
            <Tree />
          </ul>
        </div>
      </main>
      <footer>
        <p>Developed by Alba Mar</p>
        {/* <p>Data from Barcelona Open Data</p>
        <p>Images from Wikimedia</p> */}
      </footer>
    </>
  );
}

export default App;
