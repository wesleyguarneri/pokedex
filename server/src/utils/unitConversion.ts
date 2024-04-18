function convertHectogramsToPounds(hectograms: number): number {
    const pounds = parseFloat((hectograms * 0.220462).toFixed(2));
    return pounds;
}

function convertDecimetresToFeet(decimetres: number): number {
    const feet = parseFloat((decimetres * 0.328084).toFixed(2));
    return feet;
}

export { convertDecimetresToFeet, convertHectogramsToPounds };