import AnimalListTemplate from "@components/custom/templates/views/AnimalListTemplate"
import AnimalList from "@components/custom/AnimalList"
import AnimalListSearchBar from './components/AnimalListSearchBar/indes';
import AddPet from "./components/AddPet";
const PetAdoptionSearch = () => {
    const loading = false;
    const onSearch = ()=>{}
    return <AnimalListTemplate
        animals={<AnimalList animals={[]} />}
        searchBar={<AnimalListSearchBar onSearch={onSearch} loading={loading} />}
        addButton={<AddPet/>}
    />
}
export default PetAdoptionSearch;
