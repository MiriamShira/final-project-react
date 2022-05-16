const MODIFY  = 'MODIFY';

export default function allergensToSaveAction(response) {
   debugger
   let allergensToSave=response

   return {
      type: MODIFY,
      allergensToSave
   }
}