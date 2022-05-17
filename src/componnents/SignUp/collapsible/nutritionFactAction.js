const MODIFYAMOUNT  = 'MODIFY-AMOUNT';

export default function nutritionFactToSaveAction(amount,description) {
   debugger
   let nutritionalFactItem={description:description,amount:amount}
   return {
      type: MODIFYAMOUNT,
      nutritionalFactItem
   }
}