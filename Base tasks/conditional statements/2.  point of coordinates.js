function quarterOfCoordinates (x, y) {
    
    if (x > 0 && y > 0) {
        console.log("Точка лежит на первой четверти");
    } else if (x < 0 && y > 0) {
        console.log("Точка лежит на второй четверти");
    } else if (x < 0 && y < 0) {
        console.log("Точка лежит на третьей четверти");
    } else if (x > 0 && y < 0) {
        console.log("Точка лежит на четвёртой четверти");
    } else {
        console.log("Точка лежит на оси");
    }
};

quarterOfCoordinates (-1, 4);

quarterOfCoordinates (0, 0);

quarterOfCoordinates (2, -2);
