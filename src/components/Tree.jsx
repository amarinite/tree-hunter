function Tree() {
  return (
    <li className="p-4 bg-slate-100 grid grid-cols-2 gap-2 rounded-xl shadow-lg border-orange-400 border-2">
      <div>
        <p className="italic">PINUS PINEA</p>
        <p className="text-sm">Pi pinyoner; pi pinyer</p>
        <button>Seen it!</button>
      </div>
      <img
        className="rounded-xl"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Torrej%C3%B3n_de_Ardoz_%28RPS_02-10-2019%29_Pino_pi%C3%B1onero_del_Olivar.png/1280px-Torrej%C3%B3n_de_Ardoz_%28RPS_02-10-2019%29_Pino_pi%C3%B1onero_del_Olivar.png"
        alt="tree"
      />
    </li>
  );
}

export default Tree;
