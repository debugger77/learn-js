// Syntax of switch

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":                             // shift + alt + down arrow to copy content
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}