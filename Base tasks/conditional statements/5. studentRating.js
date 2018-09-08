function studentRating(a, b) {
    var rating = " ";
    if (a >= 0 && a < 20) {
        rating = "F";
    } else if (a >= 20 && a < 40) {
        rating = "E";
    } else if (a >= 40 && a < 60) {
        rating = "D";
    } else if (a >= 60 && a < 75) {
        rating = "C";
    } else if ( a >= 75 && a < 90) {
        rating = "B";
    } else if ( a >= 90) {
        rating = "A";
    }
    return rating;
};

studentRating(47);

studentRating(93);

studentRating(0);
