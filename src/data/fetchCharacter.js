const characterApiRequest = async(value) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${value}`;
    const res = await fetch(url);
    return res && res.ok ? await res.json() : null;
}

export default characterApiRequest;