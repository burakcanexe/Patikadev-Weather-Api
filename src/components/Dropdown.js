import Header from "./Header";

export default function Dropdown({sehir, setSehir, sehirler}) {

    const sehirHandler = (e) =>{
        var result = sehirler.filter((item) => item.name === e.target.value);
        setSehir(result[0])
    }

    return <>
     <div className="header-dropdown">
     <Header sehir={sehir}/>
        <select value={sehir.name} onChange={sehirHandler} id="dropdownMenu">
            {
                sehirler.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))
            }
            
        </select>
     </div>
    </>
}