// ecrire une function qui calcul le prix TTC connaissant le prix HT
//Le prix TTC est égal a HT + HT * TVA
//ex :
//Prix HT 5€
//TVA : 20% = 20/100 = 0,2 
//TTC = HT + HT * TVA = 1,2* HT

const prixHt = 10;
const tauxTva = 1.2

console.log(TTC(prixHt, tauxTva));

function TTC (prix, tva){
    return prix * tva
}

console.log(TTC(1224, 1.2));
